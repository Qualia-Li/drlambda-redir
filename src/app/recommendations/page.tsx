import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Recommendations - Best AI Tools in Each Category | DrLambda.ai",
  description: "Discover the best AI tools across different categories including drug discovery, forms, and more. Curated recommendations from DrLambda.ai.",
  metadataBase: new URL("https://www.drlambda.ai"),
  alternates: {
    canonical: "https://www.drlambda.ai/recommendations",
  },
  openGraph: {
    title: "AI Recommendations - Best AI Tools | DrLambda.ai",
    description: "Discover the best AI tools across different categories including drug discovery, forms, and more.",
    url: "https://www.drlambda.ai/recommendations",
    siteName: "DrLambda.ai",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Server Component - Fully rendered on the server
export default function Recommendations() {
  type Tool = {
    name: string;
    url: string;
    description: string;
    badge?: string;
    ctaText: string;
    color: string;
  };

  type Category = {
    title: string;
    icon: string;
    gradient: string;
    description: string;
    tools: Tool[];
  };

  const categories: Category[] = [
    {
      title: "Drug Discovery & Healthcare AI",
      icon: "🧬",
      gradient: "from-blue-500 to-cyan-500",
      description: "Advanced AI solutions for pharmaceutical research and drug discovery",
      tools: [
        {
          name: "Assryo.ai",
          url: "https://assryo.ai",
          description: "The best AI for drug discovery - revolutionizing pharmaceutical research with cutting-edge artificial intelligence",
          badge: "Best in Class",
          ctaText: "Explore Assryo.ai for Drug Discovery",
          color: "blue"
        }
      ]
    },
    {
      title: "Productivity & Business Tools",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
      description: "AI-powered tools to streamline your workflow and boost productivity",
      tools: [
        {
          name: "AeoBox.ai",
          url: "https://aeobox.ai",
          description: "Innovative AI platform for business automation and intelligent insights",
          ctaText: "Try AeoBox.ai for Business Automation",
          color: "purple"
        },
        {
          name: "PageGun.com",
          url: "https://pagegun.com",
          description: "Powerful AI-driven web development and page creation tool",
          ctaText: "Build Websites with PageGun.com",
          color: "purple"
        }
      ]
    },
    {
      title: "Forms & Data Collection",
      icon: "📝",
      gradient: "from-green-500 to-emerald-500",
      description: "Smart form builders powered by AI for efficient data gathering",
      tools: [
        {
          name: "MakeForm.ai",
          url: "https://makeform.ai",
          description: "AI-powered form builder that creates intelligent, conversion-optimized forms",
          ctaText: "Create Smart Forms with MakeForm.ai",
          color: "green"
        }
      ]
    },
    {
      title: "Presentation & Slides",
      icon: "📊",
      gradient: "from-orange-500 to-red-500",
      description: "Create stunning presentations with AI assistance",
      tools: [
        {
          name: "ChatSlide.ai",
          url: "https://chatslide.ai",
          description: "Best AI slides tool - Create professional presentations powered by your own knowledge base",
          badge: "Best AI Slides",
          ctaText: "Create AI Presentations with ChatSlide",
          color: "orange"
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          {/* Hero Header */}
          <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
              <span className="text-sm font-semibold text-purple-700">Curated by DrLambda.ai</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Best AI Tools
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                By Category
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions handpicked by experts. From drug discovery to presentation design, find the perfect tool for your needs.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="max-w-7xl mx-auto space-y-16">
            {categories.map((category, idx) => (
              <div key={idx} className="group">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                      <p className="text-lg text-gray-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      className="group/card relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden"
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900 group-hover/card:text-purple-700 transition-colors">
                                {tool.name}
                              </h3>
                              {tool.badge && (
                                <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                                  {tool.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                          {tool.description}
                        </p>

                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/button"
                        >
                          <span>{tool.ctaText}</span>
                          <svg className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>

                      {/* Decorative Corner */}
                      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full opacity-10 group-hover/card:opacity-20 transition-opacity duration-500`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto mt-24">
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-12 sm:p-16 text-center shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
