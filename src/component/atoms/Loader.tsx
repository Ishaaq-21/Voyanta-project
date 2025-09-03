import React from "react";

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full h-full flex-center">
      <div className="w-20 h-20 md:w-52 md:h-52 border-4 border-transparent text-gray-500 text-4xl animate-spin flex items-center justify-center border-t-gray-500 rounded-full">
        <div className="w-16 h-16 md:w-44 md:h-44 border-4 border-transparent text-primary text-2xl animate-spin flex-center border-t-amber-500 rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
