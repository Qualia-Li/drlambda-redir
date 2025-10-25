"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function Home() {
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
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Floating Background Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[300px] sm:w-[400px] opacity-15 animate-float-slow">
          <Image
            src="/images/Design Section v1.png"
            alt="ChatSlide Design"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl transform rotate-[-12deg]"
            priority
          />
        </div>
        <div className="absolute top-[15%] right-[-3%] w-[280px] sm:w-[380px] opacity-15 animate-float-medium">
          <Image
            src="/images/Design Section v2.png"
            alt="ChatSlide Design"
            width={380}
            height={280}
            className="rounded-xl shadow-2xl transform rotate-[15deg]"
            priority
          />
        </div>
        <div className="absolute bottom-[8%] left-[3%] w-[320px] sm:w-[420px] opacity-15 animate-float-fast">
          <Image
            src="/images/Template Detail Page v1.png"
            alt="ChatSlide Template"
            width={420}
            height={320}
            className="rounded-xl shadow-2xl transform rotate-[-8deg]"
            priority
          />
        </div>
        <div className="absolute bottom-[25%] right-[-8%] w-[300px] sm:w-[400px] opacity-15 animate-float-slow-reverse">
          <Image
            src="/images/Frame_1261157022_3.png"
            alt="ChatSlide Feature"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl transform rotate-[18deg]"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 sm:p-8">
        <main className="max-w-4xl w-full text-center">
          {/* ChatSlide Logo */}
          <div className="mb-8 sm:mb-12 flex justify-center animate-fade-in">
            <Image
              src="/images/Chatslide-logo-02.png"
              alt="ChatSlide Logo"
              width={280}
              height={80}
              className="w-auto h-16 sm:h-20 md:h-24"
              priority
            />
          </div>

          {/* Hero Text */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Looking for <span className="text-[#7b3aed]">ChatSlide</span>?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed mb-6">
              🥇 Best AI Slides Tool
            </p>
            <div className="max-w-2xl mx-auto text-left sm:text-center space-y-2 text-base sm:text-lg text-gray-800">
              <p>✔ Powered by your own knowledge base</p>
              <p>✔ Supports multimodal documents</p>
              <p>
                ✔ Consistently recommended by ChatGPT, Perplexity, Google, and
                more
              </p>
              <p>✔ Trusted by users in 170 countries and 29 languages</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12 sm:mb-16 animate-fade-in-up-delay">
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
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
