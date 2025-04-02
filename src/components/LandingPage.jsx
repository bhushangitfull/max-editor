"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, Zap, Github, Twitter, Layers, Settings, Share2, Sparkles, ChevronRight } from "lucide-react"

export default function  LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">CodeCraft</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-foreground/80">
                Features
              </a>
              <a href="#pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </a>
              <a href="#testimonials" className="transition-colors hover:text-foreground/80">
                Testimonials
              </a>
              <a href="https://docs.example.com" className="transition-colors hover:text-foreground/80">
                Documentation
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="inline-flex items-center whitespace-nowrap md:hidden">
                <Code className="mr-2 h-4 w-4" />
                Menu
              </Button>
            </div>
            <nav className="flex items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <Button variant="default" className="ml-4">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-10 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Badge className="rounded-lg px-3 py-1" variant="secondary">
              Now in public beta
            </Badge>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              A modern code editor for the next generation
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Craft beautiful code with our intuitive, powerful editor. Built for developers who care about the details.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              The editor you've been waiting for
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              CodeCraft combines the power of modern web technologies with a beautiful, intuitive interface.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Terminal className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">Integrated Terminal</h3>
                  <p className="text-sm text-muted-foreground">Run commands without leaving your editor.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Zap className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">Optimized for speed and performance.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Layers className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">Extensions</h3>
                  <p className="text-sm text-muted-foreground">Customize with powerful extensions.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Settings className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">Highly Configurable</h3>
                  <p className="text-sm text-muted-foreground">Tailor the editor to your workflow.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Share2 className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Work together in real-time.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Sparkles className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">AI Assistance</h3>
                  <p className="text-sm text-muted-foreground">Smart suggestions and code completion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
              <p className="text-muted-foreground sm:text-lg">Everything you need to write code efficiently.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Intelligent Code Completion</h3>
                </div>
                <p className="text-muted-foreground">
                  AI-powered suggestions that understand your code context and help you write better code faster.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Integrated Development Environment</h3>
                </div>
                <p className="text-muted-foreground">
                  Everything you need in one place: terminal, debugger, version control, and extensions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Share2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Real-time Collaboration</h3>
                </div>
                <p className="text-muted-foreground">
                  Work with your team in real-time, see changes as they happen, and communicate within the editor.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold">Multi-language Support</h3>
                </div>
                <p className="text-muted-foreground">
                  First-class support for all major programming languages with syntax highlighting and language-specific
                  features.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem]">
            <div className="space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">See it in action</h2>
              <p className="text-muted-foreground sm:text-lg">Experience the power and simplicity of CodeCraft.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg border bg-background shadow-xl">
              <Tabs defaultValue="javascript" className="w-full">
                <div className="border-b bg-muted/50 px-4">
                  <TabsList className="h-10">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="javascript" className="border-none p-0">
                  <pre className="rounded-md bg-muted p-4 text-sm">
                    <code>{`// A simple React component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="typescript" className="border-none p-0">
                  <pre className="rounded-md bg-muted p-4 text-sm">
                    <code>{`// A simple React component with TypeScript
import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="python" className="border-none p-0">
                  <pre className="rounded-md bg-muted p-4 text-sm">
                    <code>{`# A simple Python class
class Counter:
    def __init__(self, initial_count=0):
        self.count = initial_count
    
    def increment(self):
        self.count += 1
        return self.count
    
    def decrement(self):
        self.count -= 1
        return self.count
    
    def reset(self):
        self.count = 0
        return self.count

# Create a counter instance
counter = Counter()
print(counter.increment())  # Output: 1`}</code>
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section id="pricing" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Pricing</h2>
              <p className="text-muted-foreground sm:text-lg">Simple, transparent pricing for everyone.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="font-bold">Free</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic code editing
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Syntax highlighting
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    3 projects
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Get Started
                </Button>
              </div>
              <div className="relative flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Pro</h3>
                  <p className="text-muted-foreground">For individual developers</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AI code completion
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced extensions
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="font-bold">Team</h3>
                  <p className="text-muted-foreground">For teams and organizations</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Real-time collaboration
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Team management
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Loved by developers</h2>
              <p className="text-muted-foreground sm:text-lg">
                Don't just take our word for it. Here's what others are saying.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "CodeCraft has completely transformed my workflow. The AI suggestions are incredibly accurate and have
                  saved me countless hours."
                </p>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The collaboration features are game-changing. My team can work together seamlessly, and the real-time
                  editing is flawless."
                </p>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I've tried many code editors, but CodeCraft stands out with its performance and thoughtful features.
                  It's now my go-to editor."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Ready to transform your coding experience?</h3>
                <p className="text-muted-foreground">Join thousands of developers who've already made the switch.</p>
              </div>
              <Button size="lg">Get Started for Free</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} CodeCraft. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

