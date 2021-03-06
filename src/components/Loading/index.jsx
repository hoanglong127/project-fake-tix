import React from "react";

const Loading = () => {
  return (
    <div className="fixed z-50 top-0 left-0 bottom-0 right-0 bg-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
