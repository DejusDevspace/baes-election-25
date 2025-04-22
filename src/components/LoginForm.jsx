import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    matricNumber: "",
    pin: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData({
      matricNumber: "",
      pin: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormData();
    // console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-[100vh] w-[100vw] overflow-hidden">
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-4 py-12 xl:py-24 px-4">
        <form
          className="w-full max-w-2xl mt-12 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-[0_0_20px_5px_var(--color-neonBlue)] flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 text-center pb-4">
            <h1 className="text-accent text-3xl">Log In</h1>
            <p className="text-md text-primary/50">
              Enter the details you filled in the registration form
            </p>
          </div>
          <div>
            <input
              name="matricNumber"
              type="text"
              placeholder="Matric No."
              className="w-full px-4 py-3 bg-black/30 text-white border border-white/20 rounded-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.matricNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              name="pin"
              type="password"
              placeholder="4-digit Pin"
              className="w-full px-4 py-3 bg-black/30 text-white border border-white/20 rounded-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
              value={formData.pin}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="self-start px-6 py-3 mt-4 w-full text-white bg-accent font-bold rounded-lg  hover:scale-105 transition-all duration-300"
          >
            Let Me In!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
