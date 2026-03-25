import { MapPin, AlertCircle } from "lucide-react";
import { useState } from "react";

interface AddressInputProps {
  address: string;
  zipCode: string;
  onUpdate: (address: string, zipCode: string) => void;
}

const validZipCodes = [
  "75201",
  "75202",
  "75203",
  "75204",
  "75205",
  "75206",
  "75207",
  "75208",
  "75209",
  "75210",
  "75225",
  "75226",
  "75214",
  "75220",
];

export function AddressInput({ address, zipCode, onUpdate }: AddressInputProps) {
  const [zipError, setZipError] = useState("");

  const handleZipChange = (value: string) => {
    onUpdate(address, value);
    if (value.length === 5) {
      if (!validZipCodes.includes(value)) {
        setZipError("Sorry, we don't serve this area yet");
      } else {
        setZipError("");
      }
    } else {
      setZipError("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Where should we visit?
      </h1>
      <p className="text-gray-600 mb-6">Enter your service address</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={address}
              onChange={(e) => onUpdate(e.target.value, zipCode)}
              placeholder="123 Main Street, Apt 4B"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => handleZipChange(e.target.value)}
            placeholder="75201"
            maxLength={5}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
              zipError
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-indigo-500"
            }`}
          />
          {zipError && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>{zipError}</span>
            </div>
          )}
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <p className="text-sm text-indigo-900 font-medium mb-2">
            📍 Currently Serving Dallas/DFW
          </p>
          <p className="text-xs text-indigo-700">
            We're expanding to more areas soon. Sign up to get notified!
          </p>
        </div>
      </div>
    </div>
  );
}
