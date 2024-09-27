// LoginPage.jsx
import React from "react";
import { LoginForm } from "./LoginForm";
import { Loader } from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthenticationProvider";
import { fetchWrapper } from "../fetch-wrapper";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useLogin = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper("auth/login?_holidaze=true", {
        method: "POST",
        body: data,
      }),
  });
};

export function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { mutate, isPending } = useLogin();

  const handleLoginSubmit = async (data) => {
    mutate(data, {
      onSuccess: (data) => {
        setUser(data.data);
        toast.success("Login successfull!");
        navigate("/");
      },
      onError: () => {
        alert("Invalid email or password");
      },
    });
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
      {isPending && <Loader />}
    </div>
  );
}
