import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Monitor, Users, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hci-hero.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                <span>Human-Computer Interaction Research</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Enhancing{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  User Experience
                </span>{" "}
                in Software Development
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore cutting-edge research and implementation strategies for human-computer interaction. 
                Discover how thoughtful design transforms the way users connect with technology.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow group"
              >
                Explore Research
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Interface Studies</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-research" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">User Tests</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Lightbulb className="w-8 h-8 text-innovation" />
                </div>
                <div className="text-2xl font-bold text-foreground">25</div>
                <div className="text-sm text-muted-foreground">Design Patterns</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={heroImage} 
                alt="Human-Computer Interaction visualization showing digital interfaces and user experience flows"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-hero rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};