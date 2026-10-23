export const PHONE_TEL = "tel:+919236666923";
export const PHONE_LABEL = "92366 66923";
export const ADDRESS = "Shop No 167B, Third Floor, Main Road, Opposite Metro Pillar No. 672, Uttam Nagar, New Delhi - 110059";
export const EMAIL = "hr@shresthaedutech.com";
export const INSTAGRAM = "https://www.instagram.com/shrestha_it";
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("Shrestha IT, " + ADDRESS)}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Shrestha IT, " + ADDRESS)}`;
// TODO: add the real Google Reviews link; the button stays hidden while this is empty
export const GOOGLE_REVIEWS_LINK = "";
export const FLAG_KEY = "sit_lead_submitted";
export const NAME_KEY = "sit_lead_name";

export const waLink = (message: string) => `https://wa.me/919236666923?text=${encodeURIComponent(message)}`;
export const WA_LINK = waLink("Hi Shrestha IT, I would like details about your market education courses.");
