import Link from "next/link";

type DescriptionBlockProps = {
  title: string;
  description: string;
  link?: string;
  link_before?: string;
  link_after?: string;
};

export default function DescriptionBlock({
  title,
  description,
  link,
  link_before,
  link_after,
}: DescriptionBlockProps) {
  return (
    <>
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          {title}
        </span>
        <br />
        {link_before ? (
          <Link className="underline" href={`${link}`}>
            {link_before}
          </Link>
        ) : (
          ""
        )}
        {description}{" "}
        <Link className="underline" href={`${link}`}>
          {link_after}
        </Link>
      </h1>
    </>
  );
}
