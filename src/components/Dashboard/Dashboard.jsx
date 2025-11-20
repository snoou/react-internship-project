import './Dashboard.css'
import Diagram from '../Diagram/Diagram';
import UseContext from '../../utils/UseContext';
const Dashboard = () => {
  const [income, expense] = UseContext()
  return (
    <>
      <div className="size">
        <div className="header">
          <h2>داشبورد</h2>
          <Diagram income={income} expense={expense}></Diagram>


        </div>
      </div>
    </>
  );
};
export default Dashboard;