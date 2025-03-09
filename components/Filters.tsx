// src/components/Filters.tsx
"use client";

import { motion } from "framer-motion";
import { File, Folder, Calendar } from "@phosphor-icons/react";
import { useState } from "react";

interface FiltersProps {
  onFilterChange: (filter: "file" | "folder" | "both") => void;
  onDateChange: (date: string) => void;
}

export default function Filters({ onFilterChange, onDateChange }: FiltersProps) {
  const [fileType, setFileType] = useState<"file" | "folder" | "both">("both");
  const [dateModified, setDateModified] = useState("");

  const handleFileTypeChange = (type: "file" | "folder" | "both") => {
    setFileType(type);
    onFilterChange(type); // Notify parent of filter change
  };

  const handleDateChange = (date: string) => {
    setDateModified(date);
    onDateChange(date); // Notify parent of date change
  };

  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleFileTypeChange("file")}
        className={`p-3 bg-white dark:bg-gray-800 border ${
          fileType === "file" ? "border-cyan-500" : "border-gray-300 dark:border-gray-700"
        } rounded-lg glow`}
      >
        <File size={20} className="text-gray-500 dark:text-gray-400" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleFileTypeChange("folder")}
        className={`p-3 bg-white dark:bg-gray-800 border ${
          fileType === "folder" ? "border-cyan-500" : "border-gray-300 dark:border-gray-700"
        } rounded-lg glow`}
      >
        <Folder size={20} className="text-gray-500 dark:text-gray-400" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleFileTypeChange("both")}
        className={`p-3 bg-white dark:bg-gray-800 border ${
          fileType === "both" ? "border-cyan-500" : "border-gray-300 dark:border-gray-700"
        } rounded-lg glow`}
      >
        <File size={20} className="text-gray-500 dark:text-gray-400" />
        <Folder size={20} className="text-gray-500 dark:text-gray-400" />
      </motion.button>
      <input
        type="date"
        value={dateModified}
        onChange={(e) => handleDateChange(e.target.value)}
        className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none glow"
      />
    </div>
  );
}