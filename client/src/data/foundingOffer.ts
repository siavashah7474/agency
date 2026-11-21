// Founding-client offer for the WhatsApp AI (shown on the Clinics and WhatsApp AI pages).
// Update spotsLeft here when a founding spot is taken (and in llms.txt / llms-full.txt).
export const FOUNDING_OFFER = {
  setupFee: "€1,399",
  spotsLeft: 3,
  spotsTotal: 5,
};

export const foundingOfferBadge = "Founding client: setup fee waived";
export const foundingOfferSpots = `Founding client offer: ${FOUNDING_OFFER.spotsLeft} of ${FOUNDING_OFFER.spotsTotal} spots remaining`;
export const foundingOfferSentence = `Founding client offer: the ${FOUNDING_OFFER.setupFee} setup fee is waived for our first ${FOUNDING_OFFER.spotsTotal} WhatsApp AI clinics (${FOUNDING_OFFER.spotsLeft} of ${FOUNDING_OFFER.spotsTotal} spots remaining).`;
