import * as React from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <section className="dark:bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 rounded-xl shadow-md shadow-slate-200/40 dark:!shadow dark:border border-zinc-800">
      <div
        onMouseMove={onMouseMove}
        className="overflow-hidden relative duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 "
      >
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 dark:via-purple-500/50 via-purple-200/50 transition duration-1000 group-hover:opacity-50 "
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={style}
          />
        </div>
        {children}
      </div>
    </section>
  );
};
