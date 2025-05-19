interface CompetenceRowProps {
  event: string;
  category: string;
  result: string;
}

export default function CompetenceRow({
  event,
  category,
  result,
}: CompetenceRowProps) {
  return (
    <div className="grid grid-cols-3 px-8 py-2 border-b last:border-b-0 text-base text-center">
      <span className="flex justify-center items-center">{event}</span>
      <span className="flex justify-center items-center">{category}</span>
      <span className="flex justify-center items-center">{result}</span>
    </div>
  );
}
