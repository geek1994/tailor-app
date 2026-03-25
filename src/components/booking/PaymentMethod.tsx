import { CreditCard, Check } from "lucide-react";

interface PaymentMethodProps {
  selected: string;
  onSelect: (method: string) => void;
}

export function PaymentMethod({ selected, onSelect }: PaymentMethodProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Add Payment</h1>
      <p className="text-gray-600 mb-6">
        A 50% deposit is required to confirm your booking
      </p>

      <div className="space-y-4">
        {/* Card Payment */}
        <div
          className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
            selected === "card"
              ? "border-indigo-600 bg-indigo-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
          onClick={() => onSelect("card")}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="font-semibold text-gray-900">
                Credit/Debit Card
              </div>
            </div>
            {selected === "card" && (
              <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          {selected === "card" && (
            <div className="space-y-3 pt-3 border-t border-gray-200">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Deposit Info */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Deposit (50%)</span>
            <span className="font-semibold text-gray-900">$25.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Due at completion</span>
            <span className="font-semibold text-gray-900">$25.00</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-300">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900">
                Total Service Cost
              </span>
              <span className="text-lg font-bold text-indigo-600">$50.00</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Your card will be charged $25.00 now. The remaining balance will be
          collected upon completion.
        </p>
      </div>
    </div>
  );
}
