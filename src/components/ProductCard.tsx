interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  isBestseller?: boolean;
}

export const ProductCard = ({ image, name, price, description, ingredients, isBestseller }: ProductCardProps) => {
  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 transition-all hover:shadow-lg">
      {isBestseller && (
        <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
          Bestseller
        </span>
      )}
      <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-2xl font-serif text-foreground mb-3">{price}</p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="pt-4 border-t border-border">
        <p className="text-xs font-medium text-foreground mb-2">Active Ingredients:</p>
        <p className="text-xs text-muted-foreground">{ingredients.join(', ')}</p>
      </div>
    </article>
  );
};
