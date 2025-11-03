import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useAuth } from "./AuthLogic";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required!");
      return false;
    }

    // Password must include upper, lower, number and 8 chars
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!strongPassword.test(form.password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, and a number."
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      register(form.email, form.password, form.name);
      alert("Registration successful! Please login now.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout
      title="Create your Account"
      subtitle="Join BitCoderLabs and start learning today."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && (
          <p className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
            {error}
          </p>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
          />
        </div>

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
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
}
