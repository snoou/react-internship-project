const DeleteTransaction = (id) => {
  setTransactions((prevTransactions) =>
    prevTransactions.filter((tx) => tx.id !== id)
  );
};

export default DeleteTransaction