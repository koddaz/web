
import { PixelCard } from './PixelCard';
import { Zap, Calendar, BookOpen, BarChart3, Camera, Shield, Star } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { GithubIcon } from './icons/GithubIcon';
import screenshot1 from '../img/emmisense/login.jpg';
import screenshot2 from '../img/emmisense/login2.jpg';
import screenshot3 from '../img/emmisense/home.jpg';
import screenshot4 from '../img/emmisense/input.jpg'
import screenshot5 from '../img/emmisense/input2.jpg'
import screenshot6 from '../img/emmisense/settings.jpg'
import screenshot7 from '../img/emmisense/settings2.jpg'
import screenshot8 from '../img/emmisense/stats.jpg'
import screenshot9 from '../img/emmisense/entry.jpg'
import screenshot10 from '../img/emmisense/history.jpg'
export function Current() {
  return (
    <div className="space-y-8 scanline">
      <div className="text-center">
        <h1 className="text-primary mb-2 text-sm md:text-2xl">CURRENT PROJECT</h1>
        <p className="text-accent text-xs md:text-base">{'> PÅGÅENDE ARBETE <'}</p>
      </div>

      <PixelCard glitch>
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <div className="flex items-center gap-2 md:gap-3 mb-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
                <h2 className="text-primary text-sm md:text-lg">emmiSense</h2>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <p className="text-xs md:text-base">2024 - 2025</p>
              </div>
            </div>
            <div className="bg-primary px-3 py-1 md:px-4 md:py-2 pixel-corners">
              <p className="text-primary-foreground text-xs md:text-base">IN PROGRESS</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-accent mb-3 text-xs md:text-sm">BESKRIVNING</h3>
              <p className="leadin-relaxed text-xs md:text-sm leading-relaxed">
                En React Native mobilapplikation för diabeteshantering som låter användare
                logga måltider, blodsockernivåer, insulin och aktivitet. Utvecklad som del
                av min arbetslivserfarenhet för att hjälpa diabetiker att hantera sin hälsa
                på ett enkelt och effektivt sätt.
              </p>
            </div>

            <div>
              <h3 className="text-accent mb-3 text-xs md:text-sm">HUVUDFUNKTIONER</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary mb-1 text-xs md:text-base">Dagbok</p>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Registrera måltider med kolhydrater, blodsocker, insulin, aktivitetsnivå och foton
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-secondary mb-1 text-xs md:text-base">Statistik</p>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Visualisering av data med grafer och genomsnittsvärden
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-accent mb-1 text-xs md:text-base">Kamera</p>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Professionell kameraintegration för att dokumentera måltider
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary mb-1 text-xs md:text-base">Autentisering</p>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Säker användarhantering med e-postverifiering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3 text-xs md:text-sm">TEKNOLOGIER</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'].map((tech) => (
                  <div
                    key={tech}
                    className="bg-secondary border-2 border-secondary px-2 py-1 md:px-3 md:py-2 text-center pixel-corners"
                  >
                    <p className="text-secondary-foreground text-xs md:text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3 text-xs md:text-sm">HÖJDPUNKTER</h3>
              <div className="space-y-2">
                {[
                  'Supabase och PostgresSQL baserad',
                  'Deep linking för e-postverifiering',
                  'Custom hooks för databas, kamera, kalender och statistik',
                  'Automatisk session-hantering med token refresh',
                  'System med konsistent spacing och färgschema',
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-xs md:text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-accent mb-3 text-xs md:text-sm">SKÄRMDUMPAR</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                <img
                  src={screenshot3}
                  alt="emmiSense screenshot 3"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot4}
                  alt="emmiSense screenshot 4"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot5}
                  alt="emmiSense screenshot 5"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot6}
                  alt="emmiSense screenshot 6"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot7}
                  alt="emmiSense screenshot 7"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot8}
                  alt="emmiSense screenshot 8"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot9}
                  alt="emmiSense screenshot 9"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
                 <img
                  src={screenshot10}
                  alt="emmiSense screenshot 10"
                  className="border-4 border-foreground pixel-corners w-full h-auto"
                  style={{ boxShadow: '6px 6px 0 rgba(0, 255, 65, 0.3)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </PixelCard>
    </div>
  );
}
