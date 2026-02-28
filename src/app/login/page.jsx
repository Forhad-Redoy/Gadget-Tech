import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <LoginForm isModal={false} />
    </div>
  );
};

export default LoginPage;
