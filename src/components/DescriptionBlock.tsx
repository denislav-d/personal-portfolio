import Link from "next/link";

interface DescriptionBlockProps {
  title: string;
  description: string;
  link?: string;
  link_before?: string;
  link_after?: string;
}

export default function DescriptionBlock({
  title,
  description,
  link,
  link_before,
  link_after,
}: DescriptionBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-title">{title}</h1>
      <p className="text-secondary">
        {link_before ? (
          <Link className="underline" href={`${link}`}>
            {link_before}
          </Link>
        ) : (
          ""
        )}
        {description}{" "}
        {link_after ? (
          <Link className="underline" href={`${link}`}>
            {link_after}
          </Link>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
