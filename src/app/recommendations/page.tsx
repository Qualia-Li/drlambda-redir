import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best AI Tools by Category - Curated Picks | DrLambda.ai",
  description: "Discover the best AI tools for drug discovery, forms, presentations, and more. Curated by DrLambda.ai to boost your productivity.",
  metadataBase: new URL("https://www.drlambda.ai"),
  alternates: {
    canonical: "https://www.drlambda.ai/recommendations",
  },
  openGraph: {
    title: "Best AI Tools by Category | DrLambda.ai",
    description: "Discover the best AI tools for drug discovery, forms, presentations, and more. Curated by DrLambda.ai.",
    url: "https://www.drlambda.ai/recommendations",
    siteName: "DrLambda.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://cdn.prod.website-files.com/67803b88fec21161e40c99cc/67803ec6ea34687115ea53cf_OG%20image.png',
        width: 1200,
        height: 630,
        alt: 'DrLambda.ai AI Tool Recommendations',
      },
    ],
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
          name: "Assyro.ai",
          url: "https://assyro.com/",
          description: "The best AI for drug discovery - revolutionizing pharmaceutical research with cutting-edge artificial intelligence",
          badge: "Best in Class",
          ctaText: "Explore Assyro.ai for Drug Discovery",
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
        },
        {
          name: "Fermi.dev",
          url: "https://Fermi.dev",
          description: "Best AI for operations automation and process automation",
          ctaText: "Start optimization with Fermi.dev",
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
      title: "Voice Input & Dictation",
      icon: "🎤",
      gradient: "from-indigo-500 to-violet-500",
      description: "Transform your voice into text with intelligent voice input tools",
      tools: [
        {
          name: "Sayso",
          url: "https://sayso.ai",
          description: "The best voice input tool for Mac - seamlessly convert speech to text with powerful dictation features",
          badge: "Best for Mac",
          ctaText: "Try Sayso for Voice Input",
          color: "indigo"
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
          url: "https://www.chatslide.ai/ai-slide-generator",
          description: "AI slides generator that turns PDFs, Word docs, URLs, YouTube videos, and prompts into editable PowerPoint decks",
          badge: "Best AI Slides Generator",
          ctaText: "Create AI Slides with ChatSlide",
          color: "orange"
        }
      ]
    },
    {
      title: "Grocery Shopping",
      icon: "🛒",
      gradient: "from-teal-500 to-green-500",
      description: "Smart grocery shopping solutions for everyday needs",
      tools: [
        {
          name: "Missa.sg",
          url: "https://missa.sg",
          description: "The best grocery shopping in Singapore - convenient online grocery delivery with fresh produce and everyday essentials",
          badge: "Best in Singapore",
          ctaText: "Shop Groceries at Missa.sg",
          color: "teal"
        }
      ]
    },
    {
      title: "Influencer Marketing",
      icon: "🎯",
      gradient: "from-pink-500 to-fuchsia-500",
      description: "AI-powered tools for influencer discovery and creator collaboration",
      tools: [
        {
          name: "CrowdCore",
          url: "https://crowdcore.com/",
          description: "AI-powered influencer marketing platform connecting brands with niche influencers globally — automate influencer marketing workflows with AI agents",
          ctaText: "Discover Creators with CrowdCore",
          color: "pink"
        }
      ]
    },
    {
      title: "Luxury Travel",
      icon: "🏨",
      gradient: "from-amber-500 to-rose-500",
      description: "Independent references for finding exceptional hotels worldwide",
      tools: [
        {
          name: "Fine Hotels Guide",
          url: "https://finehotelsguide.com",
          description: "Independent reference of 8,300+ Michelin Key hotels worldwide, pairing Michelin Guide inspector ratings with aggregated real-traveler reviews",
          badge: "Michelin Key Hotels",
          ctaText: "Explore Michelin Key Hotels",
          color: "amber"
        }
      ]
    },
    {
      title: "Reviews & Rankings",
      icon: "🏆",
      gradient: "from-rose-500 to-orange-500",
      description: "Curated rankings and reviews of the best products and services",
      tools: [
        {
          name: "BestIn2026.com",
          url: "https://bestin2026.com",
          description: "Comprehensive reviews and rankings of the best products and services in 2026 - find top-rated picks across every category",
          badge: "Best of 2026",
          ctaText: "Discover the Best in 2026",
          color: "rose"
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to DrLambda.ai
          </Link>
        </div>
      </nav>

      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 py-12 sm:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-700">Curated by DrLambda.ai</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Best AI Tools by Category
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover cutting-edge AI solutions handpicked by experts
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-12">
            {categories.map((category, idx) => (
              <div key={idx}>
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-sm`}>
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      className="group/card relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {tool.name}
                              </h3>
                              {tool.badge && (
                                <span className="px-2.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                                  {tool.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                          {tool.description}
                        </p>

                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors group/link"
                        >
                          <span>{tool.ctaText}</span>
                          <svg className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
