
import { PixelCard } from './PixelCard';
import { Zap, Calendar, BookOpen, BarChart3, Camera, Shield, Star } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { GithubIcon } from './icons/GithubIcon';
import screenshot1 from '../img/emmisense/Screenshot_1762622686.png';
import screenshot2 from '../img/emmisense/Screenshot_1762622845.png';

export function Current() {
  return (
    <div className="space-y-8 scanline">
      <div className="text-center">
        <h1 className="text-primary mb-2">CURRENT PROJECT</h1>
        <p className="text-accent">{'> PÅGÅENDE ARBETE <'}</p>
      </div>

      <PixelCard glitch>
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-primary animate-pulse" />
                <h2 className="text-primary">emmiSense</h2>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <p>2024 - 2025</p>
              </div>
            </div>
            <div className="bg-primary px-4 py-2 pixel-corners">
              <p className="text-primary-foreground">IN PROGRESS</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-accent mb-3">BESKRIVNING</h3>
              <p className="leadin-relaxed text-sm leading-relaxed">
                En React Native mobilapplikation för diabeteshantering som låter användare
                logga måltider, blodsockernivåer, insulin och aktivitet. Utvecklad som del
                av min arbetslivserfarenhet för att hjälpa diabetiker att hantera sin hälsa
                på ett enkelt och effektivt sätt.
              </p>
            </div>

            <div>
              <h3 className="text-accent mb-3">HUVUDFUNKTIONER</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary mb-1">Dagbok</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Registrera måltider med kolhydrater, blodsocker, insulin, aktivitetsnivå och foton
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary mb-1">Statistik</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Visualisering av data med grafer och genomsnittsvärden
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-accent mb-1">Kamera</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Professionell kameraintegration för att dokumentera måltider
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary mb-1">Autentisering</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Säker användarhantering med e-postverifiering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3">TEKNOLOGIER</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'].map((tech) => (
                  <div
                    key={tech}
                    className="bg-secondary border-2 border-secondary px-3 py-2 text-center pixel-corners"
                  >
                    <p className="text-secondary-foreground text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3">HÖJDPUNKTER</h3>
              <div className="space-y-2">
                {[
                  'Supabase och PostgresSQL baserad',
                  'Deep linking för e-postverifiering',
                  'Custom hooks för databas, kamera, kalender och statistik',
                  'Automatisk session-hantering med token refresh',
                  'System med konsistent spacing och färgschema',
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3">SKÄRMDUMPAR</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={screenshot1}
                  alt="emmiSense screenshot 1"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                <img
                  src={screenshot2}
                  alt="emmiSense screenshot 2"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t-2 border-foreground flex-wrap">
            <a href="https://github.com/koddaz/EMLLMOL.git" target="_blank" rel="noopener noreferrer">
              <PixelButton variant="primary">
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  VIEW ON GITHUB
                </span>
              </PixelButton>
            </a>
          </div>
        </div>
      </PixelCard>
    </div>
  );
}
