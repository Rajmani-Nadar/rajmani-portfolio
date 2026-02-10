'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}

Name: ${data.get('name')}
Email: ${data.get('email')}`);
    const mailto = `mailto:rajmaninadar2000@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setStatus('Launching your mail app…');
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <form className="section-shell p-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-muted">Name</span>
            <input
              required
              name="name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-accent outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-muted">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-accent outline-none"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm">
          <span className="text-muted">How can I help?</span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-accent outline-none"
            placeholder="Project goals, timeline, and context"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-background shadow-card transition hover:-translate-y-0.5"
        >
          Send email
        </button>
        {status && <p className="text-xs text-accent">{status}</p>}
      </form>

      <div className="section-shell p-6 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Reach me</p>
          <h3 className="text-xl font-semibold text-white">Contact details</h3>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p>Email: <a className="text-accent hover:text-accent2" href="mailto:rajmaninadar2000@gmail.com">rajmaninadar2000@gmail.com</a></p>
          <p>GitHub: <a className="text-accent hover:text-accent2" href="https://github.com/Rajmani-Nadar" target="_blank" rel="noreferrer">github.com/Rajmani-Nadar</a></p>
          <p>LinkedIn: <a className="text-accent hover:text-accent2" href="https://linkedin.com/in/rajmani-v-5a550b233" target="_blank" rel="noreferrer">linkedin.com/in/rajmani-v-5a550b233</a></p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-muted">
          Prefer async communication. Share context, timeline, and decision-makers—I'll reply with a plan and estimate.
        </div>
      </div>
    </div>
  );
}
