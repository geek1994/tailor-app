import { useState } from "react";
import {  useNavigate } from "react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { ServiceSelection } from "../components/booking/ServiceSelection";
import { AddressInput } from "../components/booking/AddressInput";
import { ItemDetails } from "../components/booking/ItemDetails";
import { ScheduleVisit } from "../components/booking/ScheduleVisit";
import { PaymentMethod } from "../components/booking/PaymentMethod";
import { BookingSummary } from "../components/booking/BookingSummary";

const steps = [
  "Service",
  "Address",
  "Details",
  "Schedule",
  "Payment",
  "Review",
];

export function BookingFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    services: [] as string[],
    address: "",
    zipCode: "",
    itemCount: 1,
    notes: "",
    photos: [] as string[],
    visitDate: "",
    visitTime: "",
    paymentMethod: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit booking
      navigate("/orders/ORDER123");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData({ ...bookingData, ...data });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ServiceSelection
            selected={bookingData.services}
            onSelect={(services) => updateBookingData({ services })}
          />
        );
      case 1:
        return (
          <AddressInput
            address={bookingData.address}
            zipCode={bookingData.zipCode}
            onUpdate={(address, zipCode) =>
              updateBookingData({ address, zipCode })
            }
          />
        );
      case 2:
        return (
          <ItemDetails
            itemCount={bookingData.itemCount}
            notes={bookingData.notes}
            photos={bookingData.photos}
            onUpdate={(itemCount, notes, photos) =>
              updateBookingData({ itemCount, notes, photos })
            }
          />
        );
      case 3:
        return (
          <ScheduleVisit
            date={bookingData.visitDate}
            time={bookingData.visitTime}
            onUpdate={(visitDate, visitTime) =>
              updateBookingData({ visitDate, visitTime })
            }
          />
        );
      case 4:
        return (
          <PaymentMethod
            selected={bookingData.paymentMethod}
            onSelect={(paymentMethod) => updateBookingData({ paymentMethod })}
          />
        );
      case 5:
        return <BookingSummary data={bookingData} />;
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return bookingData.services.length > 0;
      case 1:
        return bookingData.address && bookingData.zipCode;
      case 2:
        return bookingData.itemCount > 0;
      case 3:
        return bookingData.visitDate && bookingData.visitTime;
      case 4:
        return bookingData.paymentMethod;
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={currentStep === 0 ? () => navigate("/") : handleBack}
            className="inline-flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <div className="text-sm font-medium text-gray-900">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-md mx-auto">
          <div className="flex gap-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full transition-all ${
                  index <= currentStep ? "bg-indigo-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-md mx-auto px-6 py-6">{renderStep()}</div>
      </div>

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
              canProceed()
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentStep === steps.length - 1 ? "Confirm Booking" : "Continue"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
