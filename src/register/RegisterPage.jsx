// RegisterPage.jsx
import React from "react";
import { RegisterForm } from "./RegisterForm";
import { Loader } from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import toast from "react-hot-toast";

export function RegisterPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      fetchWrapper("auth/register", { method: "POST", body: data }),
  });
  const navigate = useNavigate();

  const handleRegisterSubmit = async (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        const profileExists = error?.message.includes("Profile already exists");
        toast.error(
          `Registration failed. ${
            profileExists ? "Profile already exists" : "Please try again"
          }`
        );
      },
    });
  };

  return (
    <div>
      <RegisterForm onSubmit={handleRegisterSubmit} />
      {isPending && <Loader />}
    </div>
  );
}
