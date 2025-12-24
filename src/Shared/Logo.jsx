import { motion } from "framer-motion";
import logo from "../assets/ecoTrac-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <motion.img
        src={logo}
        alt="logo"
        className="h-8 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />

      <motion.h1
        className="text-2xl font-bold ms-1 bg-gradient-to-r from-[#1E4A8A] to-[#FF6B35] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        eco<span className="text-green-500">Trac</span>
      </motion.h1>
    </div>
  );
};

export default Logo;
