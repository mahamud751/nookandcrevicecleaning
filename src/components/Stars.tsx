import { StarIcon } from "@/components/Icons";

export function Stars({ label = "5 out of 5" }: { label?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-gold" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="h-4 w-4" />
      ))}
    </span>
  );
}
