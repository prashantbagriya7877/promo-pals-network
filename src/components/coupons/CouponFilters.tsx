
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tag, MapPin, Percent } from "lucide-react";

interface CouponFiltersProps {
  categories: string[];
  locations: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minDiscount: number;
  setMinDiscount: (discount: number) => void;
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
}

const CouponFilters = ({
  categories,
  locations,
  selectedCategory,
  setSelectedCategory,
  minDiscount,
  setMinDiscount,
  selectedLocations,
  setSelectedLocations
}: CouponFiltersProps) => {
  const handleLocationChange = (location: string) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter(l => l !== location)
        : [...selectedLocations, location]
    );
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Tag className="h-4 w-4 mr-2" />
          Filter Coupons
        </CardTitle>
        <CardDescription>
          Find the perfect deal for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category filter */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select 
            value={selectedCategory} 
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Minimum discount filter */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="min-discount">Minimum Discount</Label>
            <span className="text-sm font-medium">{minDiscount}%</span>
          </div>
          <Slider
            id="min-discount"
            min={0}
            max={100}
            step={5}
            value={[minDiscount]}
            onValueChange={(value) => setMinDiscount(value[0])}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Locations filter */}
        <div className="space-y-2">
          <Label className="flex items-center mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            Locations
          </Label>
          <div className="space-y-2">
            {locations.map(location => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={`location-${location}`}
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={() => handleLocationChange(location)}
                />
                <label
                  htmlFor={`location-${location}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouponFilters;
