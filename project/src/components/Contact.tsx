import React from 'react';
import {
  Mail,
  Linkedin,
  Phone,
  Github,
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="mailto:oshankar465@gmail.com"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">oshankar465@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/o-shankar-naidu-558155283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-600">O Shankar Naidu</p>
              </div>
            </a>

            <a
              href="tel:+918310101189"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 8310101189</p>
              </div>
            </a>

            <a
              href="https://github.com/shankar4650"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-600">shankar4650</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;