const STORAGE_KEY = 'expenseTrackerData';
const GetInitialTransactions = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stored transactions:', error);
      return [];
    }
  }
  return [];
};

export default GetInitialTransactions;
