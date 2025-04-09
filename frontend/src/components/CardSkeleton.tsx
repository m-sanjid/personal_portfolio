const CardSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="overflow-hidden h-full flex flex-col">
          <div className="p-4 flex-grow">
            <div className="h-6 bg-muted rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-5/6 mb-4 animate-pulse"></div>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="h-6 bg-muted rounded w-16 animate-pulse"></div>
              <div className="h-6 bg-muted rounded w-20 animate-pulse"></div>
            </div>
          </div>
          <div className="p-4 pt-0 flex gap-2">
            <div className="h-9 bg-muted rounded w-20 animate-pulse"></div>
            <div className="h-9 bg-muted rounded w-20 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
