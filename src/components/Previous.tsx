import React from 'react';
import { PixelCard } from './PixelCard';
import { CheckCircle, Calendar, Star, ExternalLink } from 'lucide-react';
import { PixelButton } from './PixelButton';
import mycrave1 from '../img/restfinder/IMG_0002.PNG';
import mycrave2 from '../img/restfinder/IMG_0003.PNG';
import mycrave3 from '../img/restfinder/IMG_0004.PNG';
import mycrave4 from '../img/restfinder/IMG_0005.PNG';
import nuerd1 from '../img/nuerd/Screenshot_20250630_192806_Nuerd.jpg';
import nuerd2 from '../img/nuerd/Screenshot_20250630_192825_Nuerd.jpg';
import nuerd3 from '../img/nuerd/Screenshot_20250630_195029_Nuerd.jpg';
import nuerd4 from '../img/nuerd/Screenshot_20250630_195033_Nuerd.jpg';
import nuerd5 from '../img/nuerd/Screenshot_20250630_195045_Nuerd.jpg';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  status: string;
  highlights: string[];
  appStoreLink?: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MyCrave - Restaurant Finder',
    period: '2024',
    description: 'En iOS-app för att hitta restauranger nära dig med integrerad kartfunktion och platsbaserade tjänster. Publicerad på App Store. I detta gruppprojekt har jag varit bidragande i design, men framförallt hanterat implementeringen av Google Maps och Location',
    technologies: ['Swift', 'SwiftUI', 'Google Maps API', 'Location API'],
    status: 'COMPLETED',
    highlights: [
      'Publicerad på App Store',
      'Google Maps integration',
      'Platsbaserade tjänster',
      'iOS native app'
    ],
    appStoreLink: 'https://apps.apple.com/se/app/mycrave/id6741516126',
    screenshots: [mycrave1, mycrave2, mycrave3, mycrave4]
  },
  {
    id: 2,
    title: 'Nuerd - Math Game',
    period: '2024',
    description: 'Ett matematikspel fokuserat på att lära sig multiplikationstabellerna. Utvecklat för Android med modern Jetpack Compose UI.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    status: 'COMPLETED',
    highlights: [
      'Android native app',
      'Pedagogiskt fokus',
      'Interaktivt lärande',
      'Multiplikationstabeller'
    ],
    screenshots: [nuerd1, nuerd2, nuerd3, nuerd4, nuerd5]
  }
];

export function Previous() {
  return (
    <div className="space-y-8 scanline">
      <div className="text-center">
        <h1 className="text-primary mb-2">PREVIOUS PROJECTS</h1>
        <p className="text-accent">{'> SLUTFÖRDA PROJEKT <'}</p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <PixelCard key={project.id} glitch>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[250px]">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-primary">{project.title}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <p>{project.period}</p>
                  </div>
                </div>
                <div className="bg-primary px-4 py-2 pixel-corners">
                  <p className="text-primary-foreground">{project.status}</p>
                </div>
              </div>

              <p className="leading-relaxed">{project.description}</p>

              <div>
                <h3 className="text-accent mb-2">TEKNOLOGIER</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-secondary border-2 border-secondary px-3 py-1 pixel-corners"
                    >
                      <p className="text-secondary-foreground">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-accent mb-2">HÖJDPUNKTER</h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <h3 className="text-accent mb-3">SKÄRMDUMPAR</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="border-4 border-foreground pixel-corners w-full h-auto"
                        style={{ boxShadow: '4px 4px 0 rgba(0, 255, 65, 0.2)' }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.appStoreLink && (
                <div className="flex gap-4 pt-4 border-t-2 border-foreground flex-wrap">
                  <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                    <PixelButton variant="primary">
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        VIEW ON APP STORE
                      </span>
                    </PixelButton>
                  </a>
                </div>
              )}
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
