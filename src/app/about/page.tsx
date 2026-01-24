import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Studio Noir',
  description: 'Learn about the vision and the talented team behind Studio Noir.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          About Studio Noir
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Crafting stories that captivate, inspire, and endure.
        </p>
      </header>

      <section id="vision" className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/seed/about-vision/800/600"
              alt="Studio collaborative environment"
              fill
              className="object-cover"
              data-ai-hint="creative workspace"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Studio Noir, we believe in the power of visual storytelling. Our mission is to transform ideas into unforgettable visual experiences. We are a collective of passionate artists, designers, and strategists dedicated to pushing the boundaries of creativity and delivering excellence in every project. We strive to build lasting partnerships with our clients, understanding their goals to create work that is not only beautiful but also meaningful and effective.
            </p>
          </div>
        </div>
      </section>

      <section id="team">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
