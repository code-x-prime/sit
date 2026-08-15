import React from "react";
import {
  IconTrendingUp,
  IconWorld,
  IconCoinBitcoin,
  IconChartCandle,
  IconChartDots,
  IconBuildingBank,
} from "@tabler/icons-react";

export interface CourseCategory {
  id: string;
  title: string;
  shortTitle: string;
  categoryName: string;
  duration: string;
  levels: string;
  offlinePrice: string;
  onlinePrice: string;
  discount: string;
  popular?: boolean;
  icon: React.ReactNode;
  headerBgIcon: React.ReactNode;
  gradientHeader: string;
  curriculum: string[];
  image: string;
  imageAlt: string;
  wideImage: string;
  fitCheckImage: string;
  fitCheckImageAlt: string;
  classroomImage: string;
  classroomImageAlt: string;
  careerImage: string;
  careerImageAlt: string;
}

export const COURSES: CourseCategory[] = [
  {
    id: "equity-derivatives",
    title: "Indian Equity + Derivatives Market Trading",
    shortTitle: "Equity & Derivatives Combo",
    categoryName: "NSE / BSE Equity + F&O",
    duration: "2 Months",
    levels: "4 Levels (Minor, Major, Bachelor, Master)",
    offlinePrice: "35,000",
    onlinePrice: "35,000",
    discount: "10% OFF on One Shot Payment",
    popular: true,
    icon: <IconTrendingUp className="w-6 h-6 text-white" />,
    headerBgIcon: <IconBuildingBank className="w-20 h-20 text-white" />,
    gradientHeader: "from-emerald-600 via-teal-600 to-[#0A2540]",
    curriculum: [
      "Chart & Price Data (How Candle works)",
      "Adv. SMC, FVG & Order Blocks",
      "Institutional Entry & Liquidity Strategy",
      "Futures & Options Buying/Selling Strategies",
    ],
    image: "/courses/equity-derivatives.jpg",
    imageAlt: "Equity and Derivatives trading course banner with candlestick chart and NSE BSE market data visualization",
    wideImage: "/courses/equity-derivatives-wide.jpg",
    fitCheckImage: "/gallery/classroom-session-1.jpg",
    fitCheckImageAlt: "Mentor guiding students through a live equity and derivatives trading setup at Shrestha IT",
    classroomImage: "/gallery/mentor-teaching.jpg",
    classroomImageAlt: "Live classroom session covering equity and derivatives trading strategies at Shrestha IT",
    careerImage: "/gallery/certificate-handover-1.jpg",
    careerImageAlt: "Student receiving equity and derivatives trading course completion certificate at Shrestha IT",
  },
  {
    id: "derivatives",
    title: "Indian Derivatives Market Trading",
    shortTitle: "F&O & Options",
    categoryName: "Futures & Options",
    duration: "2 Months",
    levels: "4 Levels (Minor, Major, Bachelor, Master)",
    offlinePrice: "20,000",
    onlinePrice: "20,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconChartCandle className="w-6 h-6 text-white" />,
    headerBgIcon: <IconChartDots className="w-20 h-20 text-white" />,
    gradientHeader: "from-rose-600 via-purple-600 to-[#0A2540]",
    curriculum: [
      "Futures & Forward Contracts Foundation",
      "Options Buying & Selling Strategies",
      "Quantitative Techniques & Risk Analytics",
      "Master Trade Setup & Expiry Day Trades",
    ],
    image: "/courses/derivatives.jpg",
    imageAlt: "Futures and Options F&O derivatives trading course banner with option chain data and volatility charts",
    wideImage: "/courses/derivatives-wide.jpg",
    fitCheckImage: "/gallery/trading-session-live.jpg",
    fitCheckImageAlt: "Mentor explaining live Futures and Options trading chart on smart board at Shrestha IT",
    classroomImage: "/gallery/classroom-discussion.jpg",
    classroomImageAlt: "Students in an interactive F&O trading discussion during a live class at Shrestha IT",
    careerImage: "/gallery/certificate-handover-2.jpg",
    careerImageAlt: "Senior mentor handing over an F&O derivatives trading certificate to a student at Shrestha IT",
  },
  {
    id: "forex",
    title: "Forex Market Trading",
    shortTitle: "Global Currencies",
    categoryName: "Forex FX",
    duration: "2 Months",
    levels: "4 Levels (Forex FA, Next Gen, Alpha F, SIT)",
    offlinePrice: "15,000",
    onlinePrice: "15,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconWorld className="w-6 h-6 text-white" />,
    headerBgIcon: <IconWorld className="w-20 h-20 text-white" />,
    gradientHeader: "from-[#01488B] via-blue-600 to-[#0F172A]",
    curriculum: [
      "MetaTrader 4 & PIP / Spread Mechanics",
      "Fundamental, Technical & Sentiment Analysis",
      "Short Selling & Economic Calendar",
      "Educational Trading & Group Mentorship",
    ],
    image: "/courses/forex.jpg",
    imageAlt: "Forex global currency trading course banner with world map, currency symbols and forex charts",
    wideImage: "/courses/forex-wide.jpg",
    fitCheckImage: "/gallery/office-team.jpg",
    fitCheckImageAlt: "Shrestha IT trading academy office team discussing global Forex market strategy",
    classroomImage: "/gallery/celebration-team.jpg",
    classroomImageAlt: "Shrestha IT students and mentors celebrating Forex trading milestones together",
    careerImage: "/gallery/certificate-group-2.jpg",
    careerImageAlt: "Group of certified Forex trading students posing with their course completion certificates",
  },
  {
    id: "crypto",
    title: "Cryptocurrency Market Trading",
    shortTitle: "Crypto & Web3",
    categoryName: "Crypto Assets",
    duration: "2 Months",
    levels: "4 Levels (Coins FA, Next Gen, Alpha Coin, SIT)",
    offlinePrice: "15,000",
    onlinePrice: "15,000",
    discount: "10% OFF on One Shot Payment",
    icon: <IconCoinBitcoin className="w-6 h-6 text-white" />,
    headerBgIcon: <IconCoinBitcoin className="w-20 h-20 text-white" />,
    gradientHeader: "from-amber-500 via-amber-600 to-[#0F172A]",
    curriculum: [
      "Crypto Currency Pairs & Blockchain Basics",
      "Market Cycles & Altcoin Strategy",
      "Leverage & Short Selling Mechanics",
      "Risk Management & Money Rewards",
    ],
    image: "/courses/crypto.jpg",
    imageAlt: "Cryptocurrency and Web3 trading course banner with bitcoin ethereum coins and blockchain network visualization",
    wideImage: "/courses/crypto-wide.jpg",
    fitCheckImage: "/gallery/founder-interview-desk.jpg",
    fitCheckImageAlt: "Shrestha IT Director discussing crypto and Web3 market trends in a press interview",
    classroomImage: "/gallery/team-photo-large.jpg",
    classroomImageAlt: "Shrestha IT crypto and Web3 trading community and mentors at the Delhi campus",
    careerImage: "/gallery/certificate-ceremony-1.jpg",
    careerImageAlt: "Students receiving crypto and Web3 trading course completion certificates at Shrestha IT",
  },
];
