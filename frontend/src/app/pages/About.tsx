import { Leaf, Cpu, ShieldCheck, Microscope } from "lucide-react";
import { Card, CardContent } from "../components/ui";

export function About() {
  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="text-center space-y-2 mt-2">
        <h1 className="text-2xl font-bold text-primary">About AgroAI</h1>
        <p className="text-xs text-muted-foreground px-4">
          Advanced AI-driven crop disease prediction
        </p>
      </div>

      {/* Mission/Objective */}
      <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden rounded-[2rem]">
        <CardContent className="p-6 text-center relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1697823117636-caa39e7e04b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg')] opacity-10 mix-blend-overlay bg-cover"></div>
          <div className="relative z-10">
            <ShieldCheck className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h2 className="text-lg font-bold mb-3">Our Mission</h2>
            <p className="text-[11px] leading-relaxed text-white/90 font-medium">
              Reduce global crop loss by providing accessible, instant, and accurate disease diagnoses directly to smartphones. 
              We blend state-of-the-art machine learning with agricultural science to ensure food security.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How it works / R&D Details */}
      <div className="space-y-4 pt-2">
        <h2 className="text-base font-bold text-center text-foreground flex items-center justify-center gap-2">
          <Microscope className="w-5 h-5 text-accent" /> System Capabilities
        </h2>
        
        <div className="space-y-3">
          <Card className="border-transparent shadow-sm bg-white rounded-2xl">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Deep Learning</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Trained on millions of annotated images using Convolutional Neural Networks (CNNs).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-transparent shadow-sm bg-white rounded-2xl">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Environment Data</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Integrates real-time weather and soil data to improve prediction accuracy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-transparent shadow-sm bg-white rounded-2xl">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/20 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Actionable Insights</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Provides scientifically-backed treatment recommendations to mitigate damage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center pt-4">
        <p className="text-[10px] text-muted-foreground font-bold flex items-center justify-center gap-1.5">
          AgroAI R&D Team <Leaf className="w-3 h-3 text-primary" /> Version 1.0
        </p>
      </div>
    </div>
  );
}
