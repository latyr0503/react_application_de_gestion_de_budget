import React from "react";

const NoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-10xl font-bold text-purple-800 flex flex-col text-center">
        <span>404</span>
        <span className="text-3xl">Page Not Found</span>
      </h1>
    </div>
  );
};

export default NoPage;
