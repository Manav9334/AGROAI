import { useState } from "react";
import { Link } from "react-router";
import { Search, ChevronRight } from "lucide-react";
import { Card, CardContent, Input } from "../components/ui";

export const mockPlants = [
  {
    id: "tomato",
    name: "Tomato",
    image: "https://images.unsplash.com/photo-1723580864433-b6b95a6d8393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGZpZWxkfGVufDF8fHx8MTc3MzE0NzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Susceptible to various fungal and bacterial diseases.",
    diseases: ["Early Blight", "Late Blight", "Leaf Mold"]
  },
  {
    id: "wheat",
    name: "Wheat",
    image: "https://images.unsplash.com/photo-1626349351768-94a510988af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGNyb3AlMjBmaWVsZHxlbnwxfHx8fDE3NzMwMzIzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A staple cereal grain. Major diseases affect yield significantly.",
    diseases: ["Leaf Rust", "Stem Rust", "Powdery Mildew"]
  },
  {
    id: "corn",
    name: "Corn (Maize)",
    image: "https://images.unsplash.com/photo-1629808477627-3ba9b1359c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwY3JvcCUyMGZpZWxkfGVufDF8fHx8MTc3MzA2OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Requires specific conditions and is prone to leaf blights.",
    diseases: ["Northern Leaf Blight", "Common Rust"]
  },
  {
    id: "potato",
    name: "Potato",
    image: "https://images.unsplash.com/photo-1764587492501-bf8b61c09792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjcm9wJTIwZmllbGR8ZW58MXx8fHwxNzczMTQ3NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Root vegetable vulnerable to devastating blights.",
    diseases: ["Late Blight", "Early Blight", "Black Scurf"]
  }
];

export function PlantInfo() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = mockPlants.filter(plant => 
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.diseases.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-primary">Crop Library</h1>
        
        <div className="relative shadow-sm group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
          <Input 
            className="pl-10 rounded-2xl h-12 text-sm border-2 border-border focus-visible:ring-primary/50 bg-white" 
            placeholder="Search plant or disease..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredPlants.map((plant) => (
          <Link key={plant.id} to={`/plants/${plant.id}`} className="block">
            <Card className="hover:shadow-md transition-shadow duration-300 border-transparent bg-white rounded-2xl overflow-hidden active:scale-[0.98]">
              <div className="flex items-center h-28">
                <div className="w-28 h-full shrink-0 relative">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
                <CardContent className="p-3 flex-1 flex flex-col justify-center overflow-hidden">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-bold text-foreground truncate">{plant.name}</h3>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </div>
                  <p className="text-[10px] text-muted-foreground line-clamp-1 mb-2">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 overflow-hidden">
                    {plant.diseases.slice(0, 2).map((disease, i) => (
                      <span key={i} className="text-[9px] font-bold px-1.5 py-0.5 bg-secondary/20 text-secondary-foreground rounded border border-secondary/30 whitespace-nowrap">
                        {disease}
                      </span>
                    ))}
                    {plant.diseases.length > 2 && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-muted text-muted-foreground rounded whitespace-nowrap">
                        +{plant.diseases.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
        {filteredPlants.length === 0 && (
          <div className="py-12 text-center bg-card rounded-2xl border border-dashed border-border mt-4">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-sm text-muted-foreground font-bold">No matches found</p>
          </div>
        )}
      </div>
    </div>
  );
}
