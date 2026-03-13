import { Link } from "react-router";
import { Camera, CloudRain, Info, Leaf, ChevronRight, Wind } from "lucide-react";
import { Card, CardContent, Button } from "../components/ui";

export function Home() {
  return (
    <div className="space-y-6 pb-4">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden shadow-lg border border-border bg-card h-64">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 to-primary/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1697823117636-caa39e7e04b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ3JlZW4lMjBmYXJtJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MzE0NzQwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Farm landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 p-5 flex flex-col h-full justify-end">
          <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit mb-3 backdrop-blur-sm border border-secondary/30">
            AI Diagnostics
          </span>
          <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
            Protect Your Crops
          </h1>
          <p className="text-sm text-white/90 mb-4 font-light line-clamp-2">
            Instant disease detection with just a photo.
          </p>
<Link to="/predict">
  <Button 
    size="sm"
    variant="secondary"
    className="w-full rounded-xl h-10 font-bold bg-white text-primary hover:bg-gray-100"
  >
    Scan Leaf Now 
    <ChevronRight className="ml-1 w-4 h-4" />
  </Button>
</Link>
        </div>
      </section>

      {/* Quick Status / Weather Snippet */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 p-2.5 rounded-xl text-blue-600">
            <Wind className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">Local Weather</p>
            <p className="text-sm font-bold text-foreground">24°C, Humidity 65%</p>
          </div>
        </div>
        <Link to="/predict" className="text-xs font-bold text-primary flex items-center">
          Update <ChevronRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>

      {/* Quick Actions */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 px-1">
          <Leaf className="w-5 h-5 text-primary" /> Features
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          <Link to="/predict">
            <Card className="h-full border-transparent hover:border-primary/50 transition-colors shadow-sm rounded-2xl">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold mb-1">Diagnose</h3>
                <p className="text-[10px] text-muted-foreground leading-snug">Upload leaf photo</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/predict">
            <Card className="h-full border-transparent hover:border-primary/50 transition-colors shadow-sm rounded-2xl">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3 text-blue-600">
                  <CloudRain className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold mb-1">Weather</h3>
                <p className="text-[10px] text-muted-foreground leading-snug">Set environment</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/plants" className="col-span-2">
            <Card className="border-transparent hover:border-primary/50 transition-colors shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-sm font-bold mb-0.5">Crop Library</h3>
                  <p className="text-[10px] text-muted-foreground leading-snug">Learn about diseases and cures</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
