import { waLink } from "./constants";

export type Review = { name: string; tag: string; text: string; photo: string };
export type Course = {
  slug: "stock-market" | "crypto" | "forex";
  source: string;
  thankYouPath: string;
  whatsapp: string;
  h1: string;
  h1Highlight: string;
  sub: string;
  ticks: string[];
  levels: { name: string; points: string[] }[];
  chips: string[];
  audience: string[];
  audienceNote: string;
  fee: string;
  feeNote: string;
  bundles?: string;
  requirement: string;
  mode: string;
  notice?: { tone: "amber" | "indigo"; title: string; text: string };
  reviews: Review[];
  faqs: [string, string][];
  disclaimer: string;
  thankYou: { courseName: string; note?: { tone: "amber" | "indigo"; text: string } };
  meta: { title: string; description: string };
};

const photo = (f: string) => `/testimonials/${f}`;

export const STOCK: Course = {
  slug: "stock-market",
  source: "stock-market-landing",
  thankYouPath: "/thank-you/stock-market",
  whatsapp: waLink("Hi Shrestha IT, I would like details about the Stock Market (Equity + F&O) course: demo class, fees and batch."),
  h1: "Learn the Stock Market & F&O – Practical Classroom Training in Uttam Nagar, Delhi",
  h1Highlight: "Stock Market & F&O",
  sub: "Understand NSE/BSE Equity and Futures & Options concepts from basics to advanced, with live market analysis. 2 months, 4 levels.",
  ticks: ["Complete beginners welcome", "Offline + Online Live classes", "Recorded session access", "1-on-1 mentor doubt support"],
  levels: [
    { name: "Minor", points: ["Market basics and chart types", "How candlesticks are formed", "Support & resistance, trend structure, price action fundamentals"] },
    { name: "Major", points: ["Advanced market structure", "Price imbalance concepts", "Order-flow concepts on NSE/BSE chart examples"] },
    { name: "Bachelor", points: ["Liquidity concepts", "Multi-timeframe analysis", "Studying setups on historical charts"] },
    { name: "Master", points: ["Futures & Options concepts", "Option Chain and Open Interest", "Live market analysis with your mentor"] },
  ],
  chips: ["Risk management & position sizing", "Market psychology & discipline", "Analysis journal", "TradingView", "Option chain tools", "FII/DII data"],
  audience: ["Complete beginners", "Working professionals", "Commerce & finance students", "Anyone who wants to understand technical analysis"],
  audienceNote: "No prior stock market knowledge is needed.",
  fee: "₹35,000",
  feeNote: "10% off on one-shot payment",
  requirement: "Laptop or smartphone with internet",
  mode: "Offline classroom (Uttam Nagar), Online Live, Recorded access",
  reviews: [
    { name: "Anas Khan", tag: "Equity · Delhi NCR", text: "The practical approach is really good. In the live sessions I learned candlestick setups and market-structure concepts, and I can now read equity charts much better.", photo: photo("Anas Khan-Indian Equity Trader.jpeg") },
    { name: "Pawan Yadav", tag: "Options · Delhi Campus", text: "The offline campus has a great learning environment. I learned options market-structure analysis on Nifty and Bank Nifty levels together with the mentors.", photo: photo("Pawan yadav-indian option trader.jpeg") },
    { name: "Manish Shrivastav", tag: "Options · Noida", text: "Options concepts used to confuse me. The mentors explained risk-management principles and option Greeks very clearly.", photo: photo("Manish Shrivastav-Indian option trader.jpeg") },
    { name: "Saif Qadri", tag: "Equity · Jaipur", text: "From basic candle reading to advanced market-structure concepts, the learning was practical and step by step. The classroom and doubt support were very helpful.", photo: photo("saif qadri- Indian equity trader.jpeg") },
  ],
  faqs: [
    ["Can a complete beginner join?", "Yes. Basics start from Level 1, so no prior knowledge is needed."],
    ["How long is the course?", "2 months, 4 levels."],
    ["Are both online and offline classes available?", "Yes. Offline classes at our Uttam Nagar campus, online live classes, and recordings as well."],
    ["What if I miss a class?", "You get recorded session access and mentor doubt support."],
    ["Do you give trading tips or calls?", "No. This is an educational course only. We do not give tips, calls or investment advice."],
    ["What is the fee?", "₹35,000, with 10% off on one-shot payment. WhatsApp us for the latest offer."],
  ],
  disclaimer:
    "Disclaimer: Shrestha IT is an educational institute. This course is for educational and informational purposes only. We do not provide investment advice, portfolio management, trade execution, trading tips/signals or buy/sell recommendations. We are not a SEBI registered investment adviser or research analyst. Investments in the stock market are subject to market risk; past performance is not a guarantee of future results.",
  thankYou: { courseName: "Stock Market (Equity + F&O)" },
  meta: {
    title: "Stock Market & F&O Course in Uttam Nagar, Delhi | Shrestha IT",
    description: "Stock Market & F&O course in Uttam Nagar, Delhi – offline and online live classes, 2 months, 4 levels. Book a free demo class.",
  },
};

export const CRYPTO: Course = {
  slug: "crypto",
  source: "crypto-landing",
  thankYouPath: "/thank-you/crypto",
  whatsapp: waLink("Hi Shrestha IT, I would like details about the Crypto & Blockchain course: demo class, fees and batch."),
  h1: "Understand Crypto & Blockchain From the Basics – Classroom Course in Uttam Nagar, Delhi",
  h1Highlight: "Crypto & Blockchain",
  sub: "Learn blockchain, Web3, market cycles and risk management concepts with a mentor. 2 months, 4 levels.",
  ticks: ["Beginners welcome", "Offline + Online Live classes", "Recorded sessions", "1-on-1 doubt support"],
  levels: [
    { name: "Coins FA", points: ["Blockchain and smart contract basics", "What crypto pairs are", "How to understand platforms safely"] },
    { name: "Next Gen", points: ["Market cycle analysis", "Bull and bear phases", "Altcoin market concepts"] },
    { name: "Alpha Coin", points: ["Understanding volatility", "Position sizing principles", "Studying high-risk concepts from a risk angle"] },
    { name: "SIT", points: ["Risk-reward management", "Capital preservation principles", "Live market study with your mentor"] },
  ],
  chips: ["Web3 & DeFi basics", "Stablecoins", "On-chain analysis basics", "Spotting crypto scams", "Wallet & security practices", "TradingView"],
  audience: ["Beginners curious about blockchain and crypto", "Equity/forex learners who want to understand digital assets", "Anyone who wants to understand Web3 and DeFi", "Students & professionals"],
  audienceNote: "No prior blockchain knowledge is needed.",
  fee: "₹15,000",
  feeNote: "10% off on one-shot payment",
  bundles: "Forex + Crypto ₹24,999 · All-Segment ₹29,999",
  requirement: "Laptop or smartphone with internet",
  mode: "Offline classroom (Uttam Nagar), Online Live, Recorded access",
  notice: { tone: "indigo", title: "Stay Safe From Scams", text: "The course teaches you how to recognise fake schemes, phishing and fraudulent projects, and how to keep your own security tight." },
  reviews: [
    { name: "Rahul Vishwakarma", tag: "Crypto · Banaras", text: "Crypto market concepts were explained in a simple way. After learning risk-management principles my understanding became much clearer.", photo: photo("Rahul Vishwakarma- Crypto trader.jpeg") },
    { name: "Sneha Juneja", tag: "Crypto & Web3 · Gurugram", text: "I was looking for proper 1-on-1 mentorship in a learning environment. The mentors explained market-cycle concepts without any confusion.", photo: photo("Sneha Juneja- Crypto trader.jpeg") },
    { name: "Azhar Sheikh", tag: "Crypto & Derivatives · Lucknow", text: "I learned to understand crypto volatility in the live sessions. Faculty support is good and doubt-clearing sessions happen regularly.", photo: photo("azhar- crypto trader.jpeg") },
  ],
  faqs: [
    ["Do I need to know blockchain beforehand?", "No. Level 1 starts from the basics."],
    ["How long is the course?", "2 months, 4 levels."],
    ["Is crypto risky for beginners?", "Crypto is highly volatile and high-risk. That is why the course focuses on risk management and safety."],
    ["Does the course teach how to spot scams?", "Yes."],
    ["Do you suggest coins or give calls?", "No. Education only. We do not give tips, calls or investment advice."],
    ["Are both online and offline classes available?", "Yes. Uttam Nagar campus, online live classes and recordings."],
  ],
  disclaimer:
    "Disclaimer: Shrestha IT is an educational institute. This course is for educational and informational purposes only. We do not provide investment advice, crypto buy/sell recommendations, trading signals, portfolio management or trade execution services. Crypto assets are unregulated and highly volatile; you can lose your entire capital. Past performance is not a guarantee of future results.",
  thankYou: {
    courseName: "Crypto & Blockchain",
    note: { tone: "indigo", text: "Shrestha IT never asks you for crypto, wallet details, OTPs or money for any scheme. Fees are collected only through our official channel, only for the course." },
  },
  meta: {
    title: "Crypto & Blockchain Course in Uttam Nagar, Delhi | Shrestha IT",
    description: "Crypto & Blockchain education course in Uttam Nagar, Delhi – offline and online live classes, 2 months, 4 levels. Book a free demo class.",
  },
};

export const FOREX: Course = {
  slug: "forex",
  source: "forex-landing",
  thankYouPath: "/thank-you/forex",
  whatsapp: waLink("Hi Shrestha IT, I would like details about the Forex / Currency Market course: demo class, fees and batch."),
  h1: "Understand the Currency Market (Forex) – Practical Classroom Course in Uttam Nagar, Delhi",
  h1Highlight: "Currency Market (Forex)",
  sub: "Learn currency pairs, the global economy and how news moves markets through fundamental, technical and sentiment analysis. 2 months, 4 levels.",
  ticks: ["Beginners welcome", "Offline + Online Live classes", "Recorded sessions", "Group mentorship + 1-on-1 doubt support"],
  levels: [
    { name: "Forex FA", points: ["Currency pair basics", "Pip, spread and lot-size concepts", "Charting platform setup"] },
    { name: "Next Gen", points: ["Fundamental, technical and sentiment analysis", "How economic indicators move price"] },
    { name: "Alpha F", points: ["Studying high-impact news events with the economic calendar", "Buy-side and sell-side market concepts"] },
    { name: "SIT", points: ["Live pair analysis in group mentorship", "Session reviews"] },
  ],
  chips: ["Currency correlation", "Risk management", "Analysis journal", "Economic calendar", "TradingView", "Pip & lot-size calculator"],
  audience: ["Beginners who want to understand global markets", "Equity/crypto learners", "Working professionals", "Anyone interested in macroeconomics"],
  audienceNote: "No prior forex experience needed. Basic English (to read economic news) is enough.",
  fee: "₹15,000",
  feeNote: "10% off on one-shot payment",
  bundles: "Forex + Crypto ₹24,999 · All-Segment ₹29,999",
  requirement: "Laptop or smartphone with internet",
  mode: "Offline classroom (Uttam Nagar), Online Live, Recorded access",
  notice: {
    tone: "amber",
    title: "Important Information",
    text: "For Indian residents, forex trading is permitted only in RBI-permitted INR currency pairs through SEBI-recognised exchanges (NSE/BSE). The RBI has published an Alert List of unauthorised forex platforms. This course is for education only – we do not promote any broker or platform.",
  },
  reviews: [
    { name: "Rajat Verma", tag: "Forex · Chandigarh", text: "Currency pairs, pip/spread concepts and economic-calendar analysis were explained step by step. Doubts get cleared well in the live mentorship sessions.", photo: photo("Rajat-Forex Trader.jpeg") },
  ],
  faqs: [
    ["Do I need prior forex experience?", "No. Level 1 starts from the basics."],
    ["Can I do this alongside a job?", "Yes. Online live classes and recordings are available. WhatsApp us for batch timings."],
    ["Do I have to open a broker account?", "No. The course is education only, and we do not recommend any broker."],
    ["Do you teach how economic news affects the market?", "Yes, in Levels 2 and 3."],
    ["Do you give signals or calls?", "No. We do not give tips, signals or investment advice."],
    ["What is the fee?", "₹15,000, with 10% off on one-shot payment."],
  ],
  disclaimer:
    "Disclaimer: Shrestha IT is an educational institute. This course is for educational and informational purposes only. We do not provide investment advice, trading signals, broker recommendations, portfolio management or trade execution services. Currency markets carry high risk. Indian residents must follow RBI/FEMA guidelines. Past performance is not a guarantee of future results.",
  thankYou: {
    courseName: "Forex / Currency Market",
    note: { tone: "amber", text: "Shrestha IT does not ask you to open a broker account or deposit money on any platform. Fees are collected only through our official channel, only for the course." },
  },
  meta: {
    title: "Forex & Currency Market Course in Uttam Nagar, Delhi | Shrestha IT",
    description: "Forex / Currency Market education course in Uttam Nagar, Delhi – offline and online live classes, 2 months, 4 levels. Book a free demo class.",
  },
};
