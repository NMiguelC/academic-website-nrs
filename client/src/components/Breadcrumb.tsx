import { useLocation } from "wouter";
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config";

export default function Breadcrumb() {
  const [location] = useLocation();
  const { t } = useLanguage();

  // Don't show breadcrumbs on home page
  if (location === "/") {
    return null;
  }

  // Parse the current path
  const pathSegments = location.split("/").filter(Boolean);

  // Find the label for the current page
  const getCurrentLabel = (path: string) => {
    const navItem = siteConfig.navigation.find((item) => item.href === `/${path}`);
    if (navItem) {
      return t(`nav.${navItem.label.toLowerCase()}`);
    }
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="bg-secondary/30 border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm">
          {/* Home link */}
          <Link
            href="/"
            className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
          >
            <Home size={16} />
            <span className="hidden sm:inline">{t("nav.home")}</span>
          </Link>

          {/* Breadcrumb items */}
          {pathSegments.map((segment, index) => (
            <div key={segment} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-muted-foreground" />
              {index === pathSegments.length - 1 ? (
                <span className="text-foreground font-medium">
                  {getCurrentLabel(segment)}
                </span>
              ) : (
                <Link
                  href={`/${segment}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {getCurrentLabel(segment)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
