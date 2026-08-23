// Design philosophy: quiet catalogue search control; metadata and rules should lead,
// while the search affordance stays accessible and visually restrained.

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function BlogSearchBar({ searchQuery, onSearchChange }: BlogSearchBarProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <label htmlFor="article-search" className="mb-2 block font-opensans text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">
        {t("blog.searchLabel")}
      </label>
      <div className="relative border-b border-foreground/30 focus-within:border-primary transition-colors">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-primary" size={18} aria-hidden="true" />
        <Input
          id="article-search"
          type="text"
          placeholder={t("blog.searchPlaceholder")}
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          className="border-0 bg-transparent pl-8 pr-10 py-3 font-opensans text-base text-foreground shadow-none focus-visible:ring-0"
        />
        {searchQuery && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange("")}
            aria-label={t("blog.clearSearch")}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/60 hover:bg-transparent hover:text-primary"
          >
            <X size={17} aria-hidden="true" />
          </Button>
        )}
      </div>
      {searchQuery && (
        <p className="mt-2 font-opensans text-xs text-foreground/60">
          {t("blog.searchingFor")} <span className="font-semibold text-foreground">“{searchQuery}”</span>
        </p>
      )}
    </div>
  );
}
