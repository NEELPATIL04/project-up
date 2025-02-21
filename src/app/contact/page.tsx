'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 text-white min-h-screen">
      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-center text-gray-400">
          Reach out for business inquiries or collaborations.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}