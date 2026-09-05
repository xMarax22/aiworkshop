import ThemeToggle from "@/components/theme-toggle";

const experience = [
  {
    role: "Church Secretary",
    organization: "Restoration Worship Center",
    location: "Oklahoma City, OK",
    period: "Aug 2025 - Present",
    points: [
      "Coordinate weekly announcements, office administration, records, correspondence, and support for pastors and church leadership.",
      "Support the pastoral team and serve as part of the administrative team, collaborating on church communications and projects such as preparing and distributing the monthly church newsletter.",
    ],
  },
  {
    role: "Assistant Church Secretary",
    organization: "Restoration Worship Center",
    location: "Oklahoma City, OK",
    period: "Jun 2022 - Jul 2025",
    points: [
      "Assisted with administrative duties, office organization, announcements, and communication with church members.",
    ],
  },
  {
    role: "Youth Department Volunteer",
    organization: "Restoration Worship Center",
    location: "Oklahoma City, OK",
    period: "Dec 2019 - 2022",
    points: [
      "Lead and support children's Bible lessons, Wednesday activities, snacks, games, crafts, supervision, and basic first-aid needs.",
    ],
  },
  {
    role: "Founder & Owner",
    organization: "Mara's Velouré",
    location: null,
    period: "2026 - Present",
    points: [
      "Design, produce, and sell custom T-shirts and apparel using Cricut, heat-press, sublimation, HTV (Heat Transfer Vinyl), and DTF (Direct-To-Film) based production methods.",
      "Manage online products, pricing, inventory, customer orders, fulfillment, branding, and social-media promotion.",
      "Maintain the business website and use technology tools to support e-commerce and day-to-day operations.",
      "Created the business website using coding.",
    ],
  },
  {
    role: "Secretary",
    organization: "Turning Lives Around Non-Profit Organization",
    location: null,
    period: "Jun 2022 - Present",
    points: [
      "Answer calls, organize mail and files, prepare and maintain meeting minutes, and support administrative operations.",
      "Maintain organizational records including bylaws, membership information, board documentation, and financial reports.",
    ],
  },
];

const skillGroups = [
  {
    name: "Administrative",
    skills:
      "Office administration, record maintenance, meeting minutes, filing, mail distribution, organization, and time management.",
  },
  {
    name: "Software",
    skills:
      "Microsoft Word, Microsoft Excel, Google Docs, Google Workspace, Android Studio, Visual Studio Code, Visual Studio 2022, and general computer applications.",
  },
  {
    name: "Technology",
    skills:
      "Computer programming, website administration, e-commerce tools, product management, and digital workflows.",
  },
  {
    name: "Business",
    skills:
      "Custom apparel production, Cricut, heat pressing, sublimation, order fulfillment, customer service, and branding.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science - Information Science with a Minor in Business Administration",
    school: "University of Central Oklahoma",
    location: "Edmond, OK",
    period: "Aug 2022 - Expected May 2028 | Current GPA 2.86",
  },
  {
    degree: "High School Diploma",
    school: "Jones High School",
    location: "Jones, OK",
    period: "May 2022 | GPA 3.67",
  },
];

const leadershipService = [
  "Church administration and ministry support",
  "Youth mentoring and Bible activities",
  "Homeless outreach and meal preparation",
  "Nonprofit recordkeeping and secretary duties",
];

const interests = [
  "Church volunteer work",
  "Community outreach",
  "Art & design",
  "Gaming",
  "Social media",
  "Video editing",
  "Content creation",
  "Technology",
  "Computer programming",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-1 flex-col bg-background font-sans text-foreground">
      <header className="border-b border-muted/20">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tamarra Sanders
            </h1>
            <p className="mt-1 text-base text-muted sm:text-lg">
              Computer Science - Information Science Student, Church Administrator,
              and Small Business Owner
            </p>
            <p className="mt-1 text-sm text-muted">Oklahoma</p>
          </div>
          <ThemeToggle />
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-wrap gap-x-6 gap-y-2 px-4 pb-5 text-sm sm:px-6">
          <a
            href="mailto:tamarrasanders211@gmail.com"
            className="text-accent transition-colors hover:text-foreground"
          >
            tamarrasanders211@gmail.com
          </a>
          <a
            href="https://github.com/xMarax22"
            className="text-accent transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 space-y-10 px-4 py-10 sm:px-6">
        <section aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="mb-3 text-xl font-semibold tracking-tight text-accent"
          >
            Summary
          </h2>
          <p className="leading-relaxed">
            Computer Science - Information Science student, church administrator,
            and small business owner with experience in office operations,
            community service, customer support, and technology. Organized,
            dependable, and comfortable managing records, communications, and
            multiple responsibilities.
          </p>
        </section>

        <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="mb-8 border-b border-muted/20 pb-2 text-xl font-semibold tracking-tight text-accent"
          >
            Experience
          </h2>
          <ol className="space-y-9">
            {experience.map((job) => (
              <li key={`${job.role}-${job.organization}`}>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-base text-muted">
                    {job.organization}
                    {job.location ? ` - ${job.location}` : ""}
                  </p>
                  <p className="text-sm text-muted">{job.period}</p>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="mb-4 border-b border-muted/20 pb-2 text-xl font-semibold tracking-tight text-accent"
          >
            Skills
          </h2>
          <dl className="space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="flex flex-col gap-1 sm:flex-row sm:gap-4"
              >
                <dt className="w-32 shrink-0 font-semibold text-muted">
                  {group.name}
                </dt>
                <dd className="text-sm leading-relaxed">{group.skills}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="mb-4 border-b border-muted/20 pb-2 text-xl font-semibold tracking-tight text-accent"
          >
            Education
          </h2>
          <ol className="space-y-5">
            {education.map((item) => (
              <li key={item.degree}>
                <h3 className="text-base font-semibold">{item.degree}</h3>
                <p className="text-sm text-muted">
                  {item.school} - {item.location}
                </p>
                <p className="text-sm text-muted">{item.period}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="leadership-heading">
          <h2
            id="leadership-heading"
            className="mb-4 border-b border-muted/20 pb-2 text-xl font-semibold tracking-tight text-accent"
          >
            Leadership & Service
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            {leadershipService.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="interests-heading">
          <h2
            id="interests-heading"
            className="mb-4 border-b border-muted/20 pb-2 text-xl font-semibold tracking-tight text-accent"
          >
            Interests
          </h2>
          <p className="text-sm leading-relaxed">{interests.join(", ")}.</p>
        </section>
      </main>

      <footer className="border-t border-muted/20">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 text-center text-sm text-muted sm:px-6">
          Tamarra Sanders &copy; {year}
        </div>
      </footer>
    </div>
  );
}