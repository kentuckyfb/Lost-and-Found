// src/components/SearchBar.tsx
"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react"; // Use an icon library

export default function SearchBar() {
  return (
    <div className="flex items-center gap-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full flex items-center gap-2 p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg glow"
      >
        <MagnifyingGlass size={20} className="text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="What can I help you find?"
          className="w-full bg-transparent focus:outline-none"
        />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg glow"
      >
        <MagnifyingGlass size={20} className="text-gray-500 dark:text-gray-400" />
      </motion.button>
    </div>
  );
}