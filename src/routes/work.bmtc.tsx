import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { ReactNode } from "react";

export const Route = createFileRoute("/work/bmtc")({
  head: () => ({
    meta: [
      { title: "Namma BMTC — Siddharth" },
      {
        name: "description",
        content:
          "A human-centered redesign of the Namma BMTC app focused on reliability, commuter trust, safety, and reducing anxiety during daily public transportation.",
      },
      { property: "og:title", content: "Namma BMTC — Case Study" },
      {
        property: "og:description",
        content:
          "Reimagining trust in public transit through human-centered design.",
      },
    ],
  }),
  component: BMTCCase,
});

function BMTCCase() {
  return (
    <>
      <SiteNav />

      <main className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-[1280px]">
          <Link to="/" className="text-[13px] accent-link">
            ← Selected work
          </Link>

          {/* Header */}
          <div className="mt-12 fade-up">
            <p className="text-[13px] text-muted-foreground mb-3">
              01 · Case Study
            </p>
            <h1 className="text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em] font-medium">
              Namma BMTC — Reimagining Trust in Public Transit
            </h1>
            <p className="mt-4 text-[16px] md:text-[18px] leading-[1.5] text-foreground/80 max-w-[52ch]">
              A human-centered redesign of the Namma BMTC app focused on
              reliability, commuter trust, safety, and reducing anxiety
              during daily public transportation.
            </p>
          </div>

          {/* Meta */}
          <dl className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-8 border-y border-hairline py-8 text-[13px]">
            <Meta label="Duration">1–2 weeks</Meta>
            <Meta label="Team">Siddharth, Nireeksha, Akshaya</Meta>
            <Meta label="Role">UX Research · Strategy · IA · Visual · Interaction</Meta>
            <Meta label="Tools">Figma, FigJam, Miro</Meta>
            <Meta label="Category">Public Transit · Mobility</Meta>
          </dl>

          {/* Body */}
          <div className="mt-32 grid grid-cols-12 gap-x-8 gap-y-24">
            <div className="col-span-12 md:col-span-2">
              <p className="md:sticky md:top-24 text-[12px] text-muted-foreground">
                Stage 01
                <br />
                <span className="text-foreground">Context</span>
                <br />& Framing
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-20">
              <Section label="Background">
                <P>
                  Public transportation systems are designed to reduce
                  friction in urban mobility. Yet, despite BMTC being one of
                  India's largest bus networks, the digital experience
                  around commuting remained fragmented, unreliable, and
                  emotionally stressful.
                </P>
                <P>The Namma BMTC app promised:</P>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                  <Bullet>Live tracking</Bullet>
                  <Bullet>Route planning</Bullet>
                  <Bullet>Safety systems</Bullet>
                  <Bullet>Ticketing</Bullet>
                  <Bullet>Smart mobility support</Bullet>
                </div>
                <P className="mt-8">But in reality, commuters struggled with:</P>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                  <Bullet>Unreliable ETAs</Bullet>
                  <Bullet>Confusing navigation</Bullet>
                  <Bullet>Overloaded interfaces</Bullet>
                  <Bullet>Lack of trust in data</Bullet>
                  <Bullet>Poor accessibility</Bullet>
                  <Bullet>Emotional stress during commuting</Bullet>
                </div>
                <P className="mt-8">
                  This project aimed to rethink the BMTC app not as a
                  "feature-heavy utility," but as a system built around
                  commuter confidence and clarity.
                </P>
              </Section>

              <Section label="Why We Chose This Problem">
                <P>
                  The project originated from observing everyday commuting
                  struggles within our own lives. Two members of the team
                  regularly depended on BMTC buses, which led to recurring
                  discussions around unpredictability, delays, and anxiety
                  while using the app.
                </P>
                <Pullquote>
                  The hesitation around public transport wasn't because users
                  disliked buses — it was because they lacked trust in the
                  system supporting them.
                </Pullquote>
                <P>
                  The deeper we researched, the clearer the gap became
                  between the app's vision and the commuter's lived
                  experience.
                </P>
              </Section>

              <Section label="Problem Statement">
                <p className="text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.018em] font-medium text-balance max-w-[44ch]">
                  How might we redesign the Namma BMTC experience to create a
                  system that feels reliable, transparent, safe, and
                  emotionally supportive for daily commuters?
                </p>
                <P className="mt-6">
                  Especially during moments of uncertainty like delays,
                  overcrowding, route confusion, and commute planning.
                </P>
              </Section>

              <Section label="Research Goals">
                <List
                  items={[
                    "Why users distrust the BMTC app",
                    "How uncertainty affects commuter behavior",
                    "Which moments create the most stress during commuting",
                    "Whether the issue was technological, experiential, or structural",
                    "How digital systems could better support urban public transit",
                  ]}
                />
              </Section>

              <Section label="Research Process">
                <Method
                  n="01"
                  title="Initial Exploration"
                  body="Documented personal commuting experiences, frustrations, and observed behavioral patterns. This helped surface recurring themes: uncertainty, anxiety, and fragmented experiences."
                />
                <Method
                  n="02"
                  title="System Analysis"
                  body="Analyzed the current BMTC app, service ecosystem, infrastructure constraints, and stakeholder relationships."
                  meta="SWOT · PESTEL · Conflict Mapping · Journey Mapping · Empathy Mapping · IA Audit"
                />
              </Section>

              <Section label="Key Research Insights">
                <Finding
                  n="01"
                  title="The core issue was not missing features — it was broken trust"
                  body="The app already included route planning, tracking, SOS, nearby stops, ticketing, and commuter services. But users still avoided depending on it because the information often felt unreliable."
                  insight="People can tolerate delays. They cannot tolerate uncertainty."
                />
                <Finding
                  n="02"
                  title="Feature overload increased cognitive stress"
                  body="The app tried to solve too many problems at once — ticketing, maps, facilities, tracking, passes, government integrations, route planning — creating clutter, poor hierarchy, and confusing flows."
                  insight="The interface prioritized 'feature presence' over commuter clarity."
                />
                <Finding
                  n="03"
                  title="Users needed emotional reassurance, not just data"
                  body="The app displayed ETAs but gave no explanation when delays occurred. Users repeatedly refreshed the interface while becoming increasingly anxious."
                  insight="The experience failed not only functionally, but emotionally."
                />
                <Finding
                  n="04"
                  title="Public transit decisions are highly time-sensitive"
                  body="Users constantly made micro-decisions: Should I wait? Should I leave now? Should I take a cab? Will the next bus be crowded? The app did little to support those decisions."
                  insight="Mobility apps must support real-time decision-making, not just display data."
                />
              </Section>

              <Section label="Competitive & System Understanding">
                <P>
                  We studied how mobility systems build trust through
                  transparency, live feedback, predictive systems, and
                  reduced friction. A key observation came from
                  ride-booking platforms like Namma Yatri, Uber, and Google
                  Maps. These systems continuously reassure users:
                </P>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                  <Bullet>"Driver arriving"</Bullet>
                  <Bullet>"Delayed by 2 minutes"</Bullet>
                  <Bullet>"Alternative route available"</Bullet>
                </div>
                <P className="mt-6">BMTC lacked this reassurance layer.</P>
              </Section>

              <Section label="PESTEL Analysis">
                <Method
                  n="P"
                  title="Political"
                  body="Government-backed initiative aligned with Digital India goals."
                />
                <Method
                  n="E"
                  title="Economic"
                  body="Low ticket prices restricted operational and technological investment."
                />
                <Method
                  n="S"
                  title="Social"
                  body="Large, diverse commuter base with varying levels of digital literacy."
                />
                <Method
                  n="T"
                  title="Technological"
                  body="Not all buses were GPS-enabled, weakening live tracking reliability."
                />
                <Method
                  n="E"
                  title="Environmental"
                  body="Improving bus adoption could reduce traffic congestion and emissions."
                />
                <Method
                  n="L"
                  title="Legal"
                  body="Accessibility guidelines existed, but implementation remained weak."
                />
              </Section>

              <Section label="User Personas">
                <Finding
                  n="01"
                  title="Peterson Pratap — Software engineer"
                  body="Commutes daily to work. Primary need: reliability and predictability. Pain points: inaccurate tracking, no delay explanations, uncertainty around alternates."
                  insight="He constantly switched to cabs when trust in the system failed."
                />
                <Finding
                  n="02"
                  title="Nireeksha Subhalaxmi — College student"
                  body="Dependent on buses due to affordability. Pain points: overcrowding, safety concerns, unclear route visibility, inability to afford alternate transport."
                  insight="Safety and predictability mattered more than speed."
                />
              </Section>

              <Section label="Journey Mapping">
                <P>
                  We mapped emotional states across commuting stages —
                  planning, anticipation, waiting, commuting, reflection. The
                  emotional curve repeatedly shifted from{" "}
                  <em className="not-italic text-foreground">
                    confidence → confusion → anxiety → frustration.
                  </em>
                </P>
                <Pullquote>
                  The commute itself was not always stressful. The
                  uncertainty before the commute was.
                </Pullquote>
              </Section>

              <Section label="Defining the Design Direction">
                <P>We reframed the project from:</P>
                <p className="text-[18px] text-muted-foreground line-through">
                  "Improving a transport app"
                </p>
                <p className="text-[22px] md:text-[26px] leading-[1.25] tracking-[-0.02em] font-medium">
                  "Designing a system that builds commuter trust."
                </p>
              </Section>

              <Section label="Design Principles">
                <Method
                  n="01"
                  title="Clarity Over Feature Density"
                  body="Reduce visual clutter and prioritize essential commuter actions."
                />
                <Method
                  n="02"
                  title="Reassurance Through Feedback"
                  body="Communicate uncertainty honestly — delays, reroutes, bus availability, alternatives."
                />
                <Method
                  n="03"
                  title="Safety Must Be Immediate"
                  body="SOS and emergency actions should be accessible instantly."
                />
                <Method
                  n="04"
                  title="Support Real Decision-Making"
                  body="Help users decide whether to wait, reroute, or choose alternate transport."
                />
                <Method
                  n="05"
                  title="Reduce Cognitive Load"
                  body="Simplify flows, hierarchy, and interactions."
                />
              </Section>

              <Section label="Information Architecture Redesign">
                <P>
                  We redesigned the IA around the commuter's primary actions:
                </P>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                  <Bullet>Track Bus</Bullet>
                  <Bullet>Nearby Stops</Bullet>
                  <Bullet>Plan Journey</Bullet>
                  <Bullet>Tickets</Bullet>
                  <Bullet>SOS</Bullet>
                </div>
                <P className="mt-6">
                  Instead of burying actions inside layered menus, the
                  redesigned structure prioritized map-first navigation,
                  live visibility, and quick decision-making.
                </P>
              </Section>

              <Section label="Key UX Interventions">
                <Method
                  n="01"
                  title="Real-Time Tracking Experience"
                  body="Inspired by airline and train tracking systems — clearer bus positioning, ETA reliability, route visibility, and current bus status."
                />
                <Method
                  n="02"
                  title="Nearby Stops Interface"
                  body="Focused on buses near the user, upcoming arrivals, live route numbers, and recent searches — reducing dependence on route memorization."
                />
                <Method
                  n="03"
                  title="Integrated Ticketing"
                  body="The existing app redirected users to another platform for tickets. We proposed in-app QR scanning, unified payments, and integrated passes — reducing friction across the journey."
                />
                <Method
                  n="04"
                  title="SOS Accessibility"
                  body="Emergency access became a primary action rather than a hidden utility — instant access to police, ambulance, fire, and BMTC helpline."
                />
              </Section>

              <Section label="Visual Design Direction">
                <P>
                  The current app felt outdated, cluttered, visually
                  inconsistent, and emotionally cold. We repositioned the
                  interface toward cleaner hierarchy, calmer layouts,
                  map-centric interactions, accessible typography, and
                  stronger visual trust signals.
                </P>
              </Section>

              <Section label="Outcome — Prototype">
                <P>The redesign shifted the experience from:</P>
                <p className="text-[18px] text-muted-foreground line-through">
                  "a feature-heavy transport utility"
                </p>
                <p className="text-[22px] md:text-[26px] leading-[1.25] tracking-[-0.02em] font-medium">
                  "a commuter support system."
                </p>
                <P className="mt-6">
                  The proposal focused less on adding more features and more
                  on reducing uncertainty, increasing transparency, and
                  helping commuters feel informed and safe.
                </P>
              </Section>

              <Section label="What I Learned">
                <Finding
                  n="01"
                  title="Systems matter more than screens"
                  body="A mobility product is deeply tied to infrastructure, governance, and operational realities."
                  insight="Designing for transit is designing for the whole system, not the app alone."
                />
                <Finding
                  n="02"
                  title="Trust is a UX problem"
                  body="Even technically functional systems fail when users emotionally distrust them."
                  insight="Trust is built through transparency, feedback, and consistency."
                />
                <Finding
                  n="03"
                  title="Public design requires empathy at scale"
                  body="Designing for public transportation means designing for stress, urgency, accessibility, and unpredictability."
                  insight="Empathy must scale to millions of varied users and contexts."
                />
                <Finding
                  n="04"
                  title="Information design shapes behavior"
                  body="Clear communication directly affects whether users wait, leave, reroute, or abandon the system entirely."
                  insight="Better information design changes real-world commuter decisions."
                />
              </Section>

              <Section label="Final Reflection">
                <P>
                  This project taught me that designing for public systems is
                  not about creating visually appealing interfaces alone. It
                  is about reducing friction in people's everyday lives.
                </P>
                <P>
                  By reframing BMTC through the lens of trust, reassurance,
                  and commuter emotion, we explored how thoughtful experience
                  design could help public transport feel more dependable,
                  human, and usable at scale.
                </P>
              </Section>
            </div>
          </div>

          {/* Next */}
          <div className="mt-40 border-t border-hairline pt-10 flex items-end justify-between">
            <span className="text-[13px] text-muted-foreground">Next</span>
            <Link
              to="/work/changebag"
              className="text-[20px] md:text-[26px] tracking-[-0.02em] font-medium accent-link"
            >
              Changebag →
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

/* — Helpers — */

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <dt className="text-muted-foreground text-[12px] uppercase tracking-wider">
        {label}
      </dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <p className="text-[13px] text-muted-foreground border-b border-hairline pb-3 mb-8">
        {label}
      </p>
      <div className="space-y-6 max-w-[62ch]">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[15px] leading-relaxed tracking-[-0.005em] ${className}`}>
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-4 text-[15px] leading-relaxed tracking-[-0.005em]"
        >
          <span className="text-muted-foreground tabular-nums w-6 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 py-2 border-b border-hairline/60">
      <span className="text-muted-foreground">—</span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </div>
  );
}

function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l border-foreground pl-6 md:pl-8 py-2 max-w-[60ch]">
      <p className="text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.018em] font-medium text-balance">
        {children}
      </p>
    </blockquote>
  );
}

function Method({
  n,
  title,
  body,
  meta,
}: {
  n: string;
  title: string;
  body: string;
  meta?: string;
}) {
  return (
    <div className="border-t border-hairline pt-5 grid grid-cols-12 gap-4">
      <span className="col-span-2 md:col-span-1 text-[13px] text-muted-foreground tabular-nums pt-1">
        {n}
      </span>
      <div className="col-span-10 md:col-span-11 space-y-2">
        <h4 className="text-[16px] tracking-[-0.012em] font-medium">{title}</h4>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
        {meta && <p className="text-[12px] text-muted-foreground/80 pt-1">{meta}</p>}
      </div>
    </div>
  );
}

function Finding({
  n,
  title,
  body,
  insight,
}: {
  n: string;
  title: string;
  body: string;
  insight: string;
}) {
  return (
    <div className="border-t border-hairline pt-6 grid grid-cols-12 gap-4">
      <span className="col-span-2 md:col-span-1 text-[13px] text-muted-foreground tabular-nums pt-1">
        {n}
      </span>
      <div className="col-span-10 md:col-span-11 space-y-3">
        <h4 className="text-[17px] tracking-[-0.015em] font-medium">{title}</h4>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
        <p className="text-[14px] text-foreground pt-2">
          Insight ·{" "}
          <span className="normal-case tracking-normal text-[15px] text-foreground/90">
            {insight}
          </span>
        </p>
      </div>
    </div>
  );
}
