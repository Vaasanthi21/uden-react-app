/**
 * Single source of truth for the UDEN Launch Offer schedule, pricing, and dynamic labels.
 * Modifying the single date string (LAUNCH_OFFER_END_DATE_IST) automatically updates:
 *  - Offer countdown / auto price switch
 *  - Promotional banners on /start and across the application
 *  - Pricing card badges, deadlines, and labels
 *  - Expiry warnings & countdown messages
 */

// ONE CONFIG DATE: Change this single ISO string (IST +05:30) to update the launch offer everywhere.
// Launch date: Thursday 5 Nov 2026.
// Launch offer ends: 18 Nov 2026 23:59:59 IST.
// New standard price begins: 19 Nov 2026 00:00:00 IST.
export const LAUNCH_OFFER_END_DATE_IST = '2026-11-18T23:59:59+05:30';

export const LAUNCH_OFFER_PRICE = '₹200';
export const STANDARD_PRICE = '₹500';
export const LAUNCH_OFFER_DISCOUNT = '60%';

export const getOfferConfig = () => {
  const endDate = new Date(LAUNCH_OFFER_END_DATE_IST);
  const deadlineTimestamp = endDate.getTime();

  // Dynamic formatting of end date (e.g., "18 Nov")
  const day = endDate.getDate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = months[endDate.getMonth()];
  const endDateDisplay = `${day} ${monthName}`;

  // Next date when standard price begins (e.g., "19 Nov")
  const nextDate = new Date(deadlineTimestamp + 1000);
  const nextDay = nextDate.getDate();
  const nextMonthName = months[nextDate.getMonth()];
  const nextDateDisplay = `${nextDay} ${nextMonthName}`;

  const isOfferActive = Date.now() <= deadlineTimestamp;

  return {
    deadlineTimestamp,
    endDateDisplay,      // "18 Nov"
    nextDateDisplay,     // "19 Nov"
    isOfferActive,
    offerPrice: LAUNCH_OFFER_PRICE,
    standardPrice: STANDARD_PRICE,
    discount: LAUNCH_OFFER_DISCOUNT,
    bannerOfferText: `${LAUNCH_OFFER_PRICE}/mo Plan (${LAUNCH_OFFER_DISCOUNT} OFF) Ends ${endDateDisplay}!`,
    pricingSwitchText: `🔥 Offer ends ${endDateDisplay}. Switches to ${STANDARD_PRICE} on ${nextDateDisplay}!`,
    currentPrice: isOfferActive ? LAUNCH_OFFER_PRICE : STANDARD_PRICE,
    currentCtaText: isOfferActive ? `Start for ${LAUNCH_OFFER_PRICE} Today` : 'Get Placement Pass',
    popularRibbonText: isOfferActive ? `Launch Offer: ${LAUNCH_OFFER_DISCOUNT} OFF` : 'Recommended Plan',
  };
};

export const LAUNCH_OFFER_DEADLINE = new Date(LAUNCH_OFFER_END_DATE_IST).getTime();
export const checkIsOfferActive = () => Date.now() <= LAUNCH_OFFER_DEADLINE;
