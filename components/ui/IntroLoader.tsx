'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/images/farming_1.jpeg',          // Green (Farming)
    '/images/Water_chesnut_red_1.jpeg', // Red (Harvest)
    '/images/ripe_Water_chesnut.jpeg',  // Black (Raw)
    '/images/WaterChesnut_flaur_3.jpeg' // White (Flour)
];

export const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Preload images
        images.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });

        // Sequence timer
        // Total duration approx 3.5s
        // 4 images -> ~0.8s each
        // Last image holds a bit longer

        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev < images.length - 1) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, 800);

        const completeTimer = setTimeout(() => {
            setIsLoaded(true);
            setTimeout(onComplete, 1000); // Wait for fade out
        }, 3500);

        return () => {
            clearInterval(interval);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    {/* Background Image Slideshow */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="absolute inset-0 z-0"
                        >
                            <Image
                                src={images[currentImage]}
                                alt="Cinematic Intro"
                                fill
                                className="object-cover opacity-60"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col items-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mb-8"
                        >
                            <Image
                                src="/images/Logo.jpeg"
                                alt="SP Trading Logo"
                                width={220}
                                height={220}
                                className="w-40 md:w-52 h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <h2 className="text-white text-base md:text-lg tracking-[0.3em] font-light mb-2">
                                PURE WATER CHESTNUT FLOUR
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100px' }}
                                transition={{ duration: 1.5, delay: 1.8 }}
                                className="h-0.5 bg-white/50 mx-auto"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
