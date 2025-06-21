// src/ai/flows/pitch-analysis.ts
'use server';
/**
 * @fileOverview A pitch deck analysis AI agent.
 *
 * - analyzePitchDeck - A function that handles the pitch deck analysis process.
 * - AnalyzePitchDeckInput - The input type for the analyzePitchDeck function.
 * - AnalyzePitchDeckOutput - The return type for the analyzePitchDeck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePitchDeckInputSchema = z.object({
  pitchDeckDataUri: z
    .string()
    .describe(
      "A pitch deck, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzePitchDeckInput = z.infer<typeof AnalyzePitchDeckInputSchema>;

const AnalyzePitchDeckOutputSchema = z.object({
  clarityScore: z
    .number()
    .describe('A score indicating the clarity of the pitch deck (0-100).'),
  contentFeedback: z
    .string()
    .describe('Feedback on the content of the pitch deck.'),
  overallEffectivenessScore: z
    .number()
    .describe('A score indicating the overall effectiveness of the pitch deck (0-100).'),
  improvementSuggestions: z
    .array(z.string())
    .describe('Specific suggestions for improving the pitch deck.'),
});
export type AnalyzePitchDeckOutput = z.infer<typeof AnalyzePitchDeckOutputSchema>;

export async function analyzePitchDeck(input: AnalyzePitchDeckInput): Promise<AnalyzePitchDeckOutput> {
  return analyzePitchDeckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePitchDeckPrompt',
  input: {schema: AnalyzePitchDeckInputSchema},
  output: {schema: AnalyzePitchDeckOutputSchema},
  prompt: `You are an expert venture capitalist specializing in evaluating startup pitch decks.

You will use the pitch deck to assess its clarity, content, and overall effectiveness.

Based on your analysis, you will provide a clarity score, content feedback, an overall effectiveness score, and specific suggestions for improvement.

Pitch Deck: {{media url=pitchDeckDataUri}}`,
});

const analyzePitchDeckFlow = ai.defineFlow(
  {
    name: 'analyzePitchDeckFlow',
    inputSchema: AnalyzePitchDeckInputSchema,
    outputSchema: AnalyzePitchDeckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
