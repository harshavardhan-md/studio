import { resources } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, FileText, Newspaper, StickyNote } from "lucide-react";

export default function ResourcesPage() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Guide': return <FileText className="w-6 h-6 text-primary" />;
      case 'Template': return <StickyNote className="w-6 h-6 text-primary" />;
      case 'Article': return <Newspaper className="w-6 h-6 text-primary" />;
      default: return null;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Resource Hub</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your startup knowledge base. Access guides, templates, and articles to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                {getIcon(resource.category)}
                            </div>
                            <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
                        </div>
                        <Badge variant="outline">{resource.category}</Badge>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground flex-grow">{resource.description}</p>
                    <Link href={resource.href} className="flex items-center gap-2 font-semibold text-primary mt-4 group-hover:gap-3 transition-all duration-300">
                        Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
