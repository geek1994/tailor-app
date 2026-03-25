import { Check } from "lucide-react";

const services = [
  { id: "hem", name: "Hem Pants/Skirt", icon: "👖" },
  { id: "sleeve", name: "Shorten Sleeves", icon: "👔" },
  { id: "waist", name: "Take In Waist", icon: "📏" },
  { id: "zipper", name: "Replace Zipper", icon: "🔧" },
  { id: "button", name: "Button Replacement", icon: "🔘" },
  { id: "taper", name: "Taper Clothing", icon: "✂️" },
  { id: "patch", name: "Patch/Repair", icon: "🧵" },
  { id: "other", name: "Other Alterations", icon: "✨" },
];

interface ServiceSelectionProps {
  selected: string[];
  onSelect: (services: string[]) => void;
}

export function ServiceSelection({ selected, onSelect }: ServiceSelectionProps) {
  const toggleService = (serviceId: string) => {
    if (selected.includes(serviceId)) {
      onSelect(selected.filter((id) => id !== serviceId));
    } else {
      onSelect([...selected, serviceId]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        What needs to be altered?
      </h1>
      <p className="text-gray-600 mb-6">Select all that apply</p>

      <div className="grid grid-cols-2 gap-3">
        {services.map((service) => {
          const isSelected = selected.includes(service.id);
          return (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all text-left ${
                isSelected
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="text-3xl mb-2">{service.icon}</div>
              <div className="text-sm font-semibold text-gray-900">
                {service.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
