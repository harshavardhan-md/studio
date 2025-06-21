"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { analyzePitchDeck, AnalyzePitchDeckOutput } from "@/ai/flows/pitch-analysis";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileUp, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function PitchAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AnalyzePitchDeckOutput | null>(null);
  const [pitchDeckDataUri, setPitchDeckDataUri] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const { toast } = useToast();

  const form = useForm();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit for Gemini
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 4MB.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUri = loadEvent.target?.result as string;
        setPitchDeckDataUri(dataUri);
        setFileName(file.name);
      };
      reader.onerror = () => {
        toast({
          title: "Error",
          description: "Failed to read the file.",
          variant: "destructive",
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = async () => {
    if (!pitchDeckDataUri) {
      toast({
        title: "No file selected",
        description: "Please upload your pitch deck first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePitchDeck({ pitchDeckDataUri });
      setAnalysis(result);
    } catch (error) {
      console.error("Error analyzing pitch deck:", error);
      toast({
        title: "Error",
        description: "Failed to analyze pitch deck. Please try again.",
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
              name="pitchDeck"
              render={() => (
                <FormItem>
                  <FormLabel>Upload Pitch Deck</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="file" onChange={handleFileChange} accept=".pdf,.ppt,.pptx" className="pr-40" />
                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground text-sm">
                        {fileName ? <span className="truncate max-w-[100px]">{fileName}</span> : 'PDF, PPT, PPTX'}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading || !pitchDeckDataUri}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Pitch"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      {analysis && (
        <div className="p-6 border-t">
          <h3 className="font-headline text-2xl mb-6">Your Pitch Analysis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p>Clarity Score</p>
                    <p className="font-bold text-primary">{analysis.clarityScore}/100</p>
                  </div>
                  <Progress value={analysis.clarityScore} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p>Overall Effectiveness</p>
                    <p className="font-bold text-primary">{analysis.overallEffectivenessScore}/100</p>
                  </div>
                  <Progress value={analysis.overallEffectivenessScore} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Content Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{analysis.contentFeedback}</p>
              </CardContent>
            </Card>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Improvement Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysis.improvementSuggestions.map((suggestion, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
