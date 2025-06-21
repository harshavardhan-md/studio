import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, BrainCircuit, Lightbulb, Rocket, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: 'AI Matchmaking',
      description: 'Smart investor-startup matching based on domain, stage, and funding needs.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: 'Pitch Analysis Engine',
      description: 'Instant pitch evaluation with actionable feedback to improve your deck.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: 'Success Prediction',
      description: 'Evaluate your startup on 15+ metrics including traction and market opportunity.',
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: 'Personalized Insights',
      description: 'AI-driven recommendations to accelerate your startup\'s growth.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Where Student Ambition <br /> Meets Angel Investment
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              CampusConnect AI is the ultimate ecosystem for student-led startups. Get AI-powered insights, find the perfect co-founder, and connect with investors who believe in your vision.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/startups">Explore Startups <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold">
                <Link href="/dashboard">Analyze Your Pitch</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Your AI Co-Pilot for Startup Success
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Leverage our cutting-edge AI tools to build, pitch, and grow your venture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline text-xl mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold">FOR STARTUPS</span>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                  Launch and Scale Your Vision
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  From validating your idea to securing your first check, CampusConnect AI provides the tools and network you need. Find co-founders, access resources, and get discovered by top-tier investors.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-lg">Find your perfect co-founder.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-primary" />
                    <span className="text-lg">Get actionable insights to grow faster.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <span className="text-lg">Connect with a curated network of investors.</span>
                  </li>
                </ul>
                <Button asChild size="lg" className="mt-8 font-bold">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
              <div className="relative h-96">
                <Image src="https://placehold.co/600x400.png" alt="Startup collaboration" layout="fill" objectFit="cover" className="rounded-xl shadow-2xl" data-ai-hint="team collaboration" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 order-last lg:order-first">
                <Image src="https://placehold.co/600x400.png" alt="Investor network" layout="fill" objectFit="cover" className="rounded-xl shadow-2xl" data-ai-hint="financial growth" />
              </div>
              <div className="order-first lg:order-last">
                <span className="text-secondary font-semibold">FOR INVESTORS</span>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                  Discover the Next Big Thing
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Gain exclusive access to a pipeline of high-potential, AI-vetted startups from top universities. Our platform streamlines your deal flow and helps you identify future market leaders.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-secondary" />
                    <span className="text-lg">AI-powered matchmaking to fit your thesis.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-secondary" />
                    <span className="text-lg">In-depth startup profiles and scorecards.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <span className="text-lg">Directly connect with ambitious founders.</span>
                  </li>
                </ul>
                <Button asChild size="lg" variant="secondary" className="mt-8 font-bold">
                  <Link href="/investors">Join as Investor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Build the Future?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
              Join a vibrant community of innovators, builders, and investors. Your journey starts here.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 font-bold">
              <Link href="/dashboard">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
