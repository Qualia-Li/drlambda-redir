export default function Footer() {
  return (
    <footer className="relative z-10 border-t bg-background">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">DrLambda.ai</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered platform for intelligent automation and insights.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.chatslide.ai/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.chatslide.ai/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/recommendations"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recommendations
                </a>
              </li>
              <li>
                <a
                  href="https://www.chatslide.ai/affiliate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  🤝 Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="https://quanl.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  📘 How To Win GEO
                </a>
              </li>
              <li>
                <a
                  href="https://howtowingeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  👨🏻‍💻 Quanlai Li
                </a>
              </li>
            </ul>
          </div>

          {/* Press Coverage */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Press Coverage</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.stanfordtechreview.com/articles/how-stanford-alum-empowers-indian-educators-with-chatslide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Stanford Tech Review
                </a>
              </li>
              <li>
                <a
                  href="https://www.sfbayareatimes.com/posts/empowering-indian-music-tutors-through-ai-the-chatslide-story"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SF Bay Area Times
                </a>
              </li>
              <li>
                <a
                  href="https://www.montrealtimes.ca/posts/from-indias-classrooms-to-montreals-innovation-hubs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Montréal Times
                </a>
              </li>
              <li>
                <a
                  href="https://techbullion.com/quanlai-li-launches-how-to-win-geo-a-groundbreaking-guide-to-generative-engine-optimization/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  TechBullion
                </a>
              </li>
              <li>
                <a
                  href="https://metapress.com/chatslide-ai-how-innovation-empowers-global-educators-and-professionals/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MetaPress
                </a>
              </li>
            </ul>
          </div>

          {/* Reviews */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Reviews</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.aitoolssme.com/blogs/ai-slide-maker-chatslide-honest-review-and-deep-dive"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Tools SME
                </a>
              </li>

              <li>
                <a
                  href="https://www.producthunt.com/products/chatslide-ai"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product Hunt
                </a>
              </li>

              <li>
                <a
                  href="https://gptslides.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GPT Slides
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DrLambda.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
