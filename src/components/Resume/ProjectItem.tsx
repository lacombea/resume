import { TechBadge } from './TechBadge'
import { ExternalLinkIcon, GitHubIcon, WebsiteIcon } from '@/components/icons'

interface ProjectItemProps {
  title: string
  description: string
  techs: string[]
  url?: string
  github?: string
  period?: string
}

export function ProjectItem({ title, description, techs, url, github, period }: ProjectItemProps) {
  return (
    <div className="flex items-start gap-4 py-3 px-3 -mx-3 rounded-lg hover:bg-resume-primary/5 transition-colors">
      {period && (
        <div className="w-20 flex-shrink-0">
          <span className="text-sm font-bold text-resume-primary">{period}</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {url ? (
            <div className="group/link flex items-center gap-2">
              <WebsiteIcon className="w-3.5 h-3.5 text-resume-primary shrink-0" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/project relative text-sm font-semibold text-resume-text hover:text-resume-primary transition-colors duration-200 inline-flex items-center gap-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-resume-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {title}
                <ExternalLinkIcon className="w-3 h-3 shrink-0 text-resume-primary opacity-0 group-hover/project:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
          ) : (
            <h3 className="text-sm font-semibold text-resume-text">{title}</h3>
          )}
        </div>
        <p className="text-xs text-resume-text-secondary mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}