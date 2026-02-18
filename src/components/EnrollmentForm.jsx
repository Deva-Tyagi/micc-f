import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const EnrollmentForm = ({ isOpen, onClose, courseName }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Basic validation
    if (!formData.name || !formData.mobile) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const templateParams = {
        to_name: "Admin", // Or whoever receives the email
        from_name: formData.name,
        from_email: formData.email,
        from_mobile: formData.mobile,
        course_name: courseName,
        message: `New enrollment request for ${courseName}`,
      };

      // NOTE: Uncomment this to actually send emails once you have the IDs
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Simulating success for now
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast.success("Enrollment request sent successfully!");

      // Reset form after a delay and close
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", mobile: "", email: "" });
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Enrollment failed:", err);
      setError("Failed to submit. Please try again later.");
      toast.error("Failed to submit enrollment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-1">
                  Enroll Now
                </h2>
                <p className="text-blue-100 text-sm">{courseName}</p>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We'll contact you shortly to confirm your enrollment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          Processing...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentForm;
