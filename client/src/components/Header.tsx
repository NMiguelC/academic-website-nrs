import { siteConfig } from "@/config";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 border border-primary flex items-center justify-center">
            <span className="font-editorial text-primary font-semibold text-lg">NRS</span>
          </div>
          <span className="hidden sm:inline font-editorial font-semibold text-primary tracking-tight">
            Nuno Ribeiro e Silva
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary font-opensans font-medium transition-colors text-sm"
            >
              {t(`nav.${item.label.toLowerCase()}`)}
            </Link>
          ))}
        </nav>

        {/* Language Selector and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language Selector */}
          <div className="flex gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setLanguage("pt")}
              className={`px-3 py-1 rounded text-sm font-opensans font-medium transition-colors ${
                language === "pt"
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-white"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-opensans font-medium transition-colors ${
                language === "en"
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary font-opensans font-medium transition-colors"
              >
                {t(`nav.${item.label.toLowerCase()}`)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
