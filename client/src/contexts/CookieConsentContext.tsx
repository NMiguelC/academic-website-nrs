import React, { createContext, useContext, useEffect, useState } from "react";
import { initAnalytics, disableAnalytics } from "@/lib/analytics";

type ConsentChoice = "accepted" | "declined";

interface CookieConsentContextType {
  choice: ConsentChoice | null;
  accept: () => void;
  decline: () => void;
}

const STORAGE_KEY = "cookie-consent";

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [choice, setChoice] = useState<ConsentChoice | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "accepted" || saved === "declined" ? saved : null;
  });

  // If consent was already given in a previous visit, initialize analytics
  // as soon as the app mounts.
  useEffect(() => {
    if (choice === "accepted") {
      initAnalytics();
    }
  }, [choice]);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setChoice("accepted");
    initAnalytics();
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setChoice("declined");
    disableAnalytics();
  };

  return (
    <CookieConsentContext.Provider value={{ choice, accept, decline }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    );
  }
  return context;
};
