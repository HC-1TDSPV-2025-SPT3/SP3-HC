type CardIntegranteProps = {
  image: string;
  alt: string;
  name: string;
  rm: string;
  turma: string;
};

export function CardIntegrante({ image, alt, name, rm, turma }: CardIntegranteProps) {
  return (
    <div className="bg-white rounded-xl shadow-md w-64 p-6 text-center">
      <img
        src={image}
        alt={alt}
        className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-blue-600 mx-auto"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">
        <strong>RM:</strong> {rm}
      </p>
      <p className="text-gray-700">
        <strong>Turma:</strong> {turma}
      </p>
    </div>
  );
}
