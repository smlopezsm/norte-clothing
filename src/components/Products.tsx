const Products = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-6">
      {Array.from({ length: 50 }).map((_, index) => (
        <p key={index} className="border-2 border-gray-400 p-24">
          A product'll be listed here
        </p>
      ))}
    </div>
  );
};
export default Products;
