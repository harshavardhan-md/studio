"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateStartupScorecard, StartupScorecardOutput } from "@/ai/flows/startup-scorecard";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lightbulb, ThumbsDown, ThumbsUp, ArrowRight } from "lucide-react";

const formSchema = z.object({
  startupDescription: z.string().min(50, "Please provide a detailed description."),
  tractionMetrics: z.string().min(10, "Please describe your traction."),
  teamComposition: z.string().min(10, "Please describe your team."),
  marketOpportunity: z.string().min(20, "Please describe the market opportunity."),
  fundingRequirements: z.string().min(5, "Please state your funding requirements."),
});

type FormValues = z.infer<typeof formSchema>;

export function StartupScorecard() {
  const [isLoading, setIsLoading] = useState(false);
  const [scorecard, setScorecard] = useState<StartupScorecardOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startupDescription: "",
      tractionMetrics: "",
      teamComposition: "",
      marketOpportunity: "",
      fundingRequirements: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setScorecard(null);
    try {
      const result = await generateStartupScorecard(data);
      setScorecard(result);
    } catch (error) {
      console.error("Error generating scorecard:", error);
      toast({
        title: "Error",
        description: "Failed to generate scorecard. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="startupDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your startup, its mission, and activities in detail." {...field} rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="tractionMetrics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Traction Metrics</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., user growth, revenue, partnerships" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teamComposition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Composition</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., founders' experience, key roles" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketOpportunity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Opportunity</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., market size, target audience" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fundingRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Requirements</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., $500k for Seed round" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Scorecard"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      {scorecard && (
        <div className="p-6 border-t">
          <h3 className="font-headline text-2xl mb-6">Your Scorecard Results</h3>
          <div className="space-y-6">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-300 font-headline"><ThumbsUp /> Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-400">{scorecard.strengths}</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-300 font-headline"><ThumbsDown /> Weaknesses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 dark:text-red-400">{scorecard.weaknesses}</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-300 font-headline"><Lightbulb /> Areas for Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 dark:text-yellow-400">{scorecard.areasForImprovement}</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-headline"><ArrowRight /> Overall Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-400">{scorecard.overallAssessment}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
