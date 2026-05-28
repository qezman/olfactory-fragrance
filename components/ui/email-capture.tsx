"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="text-center py-4 animate-fade-up">
        <p className="type-body text-ink">
          Thank you. You are now on the list.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex border-b border-border-strong focus-within:border-gold transition-colors duration-250">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 bg-transparent py-3 px-2 outline-none type-body placeholder:text-ink-tertiary"
          required
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="type-sub text-ink hover:text-gold px-4 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "WAIT" : "SUBSCRIBE"}
        </button>
      </div>
    </form>
  );
}
