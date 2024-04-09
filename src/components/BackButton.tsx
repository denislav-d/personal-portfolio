import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <button className="inline-block font-serif text-lg tracking-tight text-dark underline duration-300 before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-[''] hover:scale-[0.98]">
        back to home
      </button>
    </Link>
  );
}
