import { Camera, Minus, Plus } from "lucide-react";
import { useRef } from "react";

interface ItemDetailsProps {
  itemCount: number;
  notes: string;
  photos: string[];
  onUpdate: (itemCount: number, notes: string, photos: string[]) => void;
}

export function ItemDetails({
  itemCount,
  notes,
  photos,
  onUpdate,
}: ItemDetailsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      onUpdate(itemCount, notes, [...photos, ...newPhotos]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Item Details</h1>
      <p className="text-gray-600 mb-6">
        Tell us more about what you need altered
      </p>

      <div className="space-y-6">
        {/* Item Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Number of Items
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onUpdate(Math.max(1, itemCount - 1), notes, photos)}
              className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Minus className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-gray-900">{itemCount}</div>
              <div className="text-sm text-gray-500">
                {itemCount === 1 ? "item" : "items"}
              </div>
            </div>
            <button
              onClick={() => onUpdate(itemCount + 1, notes, photos)}
              className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => onUpdate(itemCount, e.target.value, photos)}
            placeholder="Any specific instructions or details about the alterations..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos (Optional)
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-indigo-400 hover:bg-indigo-50 transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-sm font-medium text-gray-700">
              Add Photos of Items
            </div>
            <div className="text-xs text-gray-500">
              Help us understand what you need
            </div>
          </button>

          {photos.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {photos.map((photo, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
