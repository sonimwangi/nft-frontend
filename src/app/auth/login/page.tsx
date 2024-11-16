"use client"
import { LoginForm } from "@/components/login-form"
import React from "react"

const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  )
}
export default Login;
