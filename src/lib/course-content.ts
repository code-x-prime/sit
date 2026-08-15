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
    seoTitle: "Equity + Derivatives Trading Course in Delhi | Shrestha IT",
    seoDescription:
      "Master NSE/BSE Equity & F&O Derivatives trading in 2 months. Learn SMC, order blocks, options strategies with live market execution. Offline & Online batches.",
    keywords: [
      "equity trading course",
      "derivatives trading course India",
      "NSE BSE trading course",
      "F&O trading course",
      "stock market course Delhi",
      "SMC trading course",
      "learn stock market trading",
      "smart money concepts course",
      "stock market crash course",
    ],
    heroTagline: "From Candlestick Basics to Institutional Order Flow",
    overview:
      "This Stock Market Crash Course is built for traders who want a single, complete program covering both Indian Equity investing and Futures & Options trading. Over 2 months, across 4 progressive levels (Minor, Major, Bachelor, Master), you'll go from understanding how a candle forms to executing institutional-grade Smart Money Concepts (SMC), Fair Value Gaps (FVG), and order block strategies in live markets. Every level combines theory sessions with hands-on chart practice on real NSE/BSE data, so concepts are tested immediately rather than left abstract. By the time you reach the Master level, you'll be reading option chains, sizing positions with proper risk-reward, and executing trades under the direct supervision of a dedicated mentor. The course is designed for both long-term equity investors who want a structured research process and active F&O traders who need a repeatable, rules-based system instead of guesswork. Graduates leave with a documented trading journal, a tested strategy playbook, and the confidence to operate independently in live Indian markets across both cash and derivatives segments.",
    whoIsThisFor: [
      "Complete beginners who have never opened a trading terminal before",
      "Working professionals who want a part-time skill in equity & F&O trading",
      "Existing traders looking to add institutional SMC/FVG concepts to their strategy",
      "Finance, commerce & B.Com/MBA students building a market-ready skillset",
      "Long-term investors who also want to actively trade derivatives for income",
    ],
    prerequisites: [
      "No prior stock market experience required — course starts from absolute basics",
      "A laptop or smartphone with a stable internet connection for online/chart sessions",
      "Basic comfort with numbers and percentages (no advanced maths needed)",
      "A demat & trading account (help provided during the course if you don't have one)",
      "Willingness to practice on charts daily outside class hours",
    ],
    topics: [
      "How candles work — price action fundamentals",
      "Support, resistance & trend structure",
      "Advanced Smart Money Concepts (SMC)",
      "Fair Value Gaps (FVG) & liquidity zones",
      "Institutional order blocks & entry timing",
      "Liquidity grab & stop-hunt strategies",
      "Futures contracts & margin mechanics",
      "Options buying & selling strategies",
      "Option chain & open interest analysis",
      "Risk management & position sizing",
      "Portfolio building for long-term equity investing",
      "Multi-timeframe trend confirmation",
      "Trade journaling & performance review",
      "Market psychology & discipline building",
      "Live market trade execution with mentor supervision",
    ],
    tools: [
      "TradingView (chart analysis & strategy testing)",
      "NSE/BSE option chain tools",
      "Broker terminals (Zerodha Kite, Upstox, Angel One)",
      "Risk-reward & position size calculators",
      "Market sentiment & FII/DII data trackers",
    ],
    courseContent: [
      { module: "Level 1 — Minor", description: "Market basics, how candlesticks are formed, chart types, and how raw price data becomes a tradable chart. Covers support/resistance, trend structure, and the mindset needed before risking real capital." },
      { module: "Level 2 — Major", description: "Advanced Smart Money Concepts (SMC), Fair Value Gaps (FVG), and order block identification using real NSE/BSE chart examples, taught through guided practice on live and historical data." },
      { module: "Level 3 — Bachelor", description: "Institutional entry timing and liquidity-grab strategy, multi-timeframe confirmation techniques, and how to filter high-probability setups from market noise." },
      { module: "Level 4 — Master", description: "Futures & Options buying/selling strategies, option chain and open interest reading, and live trade execution with direct mentor supervision and trade-by-trade feedback." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Independent Equity & F&O Trader", description: "Trade your own capital in cash and derivatives segments using a structured, rules-based strategy." },
      { title: "Technical Analyst", description: "Analyze charts and market structure professionally for research desks, advisory firms, or content platforms." },
      { title: "Trading Desk Associate at brokerages", description: "Support dealing desks with trade execution, monitoring, and client order flow." },
      { title: "Portfolio Research Assistant", description: "Assist analysts and fund managers with equity screening, sector research, and portfolio tracking." },
      { title: "Financial Content Creator / Market Educator", description: "Build an audience teaching equity and derivatives concepts across social and video platforms." },
    ],
    faqs: [
      { question: "Do I need prior stock market knowledge to join this course?", answer: "No. The course starts from absolute basics (Level 1 — Minor) and progressively builds up to advanced institutional strategies by Level 4." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program structured across 4 levels: Minor, Major, Bachelor, and Master, combining theory, chart practice, and live market sessions." },
      { question: "Will I learn both Equity investing and F&O trading?", answer: "Yes, this is a combined course covering NSE/BSE Equity investing as well as Futures & Options (F&O) derivatives trading strategies." },
      { question: "Is this available in offline and online mode?", answer: "Yes, you can join our offline classroom batches or attend live online classes — both cost ₹35,000 with 10% off on one-shot payment." },
      { question: "What tools will I learn to use during the course?", answer: "You'll learn TradingView for charting, NSE/BSE option chain analysis, broker terminals like Zerodha Kite and Upstox, and risk-reward calculators." },
      { question: "Do I need a demat account before joining?", answer: "No, you can join without one — we guide you through opening a demat & trading account during the course." },
      { question: "How much time do I need to dedicate outside class?", answer: "We recommend 30–45 minutes of daily chart practice in addition to scheduled sessions to reinforce concepts." },
      { question: "Will I get real trading experience, not just theory?", answer: "Yes, Level 4 (Master) is dedicated to live market trade execution with a mentor reviewing your trades in real time." },
      { question: "Is this course suitable for someone who wants to invest long-term, not just trade?", answer: "Yes, the equity portion specifically covers portfolio building and long-term investing alongside active F&O strategies." },
      { question: "What if I miss a live class?", answer: "All sessions are recorded and available for later access, so you never lose progress due to a missed class." },
    ],
  },

  derivatives: {
    slug: "derivatives",
    seoTitle: "F&O Options Trading Course India | Shrestha IT",
    seoDescription:
      "Specialize in Futures & Options with Shrestha IT's 2-month F&O course. Learn options buying/selling, Greeks, risk analytics & expiry-day setups. Offline & Online.",
    keywords: [
      "F&O trading course",
      "options trading course India",
      "futures trading course",
      "derivatives market course",
      "expiry day trading strategy",
      "options buying selling course",
      "option greeks course",
      "options trading for beginners",
    ],
    heroTagline: "Master Futures & Options From Foundation to Expiry-Day Execution",
    overview:
      "The Indian Derivatives Market Trading course is a focused 2-month program for traders who want to specialize purely in Futures & Options. Across 4 levels (Minor, Major, Bachelor, SIT), you'll build a foundation in futures/forward contracts, learn options buying and selling strategies, apply quantitative risk analytics, and finish with mentor-led expiry-day trade setups. Unlike broad market courses, every session here is built around the mechanics that actually move an option's premium — strike selection, implied volatility, time decay, and the Greeks — so you understand why a trade works, not just how to place it. You'll practice reading live option chains, structuring hedges, and managing risk on leveraged positions where mistakes are expensive if left unchecked. The program closes with dedicated expiry-day sessions, historically the most volatile and opportunity-rich trading window in Indian derivatives, giving you direct exposure to high-frequency decision-making under a mentor's guidance. This course suits traders who already understand basic price charts and want to go deep specifically into derivatives strategy and risk management.",
    whoIsThisFor: [
      "Equity traders who want to specialize further into Futures & Options",
      "Active traders looking to add options income strategies to their portfolio",
      "Finance professionals who need practical derivatives knowledge for their role",
      "Traders who already know basic charting and want to focus purely on F&O",
      "Anyone preparing to trade expiry-day setups with proper risk controls",
    ],
    prerequisites: [
      "Basic familiarity with candlestick charts is helpful but not mandatory",
      "A laptop/smartphone with stable internet for live and chart sessions",
      "A demat & trading account with F&O segment enabled (or willingness to set one up)",
      "Comfort with basic percentages and simple arithmetic for risk calculations",
      "Sufficient trading capital to safely practice with proper position sizing",
    ],
    topics: [
      "Futures & forward contracts foundation",
      "Options basics — calls, puts, premiums",
      "Options buying strategies",
      "Options selling (writing) strategies",
      "Option Greeks — Delta, Theta, Gamma, Vega",
      "Quantitative techniques & risk analytics",
      "Open interest & option chain reading",
      "Hedging strategies using derivatives",
      "Volatility (India VIX) based trade planning",
      "Expiry-day trade setups & time decay plays",
      "Multi-leg option strategies (spreads, straddles)",
      "Position sizing for leveraged instruments",
      "Master trade setup & risk-reward planning",
    ],
    tools: [
      "NSE Option Chain & OI analysis tools",
      "TradingView for derivatives charting",
      "Option strategy payoff calculators",
      "Broker F&O terminals (Zerodha, Upstox, Angel One)",
      "Volatility (India VIX) tracking tools",
    ],
    courseContent: [
      { module: "Level 1 — Minor", description: "Futures & forward contracts foundation, contract specifications, lot sizes, and margin basics required before trading any derivative instrument." },
      { module: "Level 2 — Major", description: "Options buying & selling strategies with hands-on option chain practice, covering premiums, strike selection, and basic Greek behavior." },
      { module: "Level 3 — Bachelor", description: "Quantitative techniques & risk analytics for position sizing, hedging existing exposure, and reading open interest shifts for directional bias." },
      { module: "Level 4 — SIT", description: "Master trade setup & live expiry-day trades under mentor supervision, focused on time decay plays and volatility-driven strategy selection." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "F&O / Options Trader", description: "Trade futures and options independently using structured strategies and disciplined risk management." },
      { title: "Derivatives Research Analyst", description: "Analyze option chain data and volatility trends to support institutional or retail trading desks." },
      { title: "Risk Management Associate", description: "Apply quantitative risk techniques to monitor and control leveraged trading exposure." },
      { title: "Trading Desk Associate at brokerages", description: "Assist with F&O order execution and client support at brokerage trading desks." },
      { title: "Quantitative Trading Assistant", description: "Support strategy backtesting and data-driven derivatives research roles." },
    ],
    faqs: [
      { question: "Is this course only about Futures & Options, or does it include Equity too?", answer: "This course is specialized purely in Futures & Options (F&O) derivatives trading. For a combined Equity + F&O program, check our Equity & Derivatives Combo course." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Minor, Major, Bachelor, and SIT, moving from futures basics to expiry-day trade execution." },
      { question: "Will I learn how option pricing (Greeks) works?", answer: "Yes, the course covers Option Greeks — Delta, Theta, Gamma, and Vega — along with practical application in trade setups." },
      { question: "How much does this course cost?", answer: "The course fee is ₹20,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Do you cover expiry-day trading strategies?", answer: "Yes, Level 4 (SIT) is dedicated to master trade setups and expiry-day trades, including time decay and volatility-based strategies." },
      { question: "Do I need a demat account with F&O enabled before joining?", answer: "It helps but isn't mandatory on day one — we guide you through enabling the F&O segment during the early sessions." },
      { question: "Will I learn option selling (writing) strategies, not just buying?", answer: "Yes, Level 2 covers both buying and selling (writing) strategies, including the margin and risk implications of each." },
      { question: "Is this course beginner-friendly if I've never traded options before?", answer: "Yes, Level 1 builds the futures & options foundation from scratch before moving into strategy-level content." },
      { question: "How is risk managed given leverage in F&O trading?", answer: "Level 3 is dedicated to quantitative risk analytics, position sizing, and hedging techniques specifically for leveraged instruments." },
      { question: "Are the expiry-day sessions live or simulated?", answer: "They are conducted around live market expiry sessions with mentor supervision, so you experience real volatility and decision-making pressure." },
    ],
  },

  forex: {
    slug: "forex",
    seoTitle: "Forex Trading Course India | Global Currency | Shrestha IT",
    seoDescription:
      "Learn Forex trading in 2 months with Shrestha IT. Master MetaTrader 4, PIP/spread mechanics, technical & sentiment analysis, short selling. Offline & Online.",
    keywords: [
      "forex trading course India",
      "learn forex trading",
      "MetaTrader 4 course",
      "currency trading course",
      "forex trading for beginners",
      "global currency trading",
      "forex technical analysis course",
    ],
    heroTagline: "Trade Global Currency Markets With Confidence",
    overview:
      "The Forex Market Trading course takes you into global currency markets across 4 levels (Forex FA, Next Gen, Alpha F, SIT) over 2 months. You'll learn MetaTrader 4 platform mechanics, PIP and spread calculations, fundamental and technical analysis, sentiment reading, and short-selling strategies — all with mentored group trading sessions. Forex is the world's largest and most liquid financial market, trading 24 hours a day across major, minor, and exotic currency pairs, and this course is structured to help you navigate that scale without getting overwhelmed. You'll start with platform mechanics and pip/lot mathematics, move into how economic indicators and central bank policy drive currency moves, and layer in technical chart analysis and market sentiment reading. By Alpha F level, you're applying short-selling and economic-calendar-based strategies, and the final SIT level puts you into group mentorship sessions trading live currency pairs alongside peers and a dedicated mentor. The course is built for anyone who wants exposure to global markets beyond Indian equities, whether as a full trading focus or a diversification alongside other instruments.",
    whoIsThisFor: [
      "Beginners wanting exposure to global currency markets, not just Indian equities",
      "Equity or crypto traders looking to diversify into forex",
      "Working professionals who want to trade during global market hours",
      "Anyone interested in macroeconomics-driven trading strategies",
      "Traders wanting structured group mentorship rather than solo learning",
    ],
    prerequisites: [
      "No prior forex experience required — course starts from platform basics",
      "A laptop with stable internet to run MetaTrader 4 and attend live sessions",
      "Basic English comprehension for reading economic calendar events",
      "An international forex broker account (setup guidance provided)",
      "Willingness to track global economic news alongside charts",
    ],
    topics: [
      "Forex market structure & currency pairs",
      "MetaTrader 4 platform walkthrough",
      "PIP value & spread mechanics",
      "Lot sizing & leverage management",
      "Fundamental analysis — economic indicators",
      "Technical analysis for currency charts",
      "Market sentiment analysis",
      "Short selling in forex markets",
      "Economic calendar-based trading",
      "Currency correlation & cross-pair analysis",
      "Risk management & leverage control",
      "Trade journaling for forex strategies",
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
      { module: "Level 1 — Forex FA", description: "Currency pair basics, MetaTrader 4 platform setup, and PIP/spread/lot-size mechanics needed before placing your first trade." },
      { module: "Level 2 — Next Gen", description: "Fundamental, technical, and sentiment analysis applied to major currency pairs, including how economic indicators move price." },
      { module: "Level 3 — Alpha F", description: "Short selling strategies and economic calendar-based trade planning, using high-impact news events to time entries." },
      { module: "Level 4 — SIT", description: "Educational trading with group mentorship and live currency trade execution, reviewed session-by-session with a dedicated mentor." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Independent Forex Trader", description: "Trade major, minor, and exotic currency pairs using a structured technical and fundamental approach." },
      { title: "Currency Market Analyst", description: "Research and report on currency trends for trading desks or financial media." },
      { title: "Forex Signal Provider", description: "Build a track record and share trade setups with a community of forex traders." },
      { title: "Trading Desk Associate (Forex Brokerages)", description: "Support client execution and market monitoring at a forex brokerage." },
      { title: "Global Markets Content Creator", description: "Create educational content on currency markets for social and video platforms." },
    ],
    faqs: [
      { question: "Do I need prior trading experience to join the Forex course?", answer: "No, the course starts from Forex FA (foundational level) covering currency pair basics before progressing to advanced strategies." },
      { question: "Which trading platform will I learn to use?", answer: "You'll learn MetaTrader 4 (MT4), one of the most widely used forex trading platforms globally." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Forex FA, Next Gen, Alpha F, and SIT." },
      { question: "How much does the Forex course cost?", answer: "The course fee is ₹15,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Will I get group mentorship during the course?", answer: "Yes, Level 4 (SIT) includes educational trading sessions with group mentorship and live currency market execution." },
      { question: "Do I need an international broker account to start?", answer: "You'll need one to trade live, and we provide guidance on choosing and setting up a suitable forex broker." },
      { question: "Can I trade forex alongside a full-time job?", answer: "Yes, forex markets run 24 hours across global sessions, so many students trade around their existing work schedule." },
      { question: "Will I understand how economic news affects currency prices?", answer: "Yes, Level 2 covers fundamental analysis and how indicators like interest rates and inflation data drive currency moves." },
      { question: "Is short selling covered, or only buying currencies?", answer: "Both are covered — Level 3 (Alpha F) is dedicated specifically to short-selling strategies in forex markets." },
      { question: "How is risk different in forex compared to equity trading?", answer: "Forex involves leverage and currency-specific volatility, which is why risk management and leverage control are covered throughout the course." },
    ],
  },

  crypto: {
    slug: "crypto",
    seoTitle: "Crypto Trading Course India | Crypto & Web3 | Shrestha IT",
    seoDescription:
      "Learn crypto trading & Web3 basics in 2 months with Shrestha IT. Master blockchain, altcoin strategy, leverage trading & risk management. Offline & Online.",
    keywords: [
      "crypto trading course India",
      "cryptocurrency trading course",
      "learn crypto trading",
      "blockchain trading course",
      "altcoin trading strategy",
      "Web3 course India",
      "crypto leverage trading course",
    ],
    heroTagline: "Trade Crypto Markets & Understand Web3 Fundamentals",
    overview:
      "The Cryptocurrency Market Trading course covers digital asset trading across 4 levels (Coins FA, Next Gen, Alpha Coin, SIT) over 2 months. You'll learn crypto pair mechanics, blockchain fundamentals, market cycle analysis, altcoin strategy, leverage and short-selling mechanics, and disciplined risk management for volatile crypto markets. Crypto markets trade continuously and move faster and more sharply than traditional equity or forex markets, so this course places heavy emphasis on risk control from day one rather than treating it as an afterthought. You'll learn how blockchain and smart contracts actually work before touching trading strategy, then progress into reading market cycles, identifying altcoin opportunities, and using exchange order types correctly. By Alpha Coin level, you're working with leverage and short-selling mechanics under strict position-sizing rules, and the final SIT level focuses on money and reward management — the discipline layer that separates consistent crypto traders from those wiped out by volatility. The course also introduces Web3 and DeFi fundamentals so you understand the broader ecosystem behind the assets you trade, not just their price charts.",
    whoIsThisFor: [
      "Beginners curious about crypto trading and blockchain technology",
      "Equity or forex traders wanting to diversify into digital assets",
      "Anyone wanting to understand Web3/DeFi fundamentals, not just trading",
      "Traders who want structured risk management for high-volatility assets",
      "Young professionals and students exploring crypto as an active income stream",
    ],
    prerequisites: [
      "No prior crypto or blockchain knowledge required — course starts from basics",
      "A laptop/smartphone with stable internet for exchange platforms and live sessions",
      "A KYC-verified account on a crypto exchange (setup guidance provided)",
      "Basic comfort with percentages for position sizing and leverage calculations",
      "A risk-first mindset given the high volatility of crypto assets",
    ],
    topics: [
      "Cryptocurrency pairs & blockchain basics",
      "How blockchain & smart contracts work",
      "Market cycles & altcoin strategy",
      "Leverage trading mechanics",
      "Short selling in crypto markets",
      "Risk management for volatile assets",
      "Crypto exchange order types",
      "Portfolio allocation across coins",
      "Web3 & DeFi fundamentals",
      "On-chain analysis basics",
      "Stablecoins & their role in trading",
      "Avoiding common crypto scams & security practices",
      "Money & reward management strategy",
    ],
    tools: [
      "Crypto exchange platforms (Binance, CoinDCX, WazirX)",
      "TradingView for crypto charting",
      "On-chain analytics tools",
      "Leverage & liquidation calculators",
      "Portfolio tracking apps",
    ],
    courseContent: [
      { module: "Level 1 — Coins FA", description: "Crypto currency pairs, blockchain and smart contract basics, and a full walkthrough of setting up and using exchange platforms safely." },
      { module: "Level 2 — Next Gen", description: "Market cycle analysis and altcoin strategy for identifying trend opportunities across bull and bear phases." },
      { module: "Level 3 — Alpha Coin", description: "Leverage and short-selling mechanics with strict, risk-controlled position sizing to manage crypto's high volatility." },
      { module: "Level 4 — SIT", description: "Risk management and money/reward strategy with live market practice, focused on capital preservation and consistent execution." },
    ],
    courseMode: ["Offline Classroom (Delhi Campus)", "Online Live Interactive Classes", "Recorded Session Access", "1-on-1 Mentor Doubt Support"],
    careerOpportunities: [
      { title: "Independent Crypto Trader", description: "Trade digital assets using structured risk management and market-cycle-based strategy." },
      { title: "Digital Asset Research Analyst", description: "Research coins, tokens, and blockchain projects for trading desks or crypto media." },
      { title: "Web3 / Blockchain Enthusiast Educator", description: "Teach blockchain and Web3 fundamentals to a growing community of learners." },
      { title: "Crypto Portfolio Manager (Personal/Client)", description: "Manage diversified crypto portfolios with disciplined allocation and risk controls." },
      { title: "Crypto Content Creator", description: "Build an audience creating trading and blockchain education content." },
    ],
    faqs: [
      { question: "Do I need to know blockchain technology before joining?", answer: "No, the course covers blockchain and cryptocurrency basics from Level 1 (Coins FA) before moving to trading strategies." },
      { question: "What is the duration and structure of this course?", answer: "It's a 2-month program across 4 levels: Coins FA, Next Gen, Alpha Coin, and SIT." },
      { question: "Will I learn leverage and short-selling in crypto?", answer: "Yes, Level 3 (Alpha Coin) specifically covers leverage trading and short-selling mechanics with risk controls." },
      { question: "How much does the Crypto course cost?", answer: "The course fee is ₹15,000 for both offline and online batches, with 10% off on one-shot payment." },
      { question: "Is crypto trading covered along with Web3 basics?", answer: "Yes, alongside trading strategy, the course introduces Web3 and DeFi fundamentals to help you understand the broader crypto ecosystem." },
      { question: "Which exchanges will I learn to trade on?", answer: "You'll practice on platforms like Binance, CoinDCX, and WazirX, covering order types and account setup." },
      { question: "Is crypto trading too risky for a beginner?", answer: "Crypto is volatile, which is why the course places heavy emphasis on risk management and position sizing starting from Level 3." },
      { question: "Will I learn how to avoid crypto scams?", answer: "Yes, the course includes guidance on identifying common scams and following security best practices when trading and holding assets." },
      { question: "Do I need a large amount of capital to start?", answer: "No, the course teaches position sizing and portfolio allocation so you can start small and scale responsibly." },
      { question: "What is covered in the final SIT level?", answer: "Level 4 focuses on money and reward management strategy with live market practice, helping you trade with discipline rather than emotion." },
    ],
  },
};

export function getCourseContent(slug: string): CourseDetailContent | undefined {
  return COURSE_CONTENT[slug];
}
