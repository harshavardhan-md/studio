'use server';

/**
 * @fileOverview A startup idea generator AI agent.
 *
 * - generateStartupIdea - A function that handles the startup idea generation process.
 * - GenerateStartupIdeaInput - The input type for the generateStartupIdea function.
 * - GenerateStartupIdeaOutput - The return type for the generateStartupIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStartupIdeaInputSchema = z.object({
  interests: z
    .string()
    .describe('A brief description of the user\'s interests.'),
  problems: z.string().describe('The problems the user sees in the world.'),
});
export type GenerateStartupIdeaInput = z.infer<typeof GenerateStartupIdeaInputSchema>;

const GenerateStartupIdeaOutputSchema = z.object({
  startupIdea: z.string().describe('A startup idea based on the user\'s interests and the problems they see.'),
});
export type GenerateStartupIdeaOutput = z.infer<typeof GenerateStartupIdeaOutputSchema>;

export async function generateStartupIdea(input: GenerateStartupIdeaInput): Promise<GenerateStartupIdeaOutput> {
  return generateStartupIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStartupIdeaPrompt',
  input: {schema: GenerateStartupIdeaInputSchema},
  output: {schema: GenerateStartupIdeaOutputSchema},
  prompt: `You are a startup idea generator. You will use the user's interests and the problems they see in the world to generate a startup idea.

Interests: {{{interests}}}
Problems: {{{problems}}}

Startup Idea: `,
});

const generateStartupIdeaFlow = ai.defineFlow(
  {
    name: 'generateStartupIdeaFlow',
    inputSchema: GenerateStartupIdeaInputSchema,
    outputSchema: GenerateStartupIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
