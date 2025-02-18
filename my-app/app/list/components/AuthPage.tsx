"use client";

import { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);

    const response = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.status === 200) {
      sessionStorage.setItem("isAuthenticated", "true");
      window.location.reload();
    }
  };
  return (
    <form action="/auth" method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="mr-[12px]">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
      </div>
      <div>
        <label htmlFor="password" className="mr-[12px]">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            handleChangePassword(e);
          }}
        />
      </div>
      <button className="bg-black cursor-pointer text-white">Login</button>
    </form>
  );
};

export default AuthPage;
