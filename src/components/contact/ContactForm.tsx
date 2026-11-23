'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}

Name: ${name}
Email: ${email}`);
    const mailto = `mailto:rajmaninadar2000@gmail.com?subject=${subject}&body=${body}`;

    setStatus('Your message has not been sent yet. Send the prepared draft from your email app to complete your inquiry.');
    window.location.href = mailto;
  };

  return (
    <form
      className="min-w-0 rounded-[1.5rem] border border-border/15 bg-background/70 p-5 shadow-card sm:p-6"
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
    >
      <div className="mb-6">
        <h3 id="contact-form-heading" className="text-xl font-semibold text-foreground">Tell me about your project</h3>
        <p id="contact-form-help" className="mt-2 text-sm leading-6 text-foreground/60">
          All fields are required. Submitting opens an email draft; the message is sent only after you send it from your email app.
        </p>
        <p className="mt-3 text-xs text-foreground/50"><span className="text-[#D4AF37]">*</span> Required</p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="contact-name" className="grid min-w-0 gap-2 text-sm font-medium text-foreground/80">
            <span>Name <span aria-hidden="true" className="text-[#D4AF37]">*</span><span className="sr-only"> required</span></span>
            <input
              required
              name="name"
              id="contact-name"
              autoComplete="name"
              aria-describedby="contact-form-help"
              className="min-h-12 w-full rounded-xl border border-border/15 bg-foreground/5 px-3.5 py-3 text-foreground placeholder:text-foreground/40 focus-visible:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20"
              placeholder="Your name"
            />
          </label>
          <label htmlFor="contact-email" className="grid min-w-0 gap-2 text-sm font-medium text-foreground/80">
            <span>Email <span aria-hidden="true" className="text-[#D4AF37]">*</span><span className="sr-only"> required</span></span>
            <input
              required
              type="email"
              name="email"
              id="contact-email"
              autoComplete="email"
              aria-describedby="contact-form-help"
              className="min-h-12 w-full rounded-xl border border-border/15 bg-foreground/5 px-3.5 py-3 text-foreground placeholder:text-foreground/40 focus-visible:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label htmlFor="contact-message" className="grid gap-2 text-sm font-medium text-foreground/80">
          <span>How can I help? <span aria-hidden="true" className="text-[#D4AF37]">*</span><span className="sr-only"> required</span></span>
          <textarea
            required
            name="message"
            id="contact-message"
            rows={5}
            aria-describedby="contact-form-help"
            className="min-h-32 w-full resize-y rounded-xl border border-border/15 bg-foreground/5 px-3.5 py-3 text-foreground placeholder:text-foreground/40 focus-visible:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20"
            placeholder="Share your goals, timeline, or any useful context."
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111] transition-colors hover:bg-[#e6c55c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
        >
          Create email draft
        </button>
        <p className="min-h-5 text-xs leading-5 text-foreground/60" role="status" aria-live="polite" aria-atomic="true">
          {status}
        </p>
      </div>
    </form>
  );
}
