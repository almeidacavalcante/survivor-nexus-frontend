import Link from "next/link";
import React from "react";

export default function Modal({ onClose, title, children }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative p-8 border w-full max-w-lg shadow-lg rounded-lg bg-zinc-800">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-50">{title || "Modal Title"}</h3>
          <div className="mt-4 px-7 py-3">
            {children || <p className="text-lg text-gray-400">Modal Body</p>}
          </div>

        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-300"
          aria-label="close">
          <span className="text-2xl">&times;</span>
        </button>
      </div>
    </div>
  );
}
