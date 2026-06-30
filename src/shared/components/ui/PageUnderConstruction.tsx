const PageUnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 gap-6">
      <img
        src="/images/webpage-under-construction.webp"
        alt="Page under construction"
        className="w-full max-w-md object-contain"
      />
      <h2 className="text-2xl font-bold text-white">This page is under construction.</h2>
      <p className="text-gray-400 text-center max-w-sm">
        This section will be available soon.
      </p>
    </div>
  );
};

export default PageUnderConstruction;
