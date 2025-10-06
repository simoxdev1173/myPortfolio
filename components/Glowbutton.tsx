// components/GlowButton.tsx
"use client";

import React from "react";

// The props interface remains the same
interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`
        cursor-pointer
        relative inline-flex items-center justify-center px-8 py-3 
        overflow-hidden font-bold text-lg rounded-lg group bg-[#5E503F] text-[#A9927D] border-2 border-[#A9927D] hover:text-[#5E503F] hover:bg-[#A9927D] not-first-of-type:hover:shadow-[0_0_20px_#A9927D]
      `}
    >
      {children || "Button"}
    </button>
  );
};

export default GlowButton;

