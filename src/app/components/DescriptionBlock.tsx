export default function DescriptionBlock({ title, description }: any) {
  return (
    <>
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          {title}
        </span>
        <br />
        {description}
      </h1>
    </>
  );
}
