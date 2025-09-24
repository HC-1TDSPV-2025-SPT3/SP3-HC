type CardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export function Card({ image, alt, title, description }: CardProps) {
  return (
    <div className="flex-1 min-w-[280px] max-w-[350px] bg-gray-100 rounded-xl p-5 shadow-md hover:-translate-y-1 transition-transform">
      <img
        src={image}
        alt={alt}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
