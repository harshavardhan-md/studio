import { startups } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

export default function StartupsPage() {
  const industries = [...new Set(startups.map(s => s.industry))];
  const stages = ['Idea', 'MVP', 'Seed', 'Growth'];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Discover Startups</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through a curated list of high-potential startups from university ecosystems.
          </p>
        </div>

        <Card className="mb-8 p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            <Input placeholder="Search by name or keyword..." className="lg:col-span-2" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map(stage => (
                  <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <Image data-ai-hint="logo" src={startup.logoUrl} alt={`${startup.name} logo`} width={64} height={64} className="rounded-lg" />
                  <div>
                    <h2 className="font-headline text-xl font-bold">{startup.name}</h2>
                    <p className="text-sm text-muted-foreground">{startup.tagline}</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-foreground/80 line-clamp-3">
                    {startup.description}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">{startup.industry}</Badge>
                  <Badge variant="outline">{startup.stage}</Badge>
                </div>
                <Button asChild className="mt-6 w-full font-semibold">
                  <Link href={`/startups/${startup.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
