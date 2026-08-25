export interface CourseFaqItem {
  question: string;
  answer: string;
}

export interface CourseDetailContent {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroTagline: string;
  overview: string;
  whoIsThisFor: string[];
  prerequisites: string[];
  topics: string[];
  tools: string[];
  courseContent: { module: string; description: string }[];
  courseMode: string[];
  careerOpportunities: { title: string; description: string }[];
  faqs: CourseFaqItem[];
}

export const COURSE_CONTENT: Record<string, CourseDetailContent> = {
  "equity-derivatives": {
    slug: "equity-derivatives",
    seoTitle: "Equity + Derivatives Market Education Course | Shrestha IT",
    seoDescription:
      "Learn NSE/BSE Equity & Derivatives market concepts in 2 months. Structured education in market structure, technical analysis & risk management. Offline & Online.",
    keywords: [
      "equity market education course",
      "derivatives market education India",
      "NSE BSE market course",
      "F&O market education",
      "stock market course Delhi",
      "market structure course",
      "learn stock market concepts",
      "technical analysis course",
      "financial market education",
    ],
    heroTagline: "Learn Market Structure, Technical Analysis & Derivatives Concepts",
    overview:
      "This 2-month educational program provides structured learning in Indian equity and derivatives markets. Students learn market fundamentals, price action, technical analysis, market structure, derivatives concepts, option-chain interpretation and risk management principles through guided lessons and chart-based practice using NSE/BSE market data. The course is designed to help students develop financial-market knowledge, analytical skills and a disciplined approach to studying markets. It combines classroom instruction, practical chart exercises and mentor-led discussions to help learners understand how equity and derivatives markets work. The program is structured across 4 progressive levels (Minor, Major, Bachelor, Master), moving from foundational price-action concepts to advanced market-structure analysis. Every level pairs theory with hands-on chart study on real NSE/BSE data, so concepts are reinforced through practice rather than left abstract. Graduates leave with a stronger understanding of how equity and derivatives markets function, a documented learning journal, and the analytical foundation to continue studying markets independently.",
    whoIsThisFor: [
      "Complete beginners interested in learning about financial markets",
      "Working professionals who want to develop financial-market knowledge",
      "Students from finance, commerce and related backgrounds",
      "Learners interested in technical and market-structure analysis",
      "Individuals interested in understanding equity and derivatives concepts",
    ],
    prerequisites: [
      "No prior stock market experience required — course starts from absolute basics",
      "A laptop or smartphone with a stable internet connection for online/chart sessions",
      "Basic comfort with numbers and percentages (no advanced maths needed)",
      "Willingness to practice on charts daily outside class hours",
    ],
    topics: [
      "How candles work — price action fundamentals",
      "Support, resistance & trend structure",
      "Advanced market structure concepts",
      "Price imbalances, liquidity concepts & market structure",
      "Order-flow concepts & market structure analysis",
      "Liquidity & price-action concepts",
      "Futures contracts & derivatives fundamentals",
      "Options concepts, structures & market analysis",
      "Option chain & open interest analysis",
      "Risk management principles & position-sizing concepts",
      "Portfolio concepts for long-term equity study",
      "Multi-timeframe market analysis",
      "Market analysis journaling & learning review",
      "Market psychology & discipline building",
      "Live market analysis & mentor-led discussion",
    ],
    tools: [
      "TradingView (chart analysis & study)",
      "NSE/BSE option chain tools",
      "Chart analysis tools",
      "Risk-management calculators",
      "Market sentiment & FII/DII data trackers",
    ],
    courseContent: [
      { module: "Level 1 — Minor", description: "Market basics, how candlesticks are formed, chart types, and how raw price data becomes a market chart. Covers support and resistance, trend structure, price-action fundamentals, and the principles of disciplined market analysis." },
      { module: "Level 2 — Major", description: "Advanced market structure concepts, price imbalances, and order-flow identification using real NSE/BSE chart examples, taught through guided practice on live and historical data." },
      { module: "Level 3 — Bachelor", description: "Market-structure analysis and liquidity concepts, multi-timeframe analysis techniques, and how to interpret high-probability setups from historical chart data." },
      { module: "Level 4 — Master", description: "Options and futures concepts, option chain and open interest reading, and live market analysis with direct mentor guidance and session-by-session review." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Equity Market Analysis", description: "Develop an understanding of price action, market structure and equity-market research." },
      { title: "Technical & Market Analysis", description: "Build foundational skills in chart interpretation, technical analysis and market-structure research." },
      { title: "Financial Market Research", description: "Develop research and analytical skills for studying market data and financial instruments." },
      { title: "Market Research Support Skills", description: "Learn structured approaches to market observation, data interpretation and research documentation." },
      { title: "Financial Education & Content", description: "Apply your market knowledge to educational content, research communication and financial-market learning." },
    ],
    faqs: [
      { question: "Do I need prior stock market knowledge to join this course?", answer: "No. The course starts from absolute basics (Level 1 — Minor) and progressively builds up to advanced market-structure concepts by Level 4." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program structured across 4 levels: Minor, Major, Bachelor, and Master, combining theory, chart practice, and live market analysis sessions." },
      { question: "Will I learn about both Equity and Derivatives markets?", answer: "Yes, this is a combined course covering NSE/BSE Equity market concepts as well as Futures & Options (F&O) derivatives fundamentals." },
      { question: "Is this available in offline and online mode?", answer: "Yes, you can join our offline classroom batches or attend live online classes — both cost ₹35,000 with 10% off on one-shot payment." },
      { question: "What tools will I learn to use during the course?", answer: "You'll learn TradingView for charting, NSE/BSE option chain analysis, and risk-management calculators." },
      { question: "Do I need prior market experience before joining?", answer: "No. The course starts with foundational concepts and progressively introduces equity and derivatives market topics." },
      { question: "How much time do I need to dedicate outside class?", answer: "We recommend 30–45 minutes of daily chart practice in addition to scheduled sessions to reinforce concepts." },
      { question: "Will the course include practical market learning?", answer: "Yes. The course includes chart-based exercises, market-data analysis, case studies and mentor-led discussions using real market data for educational purposes." },
      { question: "Is this course suitable for someone who wants to understand long-term investing concepts?", answer: "Yes, the equity portion specifically covers portfolio concepts and long-term investing principles alongside derivatives fundamentals." },
      { question: "What if I miss a live class?", answer: "All sessions are recorded and available for later access, so you never lose progress due to a missed class." },
    ],
  },

  derivatives: {
    slug: "derivatives",
    seoTitle: "F&O Derivatives Market Education Course | Shrestha IT",
    seoDescription:
      "Structured education in Futures & Options market concepts. Learn options structures, Greeks, risk analytics & market analysis over 2 months. Offline & Online.",
    keywords: [
      "F&O market education course",
      "options market education India",
      "futures market course",
      "derivatives market course",
      "expiry day market analysis",
      "options concepts course",
      "option greeks course",
      "derivatives education for beginners",
    ],
    heroTagline: "Learn Futures & Options Concepts From Foundation to Expiry-Day Analysis",
    overview:
      "This 2-month educational program is a focused course for students who want to specialize purely in learning about Futures & Options. Across 4 levels (Minor, Major, Bachelor, SIT), you'll build a foundation in futures/forward contract concepts, learn options structures and analysis, study quantitative risk concepts, and finish with mentor-led expiry-day market analysis sessions. Unlike broad market courses, every session here is built around the mechanics that actually move an option's premium — strike selection, implied volatility, time decay, and the Greeks — so you understand the concepts behind how options are structured, not just their definitions. You'll practice reading option chains, studying hedging concepts, and understanding risk on leveraged instruments where mistakes can be costly if the underlying concepts aren't understood. The program closes with dedicated expiry-day analysis sessions, historically the most volatile and analytically interesting window in Indian derivatives, giving you exposure to fast-moving market conditions under a mentor's guidance. This course suits learners who already understand basic price charts and want to go deep specifically into derivatives concepts and risk-management principles.",
    whoIsThisFor: [
      "Equity learners who want to specialize further into Futures & Options concepts",
      "Active learners looking to add options analysis to their market knowledge",
      "Finance professionals who need practical derivatives knowledge for their role",
      "Learners who already know basic charting and want to focus purely on F&O concepts",
      "Anyone interested in studying expiry-day market behaviour and risk principles",
    ],
    prerequisites: [
      "Basic familiarity with candlestick charts is helpful but not mandatory",
      "A laptop/smartphone with stable internet for live and chart sessions",
      "Comfort with basic percentages and simple arithmetic for risk-related concepts",
      "Willingness to study option chain data and market examples regularly",
    ],
    topics: [
      "Futures & forward contracts foundation",
      "Options basics — calls, puts, premiums",
      "Options structures & analysis",
      "Option writing concepts & structures",
      "Option Greeks — Delta, Theta, Gamma, Vega",
      "Quantitative techniques & risk analytics",
      "Open interest & option chain reading",
      "Hedging concepts using derivatives",
      "Volatility (India VIX) based market study",
      "Expiry-day market analysis & time decay concepts",
      "Multi-leg option structures (spreads, straddles)",
      "Position-sizing concepts for leveraged instruments",
      "Risk-reward planning principles",
    ],
    tools: [
      "NSE Option Chain & OI analysis tools",
      "TradingView for derivatives charting",
      "Option strategy payoff calculators",
      "Chart & data analysis tools",
      "Volatility (India VIX) tracking tools",
    ],
    courseContent: [
      { module: "Level 1 — Minor", description: "Futures & forward contracts foundation, contract specifications, lot sizes, and margin concepts required before studying any derivative instrument." },
      { module: "Level 2 — Major", description: "Options structures and analysis with hands-on option chain practice, covering premiums, strike selection, and basic Greek behavior." },
      { module: "Level 3 — Bachelor", description: "Quantitative techniques & risk analytics for position-sizing concepts, hedging principles, and reading open interest shifts for directional bias study." },
      { module: "Level 4 — SIT", description: "Advanced market analysis and live expiry-day sessions under mentor guidance, focused on time-decay concepts and volatility-driven analysis." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "F&O Market Analysis", description: "Develop the ability to study futures and options structures using a disciplined, concept-based approach." },
      { title: "Derivatives Research Analyst Skills", description: "Analyze option chain data and volatility trends to build market research capability." },
      { title: "Risk Management Concepts", description: "Apply quantitative risk-analysis techniques to understand leveraged market exposure." },
      { title: "Financial Market Research", description: "Support research and analytical work using derivatives market data and case studies." },
      { title: "Quantitative Market Analysis Skills", description: "Build a foundation for strategy backtesting and data-driven derivatives research." },
    ],
    faqs: [
      { question: "Is this course only about Futures & Options, or does it include Equity too?", answer: "This course is specialized purely in Futures & Options (F&O) derivatives education. For a combined Equity + F&O program, check our Equity & Derivatives Combo course." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Minor, Major, Bachelor, and SIT, moving from futures fundamentals to expiry-day market analysis." },
      { question: "Will I learn how option pricing (Greeks) works?", answer: "Yes, the course covers Option Greeks — Delta, Theta, Gamma, and Vega — along with their practical application in analyzing options structures." },
      { question: "How much does this course cost?", answer: "The course fee is ₹20,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Do you cover expiry-day market analysis?", answer: "Yes, Level 4 (SIT) is dedicated to advanced market analysis and expiry-day sessions, including time-decay and volatility-based concepts." },
      { question: "Do I need prior derivatives knowledge before joining?", answer: "No, Level 1 builds the futures & options foundation from scratch before moving into concept-level content." },
      { question: "Will I learn option-writing concepts, not just buying?", answer: "Yes, Level 2 covers both options-buying and option-writing structures, including the margin and risk concepts of each." },
      { question: "Is this course beginner-friendly if I've never studied options before?", answer: "Yes, Level 1 builds the futures & options foundation from scratch before moving into strategy-level content." },
      { question: "How is risk covered given leverage in F&O instruments?", answer: "Level 3 is dedicated to quantitative risk analytics, position-sizing concepts, and hedging principles specifically for leveraged instruments." },
      { question: "Are the expiry-day sessions live or simulated?", answer: "They are conducted around live market expiry sessions with mentor guidance, so you can study real market volatility and analytical decision-making." },
    ],
  },

  forex: {
    slug: "forex",
    seoTitle: "Forex Market Education Course India | Shrestha IT",
    seoDescription:
      "Structured education in global currency markets. Learn MetaTrader 4, PIP/spread mechanics, technical & sentiment analysis over 2 months. Offline & Online.",
    keywords: [
      "forex market education India",
      "learn forex market concepts",
      "MetaTrader 4 course",
      "currency market education",
      "forex fundamentals for beginners",
      "global currency market course",
      "forex technical analysis course",
    ],
    heroTagline: "Understand Global Currency Markets With Structured Learning",
    overview:
      "This 2-month educational program introduces students to global currency markets across 4 levels (Forex FA, Next Gen, Alpha F, SIT). You'll learn MetaTrader 4 platform mechanics, PIP and spread calculations, fundamental and technical analysis, and sentiment-reading concepts — all with mentor-led group learning sessions. Forex is the world's largest and most liquid financial market, active 24 hours a day across major, minor, and exotic currency pairs, and this course is structured to help you navigate that scale through a step-by-step curriculum. You'll start with platform mechanics and pip/lot mathematics, move into how economic indicators and central bank policy influence currency movement, and layer in technical chart analysis and market-sentiment concepts. By Alpha F level, you're studying short-selling concepts and economic-calendar-based analysis, and the final SIT level puts you into group mentorship sessions analyzing live currency pairs alongside peers and a dedicated mentor. The course is built for anyone who wants exposure to global markets beyond Indian equities, whether as a focused area of study or a broader addition to financial-market knowledge.",
    whoIsThisFor: [
      "Beginners wanting exposure to global currency markets, not just Indian equities",
      "Equity or crypto learners looking to broaden their market knowledge into forex",
      "Working professionals who want to study markets during global trading hours",
      "Anyone interested in macroeconomics-driven market analysis",
      "Learners wanting structured group mentorship rather than solo study",
    ],
    prerequisites: [
      "No prior forex experience required — course starts from platform basics",
      "A laptop with stable internet to run MetaTrader 4 and attend live sessions",
      "Basic English comprehension for reading economic calendar events",
      "Willingness to track global economic news alongside charts",
    ],
    topics: [
      "Forex market structure & currency pairs",
      "MetaTrader 4 platform walkthrough",
      "PIP value & spread mechanics",
      "Lot sizing & leverage concepts",
      "Fundamental analysis — economic indicators",
      "Technical analysis for currency charts",
      "Market sentiment analysis",
      "Short-selling concepts in forex markets",
      "Economic calendar-based market study",
      "Currency correlation & cross-pair analysis",
      "Risk management & leverage-control principles",
      "Market analysis journaling for forex study",
      "Educational trading & group mentorship sessions",
    ],
    tools: [
      "MetaTrader 4 (MT4) trading platform",
      "TradingView for forex charting",
      "Economic calendar tools (Forex Factory)",
      "PIP & lot size calculators",
      "Currency correlation trackers",
    ],
    courseContent: [
      { module: "Level 1 — Forex FA", description: "Currency pair basics, MetaTrader 4 platform setup, and PIP/spread/lot-size mechanics needed before studying live charts." },
      { module: "Level 2 — Next Gen", description: "Fundamental, technical, and sentiment analysis applied to major currency pairs, including how economic indicators move price." },
      { module: "Level 3 — Alpha F", description: "Short-selling concepts and economic calendar-based market study, using high-impact news events to understand price timing." },
      { module: "Level 4 — SIT", description: "Educational trading with group mentorship and live currency market analysis, reviewed session-by-session with a dedicated mentor." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Forex Market Analysis Skills", description: "Study major, minor, and exotic currency pairs using a structured technical and fundamental approach." },
      { title: "Currency Market Analyst Skills", description: "Research and report on currency trends for trading desks or financial media." },
      { title: "Forex Market Education Content", description: "Build educational content around currency-market concepts for a learning community." },
      { title: "Financial Market Research", description: "Support market monitoring and research at a forex-focused organization." },
      { title: "Global Markets Content Creator", description: "Create educational content on currency markets for social and video platforms." },
    ],
    faqs: [
      { question: "Do I need prior market experience to join the Forex course?", answer: "No, the course starts from Forex FA (foundational level) covering currency pair basics before progressing to advanced concepts." },
      { question: "Which trading platform will I learn to use?", answer: "You'll learn MetaTrader 4 (MT4), one of the most widely used forex platforms globally, for study and analysis purposes." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Forex FA, Next Gen, Alpha F, and SIT." },
      { question: "How much does the Forex course cost?", answer: "The course fee is ₹15,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Will I get group mentorship during the course?", answer: "Yes, Level 4 (SIT) includes educational sessions with group mentorship and live currency-market analysis." },
      { question: "Do I need a broker account to start the course?", answer: "Not to begin learning — the course focuses on market concepts, platform mechanics and analysis; we share general guidance on the broader ecosystem where relevant." },
      { question: "Can I study forex alongside a full-time job?", answer: "Yes, forex markets run 24 hours across global sessions, so many students study around their existing work schedule." },
      { question: "Will I understand how economic news affects currency prices?", answer: "Yes, Level 2 covers fundamental analysis and how indicators like interest rates and inflation data influence currency movement." },
      { question: "Are short-selling concepts covered, or only buying?", answer: "Both are covered — Level 3 (Alpha F) is dedicated specifically to short-selling concepts in forex markets." },
      { question: "How is risk covered in forex compared to equity markets?", answer: "Forex involves leverage and currency-specific volatility, which is why risk-management and leverage-control principles are covered throughout the course." },
    ],
  },

  crypto: {
    slug: "crypto",
    seoTitle: "Crypto & Web3 Market Education Course India | Shrestha IT",
    seoDescription:
      "Structured education in crypto markets & Web3 basics. Learn blockchain, altcoin market concepts & risk management over 2 months. Offline & Online.",
    keywords: [
      "crypto market education India",
      "cryptocurrency market course",
      "learn crypto market concepts",
      "blockchain education course",
      "altcoin market analysis course",
      "Web3 course India",
      "crypto risk management course",
    ],
    heroTagline: "Understand Crypto Markets & Web3 Fundamentals",
    overview:
      "This 2-month educational program covers digital-asset market concepts across 4 levels (Coins FA, Next Gen, Alpha Coin, SIT). You'll learn crypto pair mechanics, blockchain fundamentals, market-cycle analysis, altcoin market concepts, leverage and short-selling mechanics, and disciplined risk-management principles for volatile crypto markets. Crypto markets trade continuously and move faster and more sharply than traditional equity or forex markets, so this course places heavy emphasis on risk-management concepts from day one rather than treating them as an afterthought. You'll learn how blockchain and smart contracts actually work before studying market analysis, then progress into reading market cycles, identifying altcoin trends, and understanding exchange order types correctly. By Alpha Coin level, you're studying leverage and short-selling mechanics under strict position-sizing principles, and the final SIT level focuses on risk and reward-management concepts — the discipline layer that separates informed market participants from those caught off-guard by volatility. The course also introduces Web3 and DeFi fundamentals so you understand the broader ecosystem behind the assets you study, not just their price charts.",
    whoIsThisFor: [
      "Beginners curious about crypto markets and blockchain technology",
      "Equity or forex learners wanting to broaden their knowledge into digital assets",
      "Anyone wanting to understand Web3/DeFi fundamentals, not just market analysis",
      "Learners who want structured risk-management concepts for high-volatility assets",
      "Students and professionals exploring crypto as an area of financial-market study",
    ],
    prerequisites: [
      "No prior crypto or blockchain knowledge required — course starts from basics",
      "A laptop/smartphone with stable internet for exchange platform demos and live sessions",
      "Basic comfort with percentages for position-sizing and leverage-related concepts",
      "A risk-first mindset given the high volatility of crypto assets",
    ],
    topics: [
      "Cryptocurrency pairs & blockchain basics",
      "How blockchain & smart contracts work",
      "Market cycles & altcoin market concepts",
      "Leverage market mechanics",
      "Short-selling concepts in crypto markets",
      "Risk management for volatile assets",
      "Crypto exchange order types",
      "Portfolio allocation concepts across coins",
      "Web3 & DeFi fundamentals",
      "On-chain analysis basics",
      "Stablecoins & their role in the market",
      "Avoiding common crypto scams & security practices",
      "Risk & reward-management concepts",
    ],
    tools: [
      "Crypto exchange platforms (Binance, CoinDCX, WazirX)",
      "TradingView for crypto charting",
      "On-chain analytics tools",
      "Leverage & liquidation calculators",
      "Portfolio tracking apps",
    ],
    courseContent: [
      { module: "Level 1 — Coins FA", description: "Crypto currency pairs, blockchain and smart contract basics, and a full walkthrough of understanding exchange platforms safely." },
      { module: "Level 2 — Next Gen", description: "Market-cycle analysis and altcoin market concepts for identifying trend patterns across bull and bear phases." },
      { module: "Level 3 — Alpha Coin", description: "Leverage and short-selling mechanics with strict, risk-controlled position-sizing principles to understand crypto's high volatility." },
      { module: "Level 4 — SIT", description: "Risk management and reward-management concepts with live market study, focused on capital-preservation principles and disciplined analysis." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Crypto Market Analysis Skills", description: "Study digital-asset markets using structured risk-management and market-cycle-based analysis." },
      { title: "Digital Asset Research Skills", description: "Research coins, tokens, and blockchain projects for crypto media or research work." },
      { title: "Web3 / Blockchain Education", description: "Teach blockchain and Web3 fundamentals to a growing community of learners." },
      { title: "Crypto Market Research Support", description: "Support diversified crypto-market research with disciplined allocation and risk concepts." },
      { title: "Crypto Content Creator", description: "Build an audience creating market-analysis and blockchain education content." },
    ],
    faqs: [
      { question: "Do I need to know blockchain technology before joining?", answer: "No, the course covers blockchain and cryptocurrency basics from Level 1 (Coins FA) before moving to market-analysis concepts." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Coins FA, Next Gen, Alpha Coin, and SIT." },
      { question: "Will I learn about leverage and short-selling concepts in crypto?", answer: "Yes, Level 3 (Alpha Coin) specifically covers leverage-market mechanics and short-selling concepts with risk-management principles." },
      { question: "How much does the Crypto course cost?", answer: "The course fee is ₹15,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Is crypto market analysis covered along with Web3 basics?", answer: "Yes, alongside market-analysis concepts, the course introduces Web3 and DeFi fundamentals to help you understand the broader crypto ecosystem." },
      { question: "Which exchanges will I learn about?", answer: "You'll study platforms like Binance, CoinDCX, and WazirX, covering order types and general account concepts." },
      { question: "Is crypto too risky a topic for a beginner to study?", answer: "Crypto markets are volatile, which is why the course places heavy emphasis on risk-management concepts and position-sizing starting from Level 3." },
      { question: "Will I learn how to identify crypto scams?", answer: "Yes, the course includes guidance on identifying common scams and following security best practices when studying and holding digital assets." },
      { question: "Do I need a large amount of capital to study this course?", answer: "No, the course teaches position-sizing and portfolio-allocation concepts so you can study these principles with any amount of capital." },
      { question: "What is covered in the final SIT level?", answer: "Level 4 focuses on risk and reward-management concepts with live market study, helping you approach markets with discipline rather than emotion." },
    ],
  },
};

export function getCourseContent(slug: string): CourseDetailContent | undefined {
  return COURSE_CONTENT[slug];
}
