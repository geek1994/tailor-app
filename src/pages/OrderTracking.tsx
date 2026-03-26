import { Link } from "react-router";
import { ArrowLeft, Calendar, Phone, MessageCircle } from "lucide-react";

export function OrderTracking() {
  const statuses = [
    { label: "Requested", completed: true },
    { label: "Assigned", completed: true },
    { label: "On the Way", completed: true },
    { label: "Items Collected", completed: false },
    { label: "In Progress", completed: false },
    { label: "Ready", completed: false },
    { label: "Out for Delivery", completed: false },
    { label: "Delivered", completed: false },
  ];

  const currentStatusIndex = statuses.findIndex((s) => !s.completed) - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <div className="text-sm font-medium text-gray-900">Order #ORDER123</div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Current Status Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Current Status</div>
          <div className="text-2xl font-bold mb-4">
            {statuses[currentStatusIndex]?.label || "Requested"}
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <Calendar className="w-4 h-4" />
            <span>Estimated completion: Feb 15, 2026</span>
          </div>
        </div>

        {/* Tailor Info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center text-2xl">
              👨‍💼
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">Your Tailor</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-xs text-gray-500 ml-1">4.9 (127)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-indigo-700">
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-900 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200">
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Order Timeline</h2>
          <div className="space-y-4">
            {statuses.map((status, index) => {
              const isActive = index === currentStatusIndex;
              const isCompleted = status.completed;
              return (
                <div key={status.label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? "bg-indigo-600"
                          : isActive
                          ? "bg-indigo-200"
                          : "bg-gray-200"
                      }`}
                    >
                      {isCompleted ? (
                        <span className="text-white text-sm">✓</span>
                      ) : (
                        <span
                          className={`w-3 h-3 rounded-full ${
                            isActive ? "bg-indigo-600" : "bg-gray-400"
                          }`}
                        />
                      )}
                    </div>
                    {index < statuses.length - 1 && (
                      <div
                        className={`w-0.5 h-8 ${
                          isCompleted ? "bg-indigo-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div
                      className={`font-medium ${
                        isCompleted || isActive
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {status.label}
                    </div>
                    {isCompleted && (
                      <div className="text-xs text-gray-500 mt-1">
                        Feb 12, 2026 at 2:30 PM
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Service Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Services</span>
              <span className="text-sm text-gray-900 text-right">
                Hem Pants, Shorten Sleeves
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Items</span>
              <span className="text-sm text-gray-900">3 items</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Address</span>
              <span className="text-sm text-gray-900 text-right">
                123 Main St, Dallas, TX 75201
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to="/help"
            className="block w-full py-3 bg-white border border-gray-300 text-gray-900 text-center rounded-xl font-medium hover:bg-gray-50"
          >
            Need Help?
          </Link>
          <button className="w-full py-3 bg-white border border-red-300 text-red-600 rounded-xl font-medium hover:bg-red-50">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
