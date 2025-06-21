"use client";

import { useState, useMemo } from "react";
import { startups } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  const industries = useMemo(() => [...new Set(startups.map(s => s.industry))], []);
  const stages = useMemo(() => ['Idea', 'MVP', 'Seed', 'Growth'], []);

  const filteredStartups = useMemo(() => {
    return startups.filter(startup => {
      const matchesSearch = searchTerm.toLowerCase() === '' ||
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.tagline.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry = selectedIndustry === '' || startup.industry === selectedIndustry;
      const matchesStage = selectedStage === '' || startup.stage === selectedStage;

      return matchesSearch && matchesIndustry && matchesStage;
    });
  }, [searchTerm, selectedIndustry, selectedStage]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedIndustry("");
    setSelectedStage("");
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            <Input 
              placeholder="Search by name or keyword..." 
              className="lg:col-span-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Stages</SelectItem>
                {stages.map(stage => (
                  <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="ghost" onClick={clearFilters}>
              <X className="mr-2 h-4 w-4" /> Clear
            </Button>
          </div>
        </Card>

        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
              <Card key={startup.id} className="overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
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
        ) : (
          <div className="text-center py-16">
            <h3 className="font-headline text-2xl font-bold">No Startups Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
}
