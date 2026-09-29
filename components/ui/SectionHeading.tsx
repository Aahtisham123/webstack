export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 text-muted sm:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
