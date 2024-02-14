import React from "react";

const LoginPass = () => {
  const handleLoginClick = () => {
    // Login sayfasına yönlendirme işlemi
    window.location.href = "/login";
  };

  const handleRegisterClick = () => {
    // Register sayfasına yönlendirme işlemi
    window.location.href = "/register";
  };

  return (
    <div className="absolute m-2 flex right-0">
      <a
        href="#"
        onClick={handleLoginClick}
        className="text-xl text-white mx-2 p-2 border-b-2"
      >
        Login
      </a>
      <a
        href="#"
        onClick={handleRegisterClick}
        className="text-xl text-white mx-2 p-2 border-b-2"
      >
        Register
      </a>
    </div>
  );
};

export default LoginPass;
