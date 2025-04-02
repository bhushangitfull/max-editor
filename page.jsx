import Link from "next/link"
import { ArrowRight, Code, Command, Github, Layers, Sparkles, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">CodeCraft</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Features
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Pricing
              </Link>
              <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Testimonials
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Documentation
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link href="#" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Now in public beta
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Code faster with <span className="text-gradient_indigo-purple font-extrabold">CodeCraft</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A modern code editor with AI-powered features, real-time collaboration, and seamless Git integration.
              Built for developers who want to focus on what matters.
            </p>
            <div className="space-x-4">
              <Button className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Live Demo</Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <Tabs defaultValue="preview" className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="preview" className="border rounded-lg p-6 bg-black text-white">
              <pre className="font-mono text-sm">
                <code>{`function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// Generate first 10 Fibonacci numbers
const fibSequence = Array.from({ length: 10 }, (_, i) => calculateFibonacci(i));
console.log(fibSequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="javascript" className="border rounded-lg p-6 bg-black text-white">
              <pre className="font-mono text-sm">
                <code>{`// Modern JavaScript with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

// Usage with promise chaining
fetchUserData(123)
  .then(user => console.log(user))
  .catch(err => console.error(err));`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="typescript" className="border rounded-lg p-6 bg-black text-white">
              <pre className="font-mono text-sm">
                <code>{`interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

async function fetchUserData(userId: number): Promise<User | null> {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    const data = await response.json();
    return data as User;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>
        <section id="features" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to code efficiently in one beautiful interface.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>AI-Powered Assistance</CardTitle>
                <CardDescription>
                  Get intelligent code suggestions, auto-completions, and bug detection powered by advanced AI models.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Layers className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Multi-language Support</CardTitle>
                <CardDescription>
                  First-class support for JavaScript, TypeScript, Python, Rust, Go, and over 100 other languages.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Command className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Command Palette</CardTitle>
                <CardDescription>
                  Access any feature with a few keystrokes using our powerful command palette.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Github className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Git Integration</CardTitle>
                <CardDescription>
                  Seamless Git workflow with visual diff, conflict resolution, and branch management.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for performance with instant startup and zero lag, even with large projects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-2 text-primary"
                >
                  <path d="M18 16.8a7.14 7.14 0 0 0 2.24-3.32 7.23 7.23 0 0 0 .42-2.43 7.22 7.22 0 0 0-2.36-5.34 7.09 7.09 0 0 0-10.06 0 7.23 7.23 0 0 0-2.36 5.34 7.23 7.23 0 0 0 .42 2.43 7.14 7.14 0 0 0 2.24 3.32" />
                  <path d="M13 17.8a7.14 7.14 0 0 1-2.24-3.32c-.21-.77-.35-1.58-.42-2.43a7.22 7.22 0 0 1 2.36-5.34 7.09 7.09 0 0 1 10.06 0 7.23 7.23 0 0 1 2.36 5.34 7.23 7.23 0 0 1-.42 2.43 7.14 7.14 0 0 1-2.24 3.32" />
                </svg>
                <CardTitle>Real-time Collaboration</CardTitle>
                <CardDescription>
                  Code together with your team in real-time with cursor tracking and live editing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        
        <section id="testimonials" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Loved by developers</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here's what our users have to say about CodeCraft
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-semibold text-primary">JS</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Jane Smith</CardTitle>
                    <CardDescription>Senior Developer at TechCorp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "CodeCraft has completely transformed my workflow. The AI suggestions are spot-on, and the Git
                  integration is seamless. I can't imagine coding without it now."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-semibold text-primary">MJ</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Michael Johnson</CardTitle>
                    <CardDescription>Freelance Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "As a freelancer, I need tools that help me work efficiently. CodeCraft's performance and features
                  have boosted my productivity by at least 30%. Worth every penny."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-semibold text-primary">AL</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Alex Lee</CardTitle>
                    <CardDescription>CTO at StartupX</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "We've rolled out CodeCraft to our entire engineering team, and the collaboration features have been a
                  game-changer for our remote-first company. The ROI has been incredible."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24 bg-muted rounded-lg my-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to code better?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of developers who've already made the switch.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row mt-6">
              <Button size="lg" className="px-8">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container mt-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-semibold">CodeCraft</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeCraft, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

