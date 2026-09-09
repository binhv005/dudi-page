/**
 * Analytics and Conversion Event Tracking Utility
 * Safely handles dataLayer pushes for GA4, GTM, and custom listeners
 */
export const trackEvent = (eventName, params = {}) => {
  try {
    if (typeof window !== 'undefined') {
      // 1. DataLayer for Google Tag Manager / GA4
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });

      // 2. Custom event for local or third-party listeners
      window.dispatchEvent(
        new CustomEvent('dudi_track', {
          detail: { event: eventName, ...params },
        })
      );
    }
  } catch (err) {
    // Fail silently in production
    console.debug('[Tracking]', eventName, params);
  }
};
