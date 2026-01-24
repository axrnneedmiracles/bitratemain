import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, teamMembers } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Metadata } from 'next';
import type { Project } from '@/lib/types';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Studio Noir`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug:string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectTeam = teamMembers.filter((member) =>
    project.teamIds.includes(member.id)
  );
  
  const allImages = [project.coverImage, ...project.images];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Badge variant="outline" className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            {project.title}
          </h1>
        </header>

        <div className="mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.url}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {allImages.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4"/>
                    <CarouselNext className="right-4"/>
                  </>
              )}
            </Carousel>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold font-headline mb-4">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Project Team</h2>
                <div className="space-y-4">
                    {projectTeam.map(member => (
                        <div key={member.id} className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{member.name}</p>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
