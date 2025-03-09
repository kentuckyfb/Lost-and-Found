// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import SearchResults from "../components/SearchResults";

export default function Home() {
  const [fileTypeFilter, setFileTypeFilter] = useState<"file" | "folder" | "both">("both");
  const [dateFilter, setDateFilter] = useState("");

  const handleFilterChange = (filter: "file" | "folder" | "both") => {
    setFileTypeFilter(filter);
  };

  const handleDateChange = (date: string) => {
    setDateFilter(date);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl space-y-8"
      >
        <h1 className="text-2xl font-bold text-center font-mono">
        Your files may hide, but they can’t run!
        </h1>
        <SearchBar />
        <Filters
          onFilterChange={handleFilterChange}
          onDateChange={handleDateChange}
        />
        <SearchResults fileTypeFilter={fileTypeFilter} dateFilter={dateFilter} />
      </motion.div>
    </div>
  );
};