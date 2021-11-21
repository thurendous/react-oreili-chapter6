import Star from "./Star";

export default function StarRating({
  totalStars = 6,
  selectedStars = 1,
  onRate = (f) => f,
}) {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
