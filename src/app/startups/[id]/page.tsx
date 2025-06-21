import { startups, Startup } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, DollarSign, LineChart, Users } from "lucide-react";
import Link from "next/link";

export default function StartupDetailPage({ params }: { params: { id: string } }) {
  const startup = startups.find(s => s.id === params.id);

  if (!startup) {
    notFound();
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-12">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/startups"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Startups</Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <Image data-ai-hint="logo" src={startup.logoUrl} alt={`${startup.name} logo`} width={100} height={100} className="rounded-xl border" />
                  <div>
                    <h1 className="font-headline text-4xl font-bold">{startup.name}</h1>
                    <p className="text-xl text-muted-foreground mt-1">{startup.tagline}</p>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="secondary" className="text-sm">{startup.industry}</Badge>
                      <Badge variant="outline" className="text-sm">{startup.stage}</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="font-headline">About {startup.name}</h2>
                  <p>{startup.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><LineChart className="text-primary" /> Traction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{startup.traction}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Users className="text-primary" /> Team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {startup.team.map(member => (
                    <li key={member.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><DollarSign className="text-primary" /> Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  ${startup.fundingSought.toLocaleString()}
                </p>
                <p className="text-muted-foreground">sought in {startup.stage} round.</p>
              </CardContent>
            </Card>

             <Card className="shadow-lg bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">Interested?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full font-bold">Connect with {startup.name}</Button>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
