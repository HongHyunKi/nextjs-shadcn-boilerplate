import { Button } from '@/components/ui/button';
import {
  Code2,
  Palette,
  Zap,
  Shield,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// Links Configuration
const LINKS = {
  getStarted: 'https://github.com/HongHyunKi/nextjs-shadcn-boilerplate',
  github: 'https://github.com/HongHyunKi/nextjs-shadcn-boilerplate',
  documentation: 'https://ui.shadcn.com/docs/components',
} as const;

export default function MainPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24 lg:min-h-[600px]">
        {/* Gradient Background */}
        <div className="from-primary/20 via-background to-background absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Content */}
        <div className="container flex flex-col items-center gap-8 text-center">
          <div className="bg-muted/50 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
            <Sparkles className="text-primary h-4 w-4" />
            <span className="font-medium">Next.js 15 + Tailwind CSS v4</span>
          </div>

          <h1 className="from-foreground to-foreground/70 max-w-4xl bg-gradient-to-br bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Build Modern Web Apps
            <br />
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text">
              Faster Than Ever
            </span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl">
            A production-ready boilerplate with Next.js 15, Tailwind CSS v4,
            shadcn/ui, and TypeScript. Start building beautiful, responsive web
            applications today.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link href={LINKS.getStarted}>
                Get Started
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Built with modern tools and best practices to help you ship faster
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Built on Next.js 15 with React Server Components for optimal
                performance and SEO.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Palette className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Beautiful UI</h3>
              <p className="text-muted-foreground text-sm">
                Pre-configured with shadcn/ui and Tailwind CSS v4 for stunning,
                accessible components.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Code2 className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Type Safe</h3>
              <p className="text-muted-foreground text-sm">
                Full TypeScript support with strict mode enabled for
                bullet-proof code.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Smartphone className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fully Responsive</h3>
              <p className="text-muted-foreground text-sm">
                Mobile-first design that looks great on any device, from phones
                to desktops.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Best Practices</h3>
              <p className="text-muted-foreground text-sm">
                ESLint, Prettier, and strict TypeScript configurations included
                out of the box.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-card relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg">
              <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Sparkles className="text-primary h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Dark Mode</h3>
              <p className="text-muted-foreground text-sm">
                Built-in dark mode support with next-themes and seamless theme
                switching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-muted/30 w-full border-y py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Powered by Modern Tech
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Industry-leading tools and frameworks
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { name: 'Next.js 15', desc: 'React Framework' },
              { name: 'React 19', desc: 'UI Library' },
              { name: 'Tailwind v4', desc: 'CSS Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'shadcn/ui', desc: 'Components' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="bg-background text-primary flex h-16 w-16 items-center justify-center rounded-xl border-2 font-bold">
                  {tech.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{tech.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="from-primary/10 via-primary/5 to-background relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 md:p-12">
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Start Building?
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Clone this boilerplate and start creating your next amazing
                project in minutes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href={LINKS.documentation}>
                    Explore Components
                    <Sparkles className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
            {/* Decorative gradient */}
            <div className="bg-primary/20 absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-primary/20 absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
