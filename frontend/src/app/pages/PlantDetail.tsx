import { useParams, Link, Navigate, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, ShieldAlert, Sprout } from "lucide-react";
import { Button, Card, CardContent } from "../components/ui";
import { mockPlants } from "./PlantInfo";

export function PlantDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plant = mockPlants.find(p => p.id === id);

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <div className="-mx-4 sm:-mx-5 -mt-4 sm:-mt-5 pb-8 relative bg-gray-50 min-h-full">
      {/* Mobile Hero Image */}
      <div className="relative h-64 w-full">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        
        {/* Top Actions overlay */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="bg-white/20 backdrop-blur-md text-white hover:bg-white/40 h-10 w-10 p-0 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-6 left-5 right-5 z-20">
          <div className="flex items-center gap-2 mb-2">
            <Sprout className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-bold tracking-widest uppercase text-[10px]">Crop Profile</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">{plant.name}</h1>
        </div>
      </div>

      {/* Content pulled up over image */}
      <div className="relative z-30 -mt-6 px-4 sm:px-5 space-y-4">
        {/* Description Card */}
        <Card className="shadow-lg rounded-[2rem] border-0 bg-white">
          <CardContent className="p-5">
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              {plant.description}
            </p>
          </CardContent>
        </Card>

        {/* Diseases Card */}
        <Card className="border-t-[4px] border-t-destructive shadow-md rounded-[2rem] bg-white overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-destructive/10 p-2 rounded-xl text-destructive shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-foreground">Known Diseases</h2>
            </div>
            <ul className="space-y-3">
              {plant.diseases.map((disease, i) => (
                <li key={i} className="flex items-start gap-3 bg-muted/30 p-3 rounded-xl">
                  <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-destructive shrink-0" />
                  <div>
                    <span className="font-bold text-sm text-foreground block">{disease}</span>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">Affects leaves & stems. Monitor closely in wet conditions.</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Prevention Card */}
        <Card className="border-t-[4px] border-t-primary shadow-md rounded-[2rem] bg-white overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-xl text-primary shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-foreground">Prevention</h2>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span className="text-muted-foreground leading-snug"><strong className="text-foreground">Rotation:</strong> Avoid consecutive planting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span className="text-muted-foreground leading-snug"><strong className="text-foreground">Watering:</strong> Keep foliage dry; water base.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span className="text-muted-foreground leading-snug"><strong className="text-foreground">Spacing:</strong> Ensure good air circulation.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
