const narrowTransactionType = (someType: string): 'Income' | 'expense' | 'cancelled' => {
  switch (someType) {
    case 'Income':
      return 'Income';
    case 'expense':
      return 'expense';
    default:
      return 'cancelled';
  }
};

export default narrowTransactionType;
