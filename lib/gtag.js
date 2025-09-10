// lib/gtag.js
export const GA_TRACKING_ID = "G-KBVNY0FK4P"; // replace with your GA ID

// Log pageviews
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log custom events
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
