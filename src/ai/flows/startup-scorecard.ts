// src/ai/flows/startup-scorecard.ts
'use server';
/**
 * @fileOverview Provides an AI-generated scorecard for startups, highlighting strengths,
 * weaknesses, and areas for improvement.
 *
 * - generateStartupScorecard - A function that generates the startup scorecard.
 * - StartupScorecardInput - The input type for the generateStartupScorecard function.
 * - StartupScorecardOutput - The return type for the generateStartupScorecard function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StartupScorecardInputSchema = z.object({
  startupDescription: z
    .string()
    .describe('A detailed description of the startup, its mission, and its activities.'),
  tractionMetrics: z
    .string()
    .describe('Key traction metrics for the startup, such as user growth, revenue, etc.'),
  teamComposition: z
    .string()
    .describe('Information about the startup team, their experience, and their roles.'),
  marketOpportunity: z
    .string()
    .describe('Description of the market opportunity the startup is addressing.'),
  fundingRequirements: z
    .string()
    .describe('Details about the startup funding requirements and current stage.'),
});
export type StartupScorecardInput = z.infer<typeof StartupScorecardInputSchema>;

const StartupScorecardOutputSchema = z.object({
  strengths: z
    .string()
    .describe('Key strengths of the startup based on the provided information.'),
  weaknesses: z
    .string()
    .describe('Potential weaknesses or areas of concern for the startup.'),
  areasForImprovement: z
    .string()
    .describe('Specific areas where the startup can improve its performance or strategy.'),
  overallAssessment: z
    .string()
    .describe('An overall assessment of the startup potential and investment worthiness.'),
});
export type StartupScorecardOutput = z.infer<typeof StartupScorecardOutputSchema>;

export async function generateStartupScorecard(input: StartupScorecardInput): Promise<StartupScorecardOutput> {
  return startupScorecardFlow(input);
}

const startupScorecardPrompt = ai.definePrompt({
  name: 'startupScorecardPrompt',
  input: {schema: StartupScorecardInputSchema},
  output: {schema: StartupScorecardOutputSchema},
  prompt: `You are an expert venture capitalist evaluating startups for investment.

  Based on the information provided, generate a scorecard highlighting the startup's key strengths, weaknesses, and areas for improvement.

  Startup Description: {{{startupDescription}}}
  Traction Metrics: {{{tractionMetrics}}}
  Team Composition: {{{teamComposition}}}
  Market Opportunity: {{{marketOpportunity}}}
  Funding Requirements: {{{fundingRequirements}}}

  Provide a concise and insightful assessment of the startup's potential and investment worthiness.
  Focus on providing actionable feedback that can help the startup improve its chances of success.
  The strengths, weaknesses, areasForImprovement, and overallAssessment should be detailed and based on the information provided.
  Do not make up any information not provided in the input.
  If a particular field (e.g. teamComposition) is weak, make sure to note that in the assessment.
  If there are no weaknesses or areas for improvement according to the provided information, indicate that explicitly.
  `,
});

const startupScorecardFlow = ai.defineFlow(
  {
    name: 'startupScorecardFlow',
    inputSchema: StartupScorecardInputSchema,
    outputSchema: StartupScorecardOutputSchema,
  },
  async input => {
    const {output} = await startupScorecardPrompt(input);
    return output!;
  }
);
