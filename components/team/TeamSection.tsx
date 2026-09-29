import { Portrait } from "@/components/team/Portrait";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { featuredMember, supportingTeam, type TeamMember } from "@/lib/team";

function SocialNote({ name }: { name: string }) {
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50"
      title={`${name} LinkedIn profile will be added`}
      aria-label={`${name} LinkedIn profile will be added`}
    >
      <Icon name="linkedin" className="h-4 w-4" />
    </span>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_24px_50px_-30px_rgb(99_102_241_/_0.8)]">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-3 rounded-[1.6rem] bg-gradient-to-br from-accent/30 to-cyan/10 opacity-70 blur-2xl" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Portrait member={member} image={member.image} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">{member.role}</p>
        <h3 className="mt-2 font-display text-xl text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-white/70">{member.expertise.join(" · ")}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted transition group-hover:line-clamp-none">
          {member.bio}
        </p>
        <div className="mt-4">
          <Tags tags={member.tags} />
        </div>
        <div className="mt-5">
          <SocialNote name={member.name} />
        </div>
      </div>
    </article>
  );
}

export function TeamSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="team" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        {heading ? (
          <Reveal>
            <SectionHeading
              eyebrow="04 / People"
              title="Meet the Webstack Team"
              description="A team of developers, SEO specialists, security experts, content professionals, and digital growth specialists working together to deliver complete solutions."
            />
          </Reveal>
        ) : null}
        <Reveal className={heading ? "mt-12" : ""}>
          <article className="grid items-center gap-8 overflow-hidden rounded-[1.8rem] border border-line bg-card p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-10">
            <div className="relative mx-auto aspect-square w-56 sm:w-64 lg:mx-0 lg:w-72">
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-accent/30 blur-2xl" />
              <div className="portrait-border absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 overflow-hidden rounded-full bg-[#0d1117]">
                  <Portrait member={featuredMember} image={featuredMember.image} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
                {featuredMember.role}
              </p>
              <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">{featuredMember.name}</h3>
              <p className="mt-2 text-sm text-cyan">{featuredMember.expertise.join(" · ")}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{featuredMember.bio}</p>
              <div className="mt-5">
                <Tags tags={featuredMember.tags} />
              </div>
              <div className="mt-6">
                <SocialNote name={featuredMember.name} />
              </div>
            </div>
          </article>
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {supportingTeam.map((member, index) => (
            <Reveal
              key={member.slug}
              delay={index * 0.04}
              className={`xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""} ${index === 4 ? "xl:col-start-4" : ""}`}
            >
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
