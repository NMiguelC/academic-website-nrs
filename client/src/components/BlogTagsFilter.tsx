// Design philosophy: editorial archive index; category filters are text-led catalogue
// controls with restrained rules rather than rounded product pills.

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogTagsFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClearTags: () => void;
}

export default function BlogTagsFilter({ tags, selectedTags, onTagSelect, onClearTags }: BlogTagsFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-2">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-opensans text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">
          {t("blog.filterByCategory")}
        </h3>
        {selectedTags.length > 0 && (
          <Button type="button" variant="ghost" size="sm" onClick={onClearTags} className="h-auto px-0 py-0 font-opensans text-xs text-primary hover:bg-transparent hover:underline">
            {t("blog.clearFilters")}
          </Button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {tags.map((tag) => {
          const selected = selectedTags.includes(tag);
          return (
            <button
              type="button"
              key={tag}
              onClick={() => onTagSelect(tag)}
              aria-pressed={selected}
              className={`border-b pb-1 font-opensans text-sm transition-colors ${selected ? "border-primary text-primary" : "border-transparent text-foreground/70 hover:border-primary/50 hover:text-primary"}`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {selectedTags.length > 0 && (
        <p className="mt-4 font-opensans text-xs text-foreground/60">
          {t("blog.selectedTags")} <span className="font-semibold text-foreground">{selectedTags.join(", ")}</span>
        </p>
      )}
    </div>
  );
}
