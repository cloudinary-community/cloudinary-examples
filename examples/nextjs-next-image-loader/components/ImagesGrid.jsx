export default function ImagesGrid({ children }) {
  return (
    <ul className="grid list-none grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}
