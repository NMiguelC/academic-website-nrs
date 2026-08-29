import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
// EU Cloud host — keeps data inside the EU, relevant for RGPD.
const POSTHOG_HOST = "https://eu.i.posthog.com";

let initialized = false;

/**
 * Initializes PostHog only after the visitor has explicitly accepted
 * analytics cookies. Never called automatically on app load.
 */
export function initAnalytics() {
  if (initialized) return;
  if (!POSTHOG_KEY) {
    // No key configured (e.g. local dev without the env var) — skip silently.
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Respect the consent gate: we only ever call init() after consent,
    // but persistence is still capped to what's needed for a lightweight,
    // privacy-conscious setup.
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true, // needed for accurate time-on-page
    autocapture: true, // clicks/inputs structure, used for navigation flow
    session_recording: {
      maskAllInputs: true, // never record what visitors type (e.g. contact form)
      maskTextSelector: "[data-ph-mask]",
    },
  });

  initialized = true;
}

/** Fully disables and clears PostHog data, used when a visitor withdraws consent. */
export function disableAnalytics() {
  if (!initialized) return;
  posthog.opt_out_capturing();
  posthog.reset();
}

export function isAnalyticsInitialized() {
  return initialized;
}
