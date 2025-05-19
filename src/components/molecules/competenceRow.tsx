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
    <div className="grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-8 py-2 border-b last:border-b-0 text-center text-sm sm:text-base">
      <span className="flex justify-center items-center py-1">{event}</span>
      <span className="flex justify-center items-center py-1">{category}</span>
      <span className="flex justify-center items-center py-1">{result}</span>
    </div>
  );
}

