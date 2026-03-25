import { Calendar, Clock } from "lucide-react";

interface ScheduleVisitProps {
  date: string;
  time: string;
  onUpdate: (date: string, time: string) => void;
}

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

export function ScheduleVisit({ date, time, onUpdate }: ScheduleVisitProps) {
  // Get next 7 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate);
    }
    return dates;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const formatDisplayDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const availableDates = getAvailableDates();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Schedule Your Visit
      </h1>
      <p className="text-gray-600 mb-6">Choose a convenient date and time</p>

      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Select Date
          </label>
          <div className="space-y-2">
            {availableDates.map((d) => {
              const dateValue = formatDate(d);
              const isSelected = date === dateValue;
              return (
                <button
                  key={dateValue}
                  onClick={() => onUpdate(dateValue, time)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-gray-900">
                    {formatDisplayDate(d)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        {date && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Select Time Window
            </label>
            <div className="space-y-2">
              {timeSlots.map((slot) => {
                const isSelected = time === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => onUpdate(date, slot)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{slot}</div>
                    <div className="text-sm text-gray-500">Available</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
