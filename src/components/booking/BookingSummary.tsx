import { MapPin, Calendar, CreditCard, Scissors } from "lucide-react";

interface BookingSummaryProps {
  data: {
    services: string[];
    address: string;
    zipCode: string;
    itemCount: number;
    notes: string;
    photos: string[];
    visitDate: string;
    visitTime: string;
    paymentMethod: string;
  };
}

const serviceNames: Record<string, string> = {
  hem: "Hem Pants/Skirt",
  sleeve: "Shorten Sleeves",
  waist: "Take In Waist",
  zipper: "Replace Zipper",
  button: "Button Replacement",
  taper: "Taper Clothing",
  patch: "Patch/Repair",
  other: "Other Alterations",
};

export function BookingSummary({ data }: BookingSummaryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Review Booking</h1>
      <p className="text-gray-600 mb-6">
        Please review your details before confirming
      </p>

      <div className="space-y-4">
        {/* Services */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Scissors className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-2">Services</div>
              <div className="space-y-1">
                {data.services.map((service) => (
                  <div key={service} className="text-sm text-gray-600">
                    • {serviceNames[service]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {data.itemCount} {data.itemCount === 1 ? "item" : "items"}
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">
                Service Address
              </div>
              <div className="text-sm text-gray-600">{data.address}</div>
              <div className="text-sm text-gray-600">{data.zipCode}</div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">
                Visit Schedule
              </div>
              <div className="text-sm text-gray-600">
                {formatDate(data.visitDate)}
              </div>
              <div className="text-sm text-gray-600">{data.visitTime}</div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Payment</div>
              <div className="text-sm text-gray-600">
                50% deposit ($25.00) now
              </div>
              <div className="text-sm text-gray-600">
                Remaining $25.00 due at completion
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4">
            <div className="font-semibold text-gray-900 mb-2">Your Notes</div>
            <div className="text-sm text-gray-600">{data.notes}</div>
          </div>
        )}

        {/* Photos */}
        {data.photos.length > 0 && (
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4">
            <div className="font-semibold text-gray-900 mb-3">Photos</div>
            <div className="grid grid-cols-3 gap-2">
              {data.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={photo}
                    alt={`Item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terms */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
          <p className="text-xs text-indigo-900">
            By confirming, you agree to our cancellation policy. Cancel up to 24
            hours before your appointment for a full refund.
          </p>
        </div>
      </div>
    </div>
  );
}
