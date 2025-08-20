import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Eye, 
  Zap, 
  Shield, 
  Accessibility, 
  Target,
  Brain,
  Settings
} from "lucide-react";

export const Principles = () => {
  const principles = [
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Place users at the center of every design decision. Understand their needs, goals, and contexts to create meaningful experiences.",
      category: "Foundation",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Visibility & Feedback",
      description: "Ensure system status is always visible to users. Provide clear feedback for every user action and system state.",
      category: "Communication",
      color: "text-research"
    },
    {
      icon: Zap,
      title: "Efficiency & Performance",
      description: "Optimize for speed and efficiency. Minimize cognitive load and provide shortcuts for experienced users.",
      category: "Performance",
      color: "text-innovation"
    },
    {
      icon: Shield,
      title: "Error Prevention",
      description: "Design systems that prevent errors before they occur. When errors happen, provide helpful recovery paths.",
      category: "Safety",
      color: "text-interaction"
    },
    {
      icon: Accessibility,
      title: "Universal Access",
      description: "Create inclusive designs that work for users of all abilities. Follow accessibility standards and guidelines.",
      category: "Inclusion",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Goal Alignment",
      description: "Align interface design with user goals and business objectives. Every element should serve a purpose.",
      category: "Strategy",
      color: "text-research"
    },
    {
      icon: Brain,
      title: "Cognitive Load Management",
      description: "Reduce mental effort required to use the system. Organize information hierarchically and intuitively.",
      category: "Psychology",
      color: "text-innovation"
    },
    {
      icon: Settings,
      title: "Consistency & Standards",
      description: "Maintain consistency in design patterns, interactions, and visual elements across the entire system.",
      category: "Standards",
      color: "text-interaction"
    }
  ];

  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-accent">
            HCI Principles
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Core Principles of Human-Computer Interaction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential guidelines that form the foundation of effective user interface design 
            and optimal user experience in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-muted/50 ${principle.color}`}>
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {principle.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card rounded-lg p-6 shadow-soft">
            <div className="text-3xl font-bold text-primary">8</div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Core Principles</div>
              <div className="text-sm text-muted-foreground">Research-backed guidelines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};