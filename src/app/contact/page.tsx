import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Studio Noir',
  description: 'Get in touch with Studio Noir for collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have a project in mind or just want to say hello? We’d love to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:aryanshekharvats01@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  aryanshekharvats01@gmail.com
                </a>
                <p className="text-sm text-muted-foreground/80">For all inquiries</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">8766233436</p>
                <p className="text-sm text-muted-foreground/80">Mon-Fri, 9am-5pm</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-headline mb-8">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
