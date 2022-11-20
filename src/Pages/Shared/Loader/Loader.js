import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center mt-20">
      <progress className="progress w-56 text-center items-center mx-auto"></progress>
    </div>
  );
};

export default Loader;
