import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const visibleStack = project.stack.slice(0, 5);
  const remainingCount = project.stack.length - 5;

  return (
    <motion.article
      className="w-[85vw] max-w-[340px] shrink-0 snap-start sm:w-[62vw] sm:max-w-none lg:w-[46vw] xl:w-[42vw]"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:min-h-0 sm:aspect-[16/12] lg:aspect-auto lg:h-[66vh]"
        >
          <motion.div layoutId={`art-${project.id}`} className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.07]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          {/* gradient shadow overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 via-40% to-black/20" />

          {/* badges */}
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md border border-white/10 sm:left-7 sm:top-7 sm:border-none sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <span className="font-display text-lg leading-none text-crimson-2 sm:text-xl">S</span>
            <span className="text-[10px] font-bold tracking-[0.34em] text-bone/90">ORIGINAL</span>
          </div>
          <span className="absolute right-4 top-4 z-10 rounded border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] font-bold text-bone backdrop-blur-md sm:right-7 sm:top-7 sm:bg-transparent sm:backdrop-blur-none">
            {project.year}
          </span>

          {/* content */}
          <div className="relative z-10 p-5 sm:p-7 [transform:translateZ(40px)]">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">{project.genre}</p>
            <motion.h3 layoutId={`title-${project.id}`} className="font-display text-[clamp(2rem,6vw,4.6rem)] leading-[0.9] tracking-wide text-bone">
              {project.title}
            </motion.h3>
            <p className="mt-2.5 line-clamp-2 max-w-md text-xs leading-relaxed text-bone/80 sm:line-clamp-none sm:text-[15px]">
              {project.logline}
            </p>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {visibleStack.map((t) => (
                <span key={t} className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-bone/90 backdrop-blur border border-white/10 sm:text-[11px]">
                  {t}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-mist backdrop-blur sm:text-[11px]">
                  +{remainingCount}
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
              <span className="flex min-h-10 items-center gap-2 rounded-md bg-bone px-4 text-xs font-bold text-ink transition group-hover:bg-white sm:min-h-11 sm:px-5 sm:text-sm">
                ▶ View Project
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-10 items-center gap-2 rounded-md border border-white/25 bg-black/40 px-3 text-xs font-semibold text-bone backdrop-blur transition hover:border-bone sm:min-h-11 sm:px-4 sm:text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
