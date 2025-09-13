import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import Confetti from "react-confetti";

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSurprise(true);
      setShowConfetti(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center font-[Inter] text-center">
      {showConfetti && <Confetti recycle={false} numberOfPieces={800} />}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-7xl font-[Playfair Display] mb-6"
      >
        ✨ Celebrating 2 Magical Years ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="text-lg md:text-2xl mb-8"
      >
        A journey filled with love, laughter, and unforgettable memories 💕
      </motion.p>

      <motion.img
        src="https://source.unsplash.com/800x500/?couple,love"
        alt="Memories"
        className="rounded-2xl shadow-xl mb-6 max-w-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      <div className="mb-6">
        <ReactPlayer
          url="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          width="100%"
          height="360px"
        />
      </div>

      <button
        onClick={() => setShowSurprise(true)}
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        🎁 Surprise her
      </button>

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-lg text-center shadow-2xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h2 className="text-3xl font-[Playfair Display] mb-4">
                🌹 My Love, My Forever 🌹
              </h2>
              <p className="text-lg mb-6">
                These 2 years are just the beginning of our beautiful story. 💖
                You are my happiness, my dream, and my everything.
              </p>
              <button
                onClick={() => setShowSurprise(false)}
                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform"
              >
                Close ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
