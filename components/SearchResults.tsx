// src/components/SearchResults.tsx
"use client";

import { motion } from "framer-motion";
import { File, Folder } from "@phosphor-icons/react";

interface SearchResult {
  name: string;
  path: string;
  type: "file" | "folder";
  size: string;
  modified: string;
}

interface SearchResultsProps {
  fileTypeFilter: "file" | "folder" | "both";
  dateFilter: string;
}

const dummyData: SearchResult[] = [
  {
    name: "file1.txt",
    path: "/documents/file1.txt",
    type: "file",
    size: "128 KB",
    modified: "2023-10-01",
  },
  {
    name: "folder1",
    path: "/documents/folder1",
    type: "folder",
    size: "2 MB",
    modified: "2023-09-28",
  },
  {
    name: "image.png",
    path: "/pictures/image.png",
    type: "file",
    size: "1.2 MB",
    modified: "2023-09-25",
  },
];

export default function SearchResults({ fileTypeFilter, dateFilter }: SearchResultsProps) {
  const filteredResults = dummyData.filter((result) => {
    // Filter by file type
    if (fileTypeFilter !== "both" && result.type !== fileTypeFilter) return false;

    // Filter by date
    if (dateFilter && result.modified !== dateFilter) return false;

    return true;
  });

  return (
    <div className="mt-8 space-y-4">
      {filteredResults.map((result, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {result.type === "file" ? (
              <File size={20} className="text-gray-500 dark:text-gray-400" />
            ) : (
              <Folder size={20} className="text-gray-500 dark:text-gray-400" />
            )}
            <span>{result.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{result.path}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {result.size} • {result.modified}
          </div>
        </motion.div>
      ))}
    </div>
  );
}