import { cofounders } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CofoundersPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Find a Co-founder</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with talented and ambitious individuals to build your dream team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cofounders.map((profile) => (
            <Card key={profile.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <Image
                    data-ai-hint="person photo"
                    src={profile.imageUrl}
                    alt={profile.name}
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-secondary/20"
                  />
                  <h2 className="font-headline text-xl font-bold mt-4">{profile.name}</h2>
                </div>
                
                <div className="mt-4 flex-grow">
                  <p className="font-semibold mb-2 text-sm">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>

                  <p className="font-semibold mt-4 mb-2 text-sm">Looking for:</p>
                  <p className="text-sm text-muted-foreground italic">"{profile.lookingFor}"</p>
                  
                  <p className="font-semibold mt-4 mb-2 text-sm">Bio:</p>
                  <p className="text-sm text-foreground/80">{profile.bio}</p>
                </div>

                <Button variant="secondary" className="mt-6 w-full font-semibold">Connect with {profile.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
