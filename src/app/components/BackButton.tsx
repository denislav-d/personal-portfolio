import Link from "next/link";

export default function BackButton() {
  return (
    <Link className="" href="/">
      <button className="font-serif text-lg tracking-tight text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        back to home
      </button>
    </Link>
  );
}
