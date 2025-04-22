import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <div className="min-h-screen flex flex-col lg:flex-row gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
          <h1 className="text-6xl lg:text-8xl">
            BAES <br /> Executive Election
          </h1>
          <p>Choose your next senate representatives.</p>
          <button className="bg-accent w-fit p-2 rounded-lg">Log In</button>
        </div>
        <div className="w-full min-h-[550px] lg:w-[550px] lg:min-h-[650px] bg-accent">
          Images
        </div>
      </div>
    </div>
  );
};

export default HomePage;
