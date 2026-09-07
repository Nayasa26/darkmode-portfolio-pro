import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/Reveal";
import { Sunrise } from "@/components/Sunrise";
import profileImage from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav Mehta — Software Engineering Student & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Aarav Mehta, a software engineering student building fast, thoughtful web and systems projects in TypeScript, Python and Go.",
      },
      { property: "og:title", content: "Aarav Mehta — Software Engineering Student & Builder" },
      {
        property: "og:description",
        content:
          "Projects, skills and contact details for Aarav Mehta, a software engineering student who ships polished products.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const aboutCards = [
  {
    icon: Terminal,
    title: "Who I am",
    body: "First-year software engineering student obsessed with clean architecture, developer experience and shipping things people actually use.",
  },
  {
    icon: Layers,
    title: "What I build",
    body: "Full-stack web apps, developer tooling and small distributed systems — usually TypeScript on the edge with a Postgres core.",
  },
  {
    icon: Sparkles,
    title: "How I work",
    body: "Prototype fast, measure, then refine. I care about the last 10% — motion, spacing, empty states and error messages.",
  },
  {
    icon: MapPin,
    title: "Right now",
    body: "Looking for a 2027 software engineering internship. Open to backend, platform or product-focused frontend teams.",
  },
];

const projects = [
  {
    name: "Nebula CI",
    tag: "Developer tooling",
    body: "A lightweight CI runner that caches build graphs and cut pipeline times by 61% for my university robotics team.",
    stack: ["Go", "Docker", "Redis"],
  },
  {
    name: "Lumen Notes",
    tag: "Full-stack app",
    body: "Realtime collaborative notes with offline sync, vector search and keyboard-first navigation. 1.2k monthly users.",
    stack: ["React", "Postgres", "WebSockets"],
  },
  {
    name: "Transit Pulse",
    tag: "Data visualisation",
    body: "Live city bus reliability dashboard built on an open GTFS feed, streaming 40k events an hour into a rolling map view.",
    stack: ["TypeScript", "D3", "Kafka"],
  },
  {
    name: "Kernel Lab",
    tag: "Systems",
    body: "A teaching-oriented toy operating system with a preemptive scheduler and virtual memory, written for a systems course.",
    stack: ["C", "x86", "QEMU"],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["TypeScript", "Python", "Go", "C / C++", "SQL"],
  },
  {
    icon: Braces,
    title: "Frontend",
    items: ["React", "TanStack", "Tailwind", "Motion", "Accessibility"],
  },
  {
    icon: Database,
    title: "Backend & data",
    items: ["Postgres", "Redis", "GraphQL", "Kafka", "REST design"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["Cloudflare Workers", "AWS", "Docker", "CI/CD", "Observability"],
  },
  {
    icon: Cpu,
    title: "Fundamentals",
    items: ["Algorithms", "Operating systems", "Networking", "Concurrency"],
  },
  {
    icon: Wrench,
    title: "Toolkit",
    items: ["Git", "Vitest", "Playwright", "Figma", "Linux"],
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass-panel flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "neon-ring" : ""
        }`}
      >
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          aarav<span className="text-gradient">.dev</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="glow-grid relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <Sunrise />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="pulse-glow inline-block size-2 rounded-full bg-primary" />
            First-year student · open to internships
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] font-bold md:text-7xl">
            I turn messy ideas into <span className="text-gradient">software that ships.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Software engineering student, systems tinkerer and interface perfectionist. I build
            products that feel fast, look sharp and hold up under load.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-neon)]"
            >
              View my work <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-primary"
            >
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              ["12+", "Shipped projects"],
              ["3", "Hackathon wins"],
              ["9.1", "GPA / 10"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-bold text-gradient">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={180}>
          <div className="float-slow relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={profileImage}
                alt="Stylised neon portrait of Aarav Mehta, software engineering student"
                width={816}
                height={816}
                className="w-full rounded-[1.5rem] object-cover"
              />
              <div className="flex items-center justify-between px-3 py-4">
                <div>
                  <p className="font-display text-sm font-semibold">Aarav Mehta</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE · First year</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#contact"
                    aria-label="GitHub"
                    className="glass-panel rounded-full p-2 transition-colors hover:border-primary"
                  >
                    <Github className="size-4" />
                  </a>
                  <a
                    href="#contact"
                    aria-label="LinkedIn"
                    className="glass-panel rounded-full p-2 transition-colors hover:border-primary"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {blurb ? <p className="mt-4 text-muted-foreground">{blurb}</p> : null}
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <SectionHeading
        eyebrow="About me"
        title="Curious by default, deliberate by habit"
        blurb="I like problems that sit between good engineering and good taste."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {aboutCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <article className="card-surface h-full rounded-2xl p-7">
              <span className="inline-flex rounded-xl bg-primary/15 p-3 text-primary">
                <card.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 border-y border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          blurb="A mix of coursework taken too far and side projects that found real users."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <article className="card-surface group relative h-full overflow-hidden rounded-2xl p-7">
                <div className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-primary uppercase">
                      {project.tag}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="The matrix"
        blurb="Depth where it counts, breadth where it helps."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <article className="card-surface h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-primary/15 p-2.5 text-primary">
                  <group.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="glow-grid scroll-mt-28 px-6 py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="glass-panel neon-ring rounded-3xl p-8 md:p-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let's build something</h2>
          <p className="mt-4 text-muted-foreground">
            Internships, side projects or a quick chat about compilers — my inbox is open.
          </p>
          <form
            className="mt-9 grid gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                (event.target as HTMLFormElement).reset();
                toast.success("Message ready to send", {
                  description: "Connect a mailbox later and this form will deliver for real.",
                });
              }, 700);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Your name</span>
                <input
                  required
                  name="name"
                  placeholder="Ada Lovelace"
                  className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell me what you're working on..."
                className="resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a
                href="mailto:hello@aarav.dev"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" /> hello@aarav.dev
              </a>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-neon)] disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send message"} <Send className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Designed and built by Aarav Mehta · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
