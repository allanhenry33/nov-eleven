export interface DebtItem {
  id: number;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

interface PaymentMonth {
  cardName: string;
  payment: number;
  interestPaid: number;
  remainingBalance: number;
}

export function calculateAvalanche(debts: DebtItem[], monthlyPayment: number): PaymentMonth[] {
  // Sort debts by interest rate (highest to lowest)
  const sortedDebts = [...debts].sort((a, b) => b.interestRate - a.interestRate);
  const schedule: PaymentMonth[] = [];
  let currentDebts = sortedDebts.map(debt => ({ ...debt }));
  
  while (currentDebts.some(debt => debt.balance > 0)) {
    let remainingPayment = monthlyPayment;
    const monthPayments: PaymentMonth[] = [];

    // Calculate interest and minimum payments
    for (const debt of currentDebts) {
      if (debt.balance <= 0) continue;

      const monthlyInterest = (debt.interestRate / 100 / 12) * debt.balance;
      debt.balance += monthlyInterest;

      const payment = Math.min(
        debt.balance,
        debt === currentDebts[0] 
          ? Math.max(debt.minimumPayment, remainingPayment)
          : debt.minimumPayment
      );

      remainingPayment -= payment;
      debt.balance -= payment;

      monthPayments.push({
        cardName: debt.name || `Card ${debt.id}`,
        payment,
        interestPaid: monthlyInterest,
        remainingBalance: debt.balance
      });
    }

    // Add extra payment to highest interest debt if there's remaining payment
    if (remainingPayment > 0) {
      const highestInterestDebt = currentDebts.find(debt => debt.balance > 0);
      if (highestInterestDebt) {
        const extraPayment = Math.min(remainingPayment, highestInterestDebt.balance);
        highestInterestDebt.balance -= extraPayment;
        monthPayments[0].payment += extraPayment;
        monthPayments[0].remainingBalance = highestInterestDebt.balance;
      }
    }

    schedule.push(...monthPayments);
  }

  return schedule;
}