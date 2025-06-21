import { investors } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function InvestorsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Meet the Investors</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced angel investors and VCs ready to fund the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {investors.map((investor) => (
            <Card key={investor.id} className="text-center overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Image
                  data-ai-hint="person photo"
                  src={investor.imageUrl}
                  alt={investor.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-primary/20"
                />
                <h2 className="font-headline text-xl font-bold mt-4">{investor.name}</h2>
                <p className="text-sm text-primary font-medium">{investor.title}</p>
                <p className="text-sm text-muted-foreground">{investor.firm}</p>
                
                <div className="mt-4 flex-grow">
                    <p className="text-sm font-semibold mb-2">Investment Focus:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                    {investor.focus.map(area => (
                        <Badge key={area} variant="secondary">{area}</Badge>
                    ))}
                    </div>
                </div>

                <Button className="mt-6 w-full font-semibold">Connect</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
