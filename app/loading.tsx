"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#0b0b0b_70%)]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="p-12 md:p-16 rounded-2xl backdrop-blur-sm bg-white/5 shadow-[0_0_60px_rgba(255,255,255,0.08)] border border-white/5"
            >
                <div className="relative">
                    <Image
                        src="/images/Logo.jpeg"
                        alt="SP Trading"
                        width={220}
                        height={220}
                        priority
                        className="w-40 md:w-52 h-auto object-contain"
                    />
                </div>
            </motion.div>
        </div>
    );
}
