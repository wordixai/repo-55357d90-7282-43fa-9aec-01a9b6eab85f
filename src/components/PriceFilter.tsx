import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

interface PriceRange {
  id: string;
  label: string;
  min: number;
  max?: number;
}

interface PriceFilterProps {
  priceRanges: PriceRange[];
  selectedRange: string;
  onRangeChange: (rangeId: string) => void;
}

const PriceFilter = ({ priceRanges, selectedRange, onRangeChange }: PriceFilterProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border-4 border-black pop-frame">
      <h3 className="handwritten text-2xl font-bold text-black mb-6 flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-green-500" />
        Price Range
      </h3>
      
      <div className="space-y-3">
        {priceRanges.map((range) => (
          <Button
            key={range.id}
            variant={selectedRange === range.id ? "default" : "ghost"}
            className={`w-full justify-start handwritten text-lg p-4 h-auto border-2 transition-all ${
              selectedRange === range.id
                ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white border-black hover:from-green-500 hover:to-blue-500'
                : 'bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-black'
            }`}
            onClick={() => onRangeChange(range.id)}
          >
            {range.label}
          </Button>
        ))}
      </div>
      
      {/* Price visualization */}
      <div className="mt-6 pt-6 border-t-2 border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="handwritten">$0</span>
          <span className="handwritten">$200+</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;