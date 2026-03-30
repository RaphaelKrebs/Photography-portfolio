'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open mailto link
    window.location.href = `mailto:hello@raphaelkrebs.com?subject=${subject}&body=${body}`
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      })
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="w-full px-16 sm:px-24 md:px-32 lg:px-48 xl:px-64 2xl:px-80">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h1 className="text-2xl font-light tracking-wide text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-sm font-light text-foreground/80 leading-relaxed">
                For inquiries about prints, exhibitions, or collaborations,
                feel free to reach out.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-light text-foreground/80">
                  First Name
                </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-foreground/30 rounded px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-light text-foreground/80">
                  Last Name
                </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-foreground/30 rounded px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-light text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-foreground/30 rounded px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-light text-foreground/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border border-foreground/30 rounded px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-light text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-transparent border border-foreground/30 rounded px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground/60 transition-colors resize-none placeholder:text-foreground/40"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-foreground text-background px-8 py-3 rounded text-sm font-light tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded px-6 py-4 text-center">
                  <p className="text-sm font-light text-green-500">
                    ✓ Message sent successfully! Your email client should open shortly.
                  </p>
                </div>
              )}
            </form>

            <div className="flex flex-col gap-4 text-center text-sm font-light text-foreground/70">
              <p>Or reach out directly:</p>
              <a
                href="mailto:hello@raphaelkrebs.com"
                className="text-foreground hover:opacity-70 transition-opacity tracking-wide"
              >
                hello@raphaelkrebs.com
              </a>
              <a
                href="https://instagram.com/raphaelkre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors tracking-wide"
              >
                @raphaelkrebs
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
