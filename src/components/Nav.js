import Link from 'next/link';

import { Github } from 'lucide-react';

export const Nav = ({ className }) => {
  return (
    <div className={className || 'z-50'}>
      <div className="h-16 flex justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-20 relative text-white">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <img
              src="/images/logos/neotecs-nav-logo.png"
              className="w-20 h-16 mb-3"
              alt="Neo"
            />
          </Link>
        </div>
        <aside className="inline-flex space-x-3">
          <Link
            href="https://github.com/solidsnk86"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.6] hover:transition-all"
          >
            <span className=" px-2 py-1 rounded-full bg-slate-200 font-semibold text-sm text-[#222]">
              Sígueme
            </span>
            <Github className="cursor-pointer w-7 h-7" />
          </Link>
        </aside>
      </div>
    </div>
  );
};
