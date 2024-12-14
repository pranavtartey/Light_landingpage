"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat : Infinity,
              ease : 'linear',
              repeatType : "loop"
            }}
          >
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acmeLogo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum"
            />
            <Image className="logo-ticker-image" src={echoLogo} alt="echo" />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="clecestial"
            />
            <Image className="logo-ticker-image" src={pulseLogo} alt="pulse" />
            <Image className="logo-ticker-image" src={apexLogo} alt="apex" />
            {/* Second set of loops for the animations*/}
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acmeLogo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum"
            />
            <Image className="logo-ticker-image" src={echoLogo} alt="echo" />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="clecestial"
            />
            <Image className="logo-ticker-image" src={pulseLogo} alt="pulse" />
            <Image className="logo-ticker-image" src={apexLogo} alt="apex" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
