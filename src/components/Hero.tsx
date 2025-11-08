
import { PixelCard } from './PixelCard';
import { Terminal, User, GraduationCap, Briefcase } from 'lucide-react';

export function Hero() {
  return (
    <div className="space-y-8 scanline">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Terminal className="w-12 h-12 text-primary animate-pulse" />
          <h1 className="text-primary">ALBERT NIKLASSON</h1>
          <Terminal className="w-12 h-12 text-primary animate-pulse" />
        </div>
        <p className="text-accent">{'> FULL STACK DEVELOPER <'}</p>
      </div>

      {/* About Section */}
      <PixelCard glitch>
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-accent" />
            <h2 className="text-accent">OM MIG</h2>
          </div>
          <p className="leading-relaxed">
            Jag är en passionerad utvecklare som älskar att skapa innovativa lösningar.
            Med fokus på moderna webbteknologier bygger jag användarvänliga och 
            skalbara applikationer.
          </p>
          <p className="leading-relaxed">
            Min passion för kodning började tidigt och har sedan dess utvecklats till
            en karriär där jag får kombinera kreativitet med teknisk problemlösning.
          </p>
        </div>
      </PixelCard>

      {/* Experience Section */}
      <PixelCard>
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-secondary" />
            <h2 className="text-secondary">ERFARENHET</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-primary mb-2">Praktik - Mobil Apputveckling</h3>
              <p className="text-muted-foreground mb-1">Arbetslivserfarenhet | 2024 - 2025</p>
              <p className="leading-relaxed">
                Utvecklade emmiSense, en tvärplattform mobilapplikation för både iOS och Android.
                Arbetade med Swift, SwiftUI, Kotlin och Jetpack Compose för att skapa
                en användarvänlig och funktionell lösning.
              </p>
            </div>
          </div>
        </div>
      </PixelCard>

      {/* Education Section */}
      <PixelCard>
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h2 className="text-accent">UTBILDNING</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-primary mb-2">Android and iOS developer</h3>
              <p className="text-muted-foreground mb-1">Malmö Yrkeshögskola | 2025</p>
              <p className="leading-relaxed">
                Specialisering inom mobil apputveckling för både Android och iOS plattformar.
              </p>
            </div>
          </div>
        </div>
      </PixelCard>

      {/* Skills */}
      <PixelCard glitch>
        <div className="space-y-4">
          <h2 className="text-primary mb-4">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'React Native', 'TypeScript', 'Python', 'PostgreSQL', 'Figma', 'Git'].map((skill) => (
              <div
                key={skill}
                className="bg-muted border-2 border-foreground px-3 py-2 text-center pixel-corners"
                style={{ boxShadow: '4px 4px 0 rgba(0, 255, 65, 0.2)' }}
              >
                <p className="text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </PixelCard>
    </div>
  );
}
