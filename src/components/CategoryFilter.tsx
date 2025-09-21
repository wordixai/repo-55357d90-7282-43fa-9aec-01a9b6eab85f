import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Category {
  id: string;
  name: string;
  count: number;
  color?: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border-4 border-black pop-frame">
      <h3 className="handwritten text-2xl font-bold text-black mb-6 flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
        Categories
      </h3>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className={`w-full justify-between handwritten text-lg p-4 h-auto border-2 transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white border-black hover:from-orange-500 hover:to-pink-500'
                : 'bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-black'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span>{category.name}</span>
            <Badge 
              variant="secondary" 
              className={`${
                selectedCategory === category.id 
                  ? 'bg-white text-black' 
                  : 'bg-pink-400 text-white'
              }`}
            >
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center items-center gap-3 mt-6 pt-6 border-t-2 border-gray-200">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default CategoryFilter;