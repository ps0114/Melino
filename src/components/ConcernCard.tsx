interface ConcernCardProps {
  concern: string;
  solution: string;
}

export const ConcernCard = ({ concern, solution }: ConcernCardProps) => {
  return (
    <article className="bg-secondary/50 border border-border rounded-lg p-5 transition-all hover:bg-secondary hover:shadow-md">
      <h3 className="text-base font-semibold mb-2">{concern}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
    </article>
  );
};
