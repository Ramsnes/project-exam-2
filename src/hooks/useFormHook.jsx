// useFormHook.jsx
import React from "react";
import RegisterForm from "../register/Register";

export function useFormHook() {
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}
