import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StartupScorecard } from "@/components/dashboard/startup-scorecard";
import { PitchAnalysis } from "@/components/dashboard/pitch-analysis";
import { BarChart, BrainCircuit } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">AI Insights Dashboard</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Leverage AI to refine your startup strategy and perfect your pitch.
            </p>
        </div>
        <Tabs defaultValue="scorecard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-auto">
            <TabsTrigger value="scorecard" className="py-3 flex items-center gap-2 text-base">
                <BarChart className="h-5 w-5" />
                Startup Scorecard
            </TabsTrigger>
            <TabsTrigger value="pitch" className="py-3 flex items-center gap-2 text-base">
                <BrainCircuit className="h-5 w-5" />
                Pitch Analysis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="scorecard" className="mt-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Generate Your Startup Scorecard</CardTitle>
                <CardDescription>Get an AI-powered evaluation of your startup's potential based on key metrics. Fill out the form below to receive your detailed analysis.</CardDescription>
              </CardHeader>
              <StartupScorecard />
            </Card>
          </TabsContent>
          <TabsContent value="pitch" className="mt-6">
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Analyze Your Pitch Deck</CardTitle>
                <CardDescription>Upload your pitch deck to get an instant AI analysis of its clarity, content, and effectiveness, along with suggestions for improvement.</CardDescription>
              </CardHeader>
              <PitchAnalysis />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
