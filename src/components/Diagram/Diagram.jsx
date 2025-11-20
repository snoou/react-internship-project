import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import './Diagram.css'
const Diagram = ({ income = [], expense = [] }) => {
  const lineRef = useRef(null);
  const pieRef = useRef(null);
  const barRef = useRef(null);

  const lineChart = useRef(null);
  const pieChart = useRef(null);
  const barChart = useRef(null);

  const [year, setYear] = useState("");

  const safeDate = (d) => (d ? new Date(d) : null);

  const years = [...new Set(
    [...income, ...expense]
      .map((i) => safeDate(i?.date)?.getFullYear())
      .filter(Boolean)
  )].sort((a, b) => b - a);

  const buildDailyData = () => {
    const y = Number(year);

    const makeMap = (arr) => {
      const m = new Map();
      arr.forEach((i) => {
        const dt = safeDate(i?.date);
        if (!dt) return;
        if (y && dt.getFullYear() !== y) return;

        const key = dt.toISOString().slice(0, 10);
        const val = Number(i?.amount) || 0;
        m.set(key, (m.get(key) || 0) + val);
      });
      return m;
    };

    const incMap = makeMap(income);
    const expMap = makeMap(expense);

    const keys = [...new Set([...incMap.keys(), ...expMap.keys()])].sort(
      (a, b) => new Date(a) - new Date(b)
    );

    return {
      labels: keys,
      incomeData: keys.map((k) => incMap.get(k) || 0),
      expenseData: keys.map((k) => expMap.get(k) || 0),
    };
  };

  const buildTotals = () => {
    const sum = (arr) =>
      arr.reduce((t, i) => t + (Number(i?.amount) || 0), 0);

    return {
      totalIncome: sum(income),
      totalExpense: sum(expense),
    };
  };

  const { labels, incomeData, expenseData } = buildDailyData();
  const { totalIncome, totalExpense } = buildTotals();

  // --- LINE CHART ---
  useEffect(() => {
    if (lineChart.current) lineChart.current.destroy();
    if (!lineRef.current) return;

    lineChart.current = new Chart(lineRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "درآمد", data: incomeData, borderColor: "#4caf50" },
          { label: "هزینه", data: expenseData, borderColor: "#f44336" },
        ],
      },
    });
  }, [labels, incomeData, expenseData]);

  useEffect(() => {
    if (pieChart.current) pieChart.current.destroy();
    if (!pieRef.current) return;

    pieChart.current = new Chart(pieRef.current, {
      type: "pie",
      data: {
        labels: ["درآمد کل", "هزینه کل"],
        datasets: [
          {
            data: [totalIncome, totalExpense],
            backgroundColor: ["#4caf50", "#f44336"],
          },
        ],
      },
    });
  }, [totalIncome, totalExpense]);

  // --- BAR CHART ---
  useEffect(() => {
    if (barChart.current) barChart.current.destroy();
    if (!barRef.current) return;

    barChart.current = new Chart(barRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "درآمد", data: incomeData, backgroundColor: "#4caf50" },
          { label: "هزینه", data: expenseData, backgroundColor: "#f44336" },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, [labels, incomeData, expenseData]);

  return (
    <div style={{ width: 700, margin: "20px auto" }}>
      <div style={{ marginBottom: 10 }}>
        <label>سال:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">تمام سال‌ها</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <h3 className="chart-title">نمودار خطی</h3>
      <div className="chart-wrapper">
        <canvas ref={lineRef}></canvas>
      </div>

      <h3 className="chart-title">نمودار دایره‌ای (مجموع کل)</h3>
      <div className="pie-box">
        <canvas ref={pieRef}></canvas>
      </div>


      <h3 className="chart-title">نمودار میله‌ای روزانه</h3>
      <div className="chart-wrapper">
        <canvas ref={barRef}></canvas>
      </div>

    </div>
  );
};

export default Diagram;
