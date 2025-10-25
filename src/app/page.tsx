import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.drlambda.ai",
  },
};

export default function Home() {
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
              href="https://chatslide.ai"
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

      {/* More Resources Section */}
      <div className="relative z-10 bg-white border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            More Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://quanlai.li"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-300 shadow-sm"
            >
              <span className="font-medium">quanlai.li</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
