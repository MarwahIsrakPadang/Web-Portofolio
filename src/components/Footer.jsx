import { ChevronUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <p>
          &copy; {new Date().getFullYear()} Marwah Israk Padang. All Rights Reserved.
          
        </p>

        <a
          href="#hero"
          className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors"
        >
          <ChevronUp size={16} /> Back to top
        </a>
      </div>
    </footer>
  );
}
