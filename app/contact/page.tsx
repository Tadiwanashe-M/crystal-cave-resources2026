import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
      />

      <Section className="bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/Images/image1.jpg"
                  alt="Contact Us"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
                Get in Touch
              </h2>
              <p className="text-accent-muted text-lg mb-8 leading-relaxed">
                We're here to help with all your mining solutions needs. Whether you're looking 
                for services, have questions, or want to discuss a project, our team is ready to assist.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Email</h3>
                  <p className="text-accent-muted">info@crystalcaveresources.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Phone</h3>
                  <p className="text-accent-muted">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Address</h3>
                  <p className="text-accent-muted">
                    Mining District<br />
                    Industrial Zone<br />
                    City, State 12345
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Business Hours</h3>
                  <p className="text-accent-muted">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-dark-card p-8 rounded-lg border border-dark-card">
                <h2 className="text-2xl font-bold text-accent mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-accent font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-card rounded text-accent placeholder-accent-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-accent font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-card rounded text-accent placeholder-accent-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-accent font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-card rounded text-accent placeholder-accent-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-accent font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-card rounded text-accent placeholder-accent-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-accent font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-card rounded text-accent placeholder-accent-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-accent text-dark-bg font-semibold rounded hover:bg-accent-muted transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
