import React from "react";

const HOURS = [
  { day: "Monday", time: "10:00 AM - 7:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 7:00 PM" },
  { day: "Thursday", time: "10:00 AM - 8:00 PM" },
  { day: "Friday", time: "10:00 AM - 8:00 PM" },
  { day: "Saturday", time: "10:00 AM - 7:00 PM" },
  { day: "Sunday", time: "10:00 AM - 6:00 PM" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 dark:bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-400">
            We&apos;d love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card p-12 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Address</h4>
                  <a
                    href="https://www.google.com/maps/place/Sassy+Nails+Spa+and+Hair/@49.2815403,-123.133234,17z/data=!3m1!4b1!4m6!3m5!1s0x5486722b7ba5cb6b:0x72f73e8d532b32ea!8m2!3d49.2815403!4d-123.133234!16s%2Fg%2F1td1pkrl?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-gray-400 hover:text-primary transition-colors"
                  >
                    1196 Davie St, Vancouver, BC V6E 1N1
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a
                    href="tel:+17789696688"
                    className="mt-1 text-gray-400 hover:text-primary transition-colors"
                  >
                    (778) 969-6688
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:info@glossenails.ca"
                    className="mt-1 text-gray-400 hover:text-primary transition-colors"
                  >
                    info@glossenails.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4 max-w-2xl w-full">
                  <h4 className="text-lg font-medium">Opening Hours</h4>
                  {HOURS.map((hour) => (
                    <p
                      key={hour.day}
                      className="flex justify-between mt-1 text-gray-400"
                    >
                      <span>{hour.day}</span>
                      <span>{hour.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
