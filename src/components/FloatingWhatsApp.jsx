import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../data";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 1,
        type: "spring",
        stiffness: 200,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-xl md:block"
      >
        Chat with us 💬
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-green-500 blur-xl opacity-40" />

      {/* Floating Button */}
      <motion.a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        whileHover={{
          scale: 1.12,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.92,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 2.8,
            ease: "easeInOut",
          },
        }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-[0_15px_35px_rgba(34,197,94,0.45)] backdrop-blur-xl"
      >
        {/* Ripple */}
        <span className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-30" />

        {/* Icon */}
        <MessageCircle
          size={30}
          strokeWidth={2.3}
          className="relative z-10 text-white"
        />
      </motion.a>
    </motion.div>
  );
  
}
