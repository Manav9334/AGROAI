import { predictDisease } from "../Services/predictionService";
import { useState, useRef } from "react";
import { Camera, UploadCloud, Thermometer, Droplets, CloudRain, Sun, SearchCheck, CheckCircle2 } from "lucide-react";
import { Card, CardContent, Button, Input } from "../components/ui";

export function Predict() {
  const [image, setImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [result, setResult] = useState<{ name: string; confidence: number; treatment: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files || !e.target.files[0]) return;

  const file = e.target.files[0];
  setSelectedFile(file);

  // 🔍 Validate file type
  if (!file.type.startsWith("image/")) {
    setError("Please upload a valid image file.");
    setImage(null);
    return;
  }

  // 📏 Validate file size (10MB limit)
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    setError("Image size must be less than 10MB.");
    setImage(null);
    return;
  }

  // ✅ If valid
  const url = URL.createObjectURL(file);
  setImage(url);
  setResult(null);
  setError(null);
};

const handlePredict = async () => {
  if (!selectedFile) {
    setError("Please upload a plant leaf image before analyzing.");
    return;
  }

  setError(null);
  setIsPredicting(true);

  try {
    const data = await predictDisease(selectedFile);

    // 🔎 Handle invalid image
    if (data.status === "invalid") {
      setResult(null);
      setError(data.message);
      return;
    }

    // ✅ Successful prediction
    setResult({
      name: data.name,
      confidence: data.confidence,
      treatment: data.treatment,
    });

  } catch (error) {
    setError("Prediction failed. Please try again.");
  } finally {
    setIsPredicting(false);
  }
};
  return (
    <div className="space-y-6 pb-6">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
          <SearchCheck className="w-6 h-6" /> Diagnose Disease
        </h1>
        <p className="text-xs text-muted-foreground px-4">
          Upload a clear photo of the affected leaf
        </p>
      </div>

      <div className="space-y-6">
        {/* Image Upload Area */}
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5 hover:border-primary transition-colors overflow-hidden rounded-[2rem]">
          <CardContent 
            className="p-0 flex flex-col items-center justify-center min-h-[200px] text-center relative"
            onClick={() => !image && fileInputRef.current?.click()}
          >
            {image ? (
              <div className="w-full relative group h-52">
                <img src={image} alt="Uploaded leaf" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="font-bold rounded-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    <Camera className="w-4 h-4 mr-2" /> Retake Photo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="py-8 px-4 flex flex-col items-center w-full cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold mb-1 text-foreground">Tap to Upload</h3>
                <p className="text-xs text-muted-foreground">Camera or Gallery</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageUpload}
            />
          </CardContent>
        </Card>
        {error && (
  <div className="text-red-600 text-sm font-medium text-center mt-2">
    {error}
  </div>
)}

        {/* Environmental Context - Accordion style in a mobile view */}
        <Card className="shadow-sm border-border bg-card rounded-2xl">
          <CardContent className="p-4 space-y-4">
            <h3 className="text-sm font-bold flex items-center gap-2 text-foreground">
              <Sun className="w-4 h-4 text-orange-500" /> Environment (Optional)
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-orange-500" /> Temp (°C)
                </label>
                <Input type="number" placeholder="28" className="bg-muted/30 rounded-xl h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-blue-500" /> Humidity (%)
                </label>
                <Input type="number" placeholder="65" className="bg-muted/30 rounded-xl h-10 text-sm" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main CTA */}
        <Button 
          size="lg" 
          className="w-full h-14 text-base font-bold rounded-2xl shadow-lg bg-primary hover:bg-primary/90 transition-transform active:scale-[0.98]" 
          disabled={!image || isPredicting}
          onClick={handlePredict}
        >
          {isPredicting ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analyzing...
            </span>
          ) : (
            "Analyze Leaf"
          )}
        </Button>
      </div>

      {/* Results Bottom Sheet-like Card */}
      {result && (
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-300">
          <Card className="border-t-[6px] border-t-destructive shadow-xl rounded-[2rem] bg-white">
            <CardContent className="p-5 space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-destructive mb-1 block">Disease Detected</span>
                  <h2 className="text-xl font-bold text-foreground leading-tight">{result.name}</h2>
                </div>
                <div className="bg-primary/10 text-primary px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {result.confidence}%
                </div>
              </div>
              
              <div className="bg-muted/40 p-4 rounded-2xl border border-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Action Required</span>
                <p className="text-sm leading-relaxed text-foreground font-medium">
                  {result.treatment}
                </p>
              </div>
              
              <Button variant="outline" className="w-full rounded-xl h-10 text-sm">
                View Full Treatment Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
