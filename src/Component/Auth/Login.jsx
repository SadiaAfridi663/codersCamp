import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthLogic";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(form.email, form.password);
      navigate("/"); // redirect to home/dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Welcome Back!" subtitle="Login to your BitCoderLabs account">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <p className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
            {error}
          </p>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
