type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl text-center md:text-left">
      <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
