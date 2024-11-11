import React from 'react';
import { CreditCard, Trash2 } from 'lucide-react';
import type { DebtItem } from '../utils/debtCalculator';

interface DebtCardProps {
  debt: DebtItem;
  onUpdate: (id: number, field: keyof DebtItem, value: string | number) => void;
  onRemove: (id: number) => void;
}

function DebtCard({ debt, onUpdate, onRemove }: DebtCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => onRemove(debt.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={debt.name}
              onChange={(e) => onUpdate(debt.id, 'name', e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Card name"
            />
            <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Balance
          </label>
          <div className="relative">
            <input
              type="number"
              value={debt.balance}
              onChange={(e) => onUpdate(debt.id, 'balance', Number(e.target.value))}
              className="w-full pl-8 pr-3 py-2 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            <span className="absolute left-3 top-2 text-gray-500">$</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Rate (APR)
          </label>
          <div className="relative">
            <input
              type="number"
              value={debt.interestRate}
              onChange={(e) => onUpdate(debt.id, 'interestRate', Number(e.target.value))}
              className="w-full pl-3 pr-8 py-2 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            <span className="absolute right-3 top-2 text-gray-500">%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Payment
          </label>
          <div className="relative">
            <input
              type="number"
              value={debt.minimumPayment}
              onChange={(e) => onUpdate(debt.id, 'minimumPayment', Number(e.target.value))}
              className="w-full pl-8 pr-3 py-2 rounded border-2 border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            <span className="absolute left-3 top-2 text-gray-500">$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebtCard;