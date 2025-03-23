import { motion } from "framer-motion";

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="p-6 bg-gray-100 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <motion.a
          href={`tel:${phoneNumber}`}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors relative inline-block"
          initial={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.7)",
              "0 0 10px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{
            rotate: [0, 3, -3, 3, 0], // Vibration effect
            scale: 1.1,
            transition: { repeat: Infinity, duration: 0.2 },
          }}
        >
          📞 Call Now: {phoneNumber}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PhoneCallButton;
