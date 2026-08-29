import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieConsentBanner() {
  const { choice, accept, decline } = useCookieConsent();
  const { t } = useLanguage();

  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookieConsent.title")}
      className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {t("cookieConsent.message")}
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={decline}>
            {t("cookieConsent.decline")}
          </Button>
          <Button size="sm" onClick={accept}>
            {t("cookieConsent.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
