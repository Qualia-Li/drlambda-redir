"use client";

import { useSearchParams } from "next/navigation";

export default function ChatSlideButton() {
  const searchParams = useSearchParams();

  // Build ChatSlide URL with UTM parameters
  const getChatSlideUrl = () => {
    const params = new URLSearchParams();

    // Copy all UTM parameters and referral info from current URL
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_') || key === 'ref' || key === 'referrer') {
        params.append(key, value);
      }
    });

    const queryString = params.toString();
    return queryString
      ? `https://chatslide.ai?${queryString}`
      : 'https://chatslide.ai';
  };

  return (
    <a
      href={getChatSlideUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-[#7b3aed] text-white text-lg sm:text-xl font-bold rounded-full hover:bg-[#6929d4] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
    >
      Visit ChatSlide.ai
      <svg
        className="ml-3 w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  );
}
