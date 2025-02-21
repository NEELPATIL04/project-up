'use client';
import { motion } from 'framer-motion';
import { services } from './servicesData';

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-lg bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold">{service.title}</h3>
              <p className="text-center text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}