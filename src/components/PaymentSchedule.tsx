import React from 'react';
import { calculateAvalanche, type DebtItem } from '../utils/debtCalculator';

interface PaymentScheduleProps {
  debts: DebtItem[];
  monthlyPayment: number;
}

function PaymentSchedule({ debts, monthlyPayment }: PaymentScheduleProps) {
  const schedule = calculateAvalanche(debts, monthlyPayment);
  const totalInterest = schedule.reduce((sum, month) => sum + month.interestPaid, 0);
  const months = schedule.length;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Payment Schedule</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Time to Debt Free</h3>
          <p className="text-3xl font-bold text-green-600">
            {years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''} 
            {remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}
          </p>
        </div>
        <div className="bg-red-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Total Interest Paid</h3>
          <p className="text-3xl font-bold text-red-600">
            ${totalInterest.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((month, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {month.cardName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  ${month.payment.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                  ${month.interestPaid.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  ${month.remainingBalance.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentSchedule;