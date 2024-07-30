import crypto from "../../assets/crypto.webp";
import telegram from "../../assets/telegram.webp";
import honey from "../../assets/honey.svg";
import kol from "../../assets/kol.jpg";

export interface Quest {
  name: string;
  honey: number;
  pic: string;
}

export const quests: Quest[] = [
  { name: "Crypto Investment", honey: 5000, pic: crypto },
  { name: "Telegram Game Recommend", honey: 5000, pic: telegram },
  { name: "FHE & DataHoney Introduction", honey: 1000, pic: honey },
  { name: "Pick Your Favourite KOL", honey: 5000, pic: kol },
];

export interface QuestionData {
  id: string;
  question: string;
  options: string[];
}

export const questionsData: { [key: string]: QuestionData[] } = {
  "Crypto Investment": [
    {
      id: "crypto-experience",
      question: "How long have you been investing in cryptocurrencies?",
      options: ["Less than 6 months", "6-12 months", "1-3 years", "More than 3 years"],
    },
    {
      id: "preferred-crypto",
      question: "What's your preferred cryptocurrency?",
      options: ["Bitcoin", "Ethereum", "Solana", "Different Memes"],
    },
    {
      id: "trading-frequency",
      question: "How often do you trade crypto?",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
    },
    {
      id: "investment-amount",
      question: "What's your typical investment amount in crypto?",
      options: ["Less than $100", "$100-$1,000", "$1,000-$10,000", "More than $10,000"],
    },
    {
      id: "risk-tolerance",
      question: "How would you describe your risk tolerance for crypto investments?",
      options: ["Very low", "Low", "Moderate", "High", "Very high"],
    },
  ],
  "Telegram Game Recommend": [
    {
      id: "game-types",
      question: "What types of games do you enjoy playing on Telegram?",
      options: ["Puzzle", "Strategy", "Action", "Social"],
    },
    {
      id: "play-frequency",
      question: "How often do you play games on Telegram?",
      options: ["Multiple times a day", "Once a day", "A few times a week", "Rarely"],
    },
    {
      id: "game-aim",
      question: "What's your primary aim to join one telegram game?",
      options: ["To relax", "To earn rewards", "To meet new people"],
    },
    {
      id: "monetization",
      question: "What's your opinion on in-game purchases in Telegram games?",
      options: ["I'm willing to pay for extra features", "I prefer completely free games", "It depends on the game"],
    },
  ],
  "FHE & DataHoney Introduction": [
    {
      id: "fhe-definition",
      question: "What does FHE stand for?",
      options: ["Fully Homomorphic Encryption"],
    },
    {
      id: "fhe-use",
      question: "What is a primary use case for FHE?",
      options: ["Processing encrypted data without decryption"],
    },
    {
      id: "datahoney-purpose",
      question: "What is DataHoney?",
      options: ["The first FHE Telegram Miniapp"],
    },
    {
      id: "2PM-Network",
      question: "Who develops DataHoney?",
      options: ["2PM.Network"],
    },
  ],
  "Pick Your Favourite KOL": [
    {
      id: "kol-platform",
      question: "On which platform do you primarily follow KOLs?",
      options: ["X (Twitter)", "YouTube", "TikTok"],
    },
    {
      id: "kol-category",
      question: "Who is your favourite crypto KOL?",
      options: ["Elon Musk", "Vitalik Buterin", "CryptoWendyO", "Hongkong Doll"],
    },
    {
      id: "kol-content-type",
      question: "What type of content do you prefer from KOLs?",
      options: ["Informative/Educational", "Entertainment", "Personal Vlogs", "Industry News"],
    },
    {
      id: "kol-influence",
      question: "How much do KOLs influence your purchasing decisions?",
      options: ["Very much", "Somewhat", "Not much", "Not at all"],
    },
  ],
};
