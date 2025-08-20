import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  Brain, 
  Activity, 
  ExternalLink,
  Calendar,
  TrendingUp
} from "lucide-react";

export const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Cognitive Psychology in HCI",
      description: "Understanding how users process information, make decisions, and form mental models of digital systems.",
      metrics: "150+ studies analyzed",
      trend: "+23% this year",
      status: "Active"
    },
    {
      icon: Activity,
      title: "Usability Testing Methods",
      description: "Developing and refining methodologies for measuring user experience effectiveness and efficiency.",
      metrics: "50+ methodologies",
      trend: "+15% adoption",
      status: "Ongoing"
    },
    {
      icon: Users,
      title: "User Behavior Analytics",
      description: "Analyzing patterns in user interactions to identify pain points and optimization opportunities.",
      metrics: "1M+ user sessions",
      trend: "+40% insights",
      status: "Expanding"
    },
    {
      icon: BarChart3,
      title: "Interface Design Patterns",
      description: "Documenting and evaluating the effectiveness of common UI patterns across different contexts.",
      metrics: "200+ patterns",
      trend: "+18% validation",
      status: "Cataloging"
    }
  ];

  const publications = [
    {
      title: "Enhancing Mobile Interface Accessibility Through Voice Integration",
      journal: "ACM Transactions on Computer-Human Interaction",
      date: "March 2024",
      citations: 47,
      type: "Research Paper"
    },
    {
      title: "Cognitive Load Assessment in Complex Software Interfaces",
      journal: "International Journal of Human-Computer Studies",
      date: "January 2024",
      citations: 32,
      type: "Study"
    },
    {
      title: "Design Patterns for Enhanced User Onboarding Experiences",
      journal: "CHI Conference Proceedings",
      date: "December 2023",
      citations: 68,
      type: "Conference Paper"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-research">
            Research Areas
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Current Research Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of human-computer interaction through 
            rigorous research and evidence-based design methodologies.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-research/10 text-research">
                      <area.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-research transition-colors">
                        {area.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {area.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">{area.metrics}</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{area.trend}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Recent Publications</h3>
            <Button variant="outline" className="border-research text-research hover:bg-research hover:text-research-foreground">
              View All Publications
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {pub.type}
                        </Badge>
                        <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{pub.date}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground hover:text-research transition-colors cursor-pointer">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{pub.journal}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm font-medium text-foreground">{pub.citations} citations</div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};