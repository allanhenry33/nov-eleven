import React from 'react';

function FAQ() {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            What is the Debt Avalanche Method?
          </h3>
          <p className="text-gray-600">
            The Debt Avalanche method is a debt repayment strategy where you pay minimum payments on all debts while putting extra money toward the debt with the highest interest rate. This saves you the most money in interest payments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Why is this better than the Snowball Method?
          </h3>
          <p className="text-gray-600">
            While the Snowball method (paying smallest debts first) provides psychological wins, the Avalanche method mathematically saves you more money by reducing high-interest debt faster. Choose Avalanche if you want to pay less interest overall.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            How much can I save with the Avalanche Method?
          </h3>
          <p className="text-gray-600">
            The savings depend on your debt amounts and interest rates. Generally, the bigger the difference between your highest and lowest interest rates, the more you'll save compared to other methods. Our calculator shows your total interest savings.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            What if I can't pay more than the minimum payments?
          </h3>
          <p className="text-gray-600">
            Start by paying the minimums and look for ways to increase your payment amount. Even small increases in your monthly payment can significantly reduce your debt payoff time and total interest paid.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Should I close my credit cards after paying them off?
          </h3>
          <p className="text-gray-600">
            Consider keeping older accounts open with zero balances, as they can help your credit score by maintaining a longer credit history and lower credit utilization ratio. Just avoid using them if you're working on becoming debt-free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;