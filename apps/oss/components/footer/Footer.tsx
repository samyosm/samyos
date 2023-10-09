import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-5 mt-16 flex justify-between text-neutral-600">
      <p>© {new Date().getFullYear()} Copyright</p>
      <Link href="/read/oss/policy/policy">Privacy Policy</Link>
    </footer>
  );
};
