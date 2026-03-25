import { Link } from "react-router";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  HelpCircle,
  FileText,
} from "lucide-react";

export function CustomerHelp() {
  const faqs = [
    {
      question: "How do I cancel my service?",
      answer:
        "You can cancel up to 24 hours before your appointment for a full refund. Go to your order and tap 'Cancel Order'.",
    },
    {
      question: "What if I'm not home during the visit?",
      answer:
        "Please ensure someone is home during your scheduled time window. If you need to reschedule, contact us at least 24 hours in advance.",
    },
    {
      question: "How long does alteration take?",
      answer:
        "Most alterations are completed within 3-5 business days. You'll receive updates throughout the process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards. A 50% deposit is required at booking, with the remainder due upon completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Help Center</h1>
          <p className="text-gray-600">We're here to help you</p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+12145550123"
            className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-2 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Call Us</span>
          </a>

          <a
            href="https://wa.me/12145550123"
            className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-2 hover:border-green-300 hover:bg-green-50 transition-all"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">WhatsApp</span>
          </a>

          <a
            href="mailto:support@stitchhome.com"
            className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-2 hover:border-purple-300 hover:bg-purple-50 transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Email</span>
          </a>

          <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">FAQ</span>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Cancellation Policy
          </h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Full Refund:</strong> Cancel up to 24 hours before your
              scheduled appointment.
            </p>
            <p>
              <strong>50% Refund:</strong> Cancel within 24 hours but before
              tailor arrival.
            </p>
            <p>
              <strong>No Refund:</strong> Cancellation after tailor has arrived
              or items collected.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 pb-4 last:border-0 last:pb-0"
              >
                <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
          <h3 className="font-semibold text-indigo-900 mb-2">
            Customer Support Hours
          </h3>
          <p className="text-sm text-indigo-700">
            Monday - Friday: 9:00 AM - 7:00 PM
            <br />
            Saturday: 10:00 AM - 5:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
