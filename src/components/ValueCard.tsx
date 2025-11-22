import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <article className="text-center space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
        <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{description}</p>
    </article>
  );
};
