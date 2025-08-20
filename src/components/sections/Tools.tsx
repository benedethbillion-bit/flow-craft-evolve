import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  MousePointer, 
  BarChart3, 
  Eye, 
  Layers,
  Code,
  Smartphone,
  Monitor,
  Download,
  Star
} from "lucide-react";

export const Tools = () => {
  const toolCategories = [
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "Tools for creating user interfaces and interactive prototypes",
      color: "text-innovation",
      tools: [
        { name: "Figma", type: "Design", rating: 4.9, users: "10M+" },
        { name: "Sketch", type: "Design", rating: 4.7, users: "5M+" },
        { name: "Adobe XD", type: "Prototyping", rating: 4.6, users: "8M+" },
        { name: "InVision", type: "Collaboration", rating: 4.5, users: "3M+" }
      ]
    },
    {
      icon: BarChart3,
      title: "User Analytics",
      description: "Data collection and analysis tools for user behavior insights",
      color: "text-research",
      tools: [
        { name: "Google Analytics", type: "Web Analytics", rating: 4.8, users: "30M+" },
        { name: "Hotjar", type: "Heatmaps", rating: 4.7, users: "1M+" },
        { name: "Mixpanel", type: "Event Tracking", rating: 4.6, users: "2M+" },
        { name: "FullStory", type: "Session Recording", rating: 4.5, users: "500K+" }
      ]
    },
    {
      icon: Eye,
      title: "Usability Testing",
      description: "Platforms for conducting user research and testing sessions",
      color: "text-interaction",
      tools: [
        { name: "UserTesting", type: "Remote Testing", rating: 4.8, users: "1M+" },
        { name: "Maze", type: "Prototype Testing", rating: 4.7, users: "200K+" },
        { name: "Lookback", type: "Live Testing", rating: 4.6, users: "150K+" },
        { name: "UsabilityHub", type: "Quick Tests", rating: 4.5, users: "300K+" }
      ]
    },
    {
      icon: Code,
      title: "Development",
      description: "Frameworks and libraries for implementing HCI principles",
      color: "text-primary",
      tools: [
        { name: "React", type: "Framework", rating: 4.9, users: "15M+" },
        { name: "Vue.js", type: "Framework", rating: 4.8, users: "8M+" },
        { name: "Material-UI", type: "Component Library", rating: 4.7, users: "5M+" },
        { name: "Tailwind CSS", type: "Styling", rating: 4.8, users: "3M+" }
      ]
    }
  ];

  const featuredTools = [
    {
      name: "HCI Analyzer",
      description: "Comprehensive tool for evaluating interface usability based on established HCI principles",
      category: "Analysis",
      price: "Free",
      features: ["Accessibility Check", "Cognitive Load Analysis", "Navigation Assessment"],
      icon: Monitor
    },
    {
      name: "User Journey Mapper",
      description: "Visual tool for mapping and optimizing user experience flows",
      category: "Planning",
      price: "$29/month",
      features: ["Journey Visualization", "Pain Point Identification", "Conversion Optimization"],
      icon: Smartphone
    },
    {
      name: "Interaction Patterns Library",
      description: "Curated collection of proven UI patterns with implementation guides",
      category: "Resources",
      price: "Free",
      features: ["Pattern Catalog", "Code Examples", "Best Practices"],
      icon: Layers
    }
  ];

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-innovation">
            HCI Tools
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Essential Tools for HCI Implementation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the tools and frameworks that enable effective human-computer 
            interaction design and implementation in modern software development.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{tool.name}</span>
                          <Badge variant="outline" className="text-xs">{tool.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{tool.rating}</span>
                          </div>
                          <span>{tool.users} users</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tools */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center">Featured HCI Tools</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-gradient-accent/10 text-accent">
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <Badge variant={tool.price === "Free" ? "secondary" : "outline"}>
                      {tool.price}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {tool.name}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-foreground">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Access Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};