export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-7 text-center text-xs leading-6 text-slate-400 sm:px-6 sm:text-sm">
      <p>
        © {new Date().getFullYear()} Mark James F. Manlangit.
        All rights reserved.
      </p>
    </footer>
  );
}