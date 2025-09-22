import { useLanguage } from '@/contexts/LanguageContext';

export interface TranslationContent {
  malayalam: string;
  english: string;
}

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (content: TranslationContent): string => {
    return content[language];
  };

  const isMalayalam = language === 'malayalam';
  const isEnglish = language === 'english';

  return { t, isMalayalam, isEnglish, language };
};

// Common translations for the app
export const translations = {
  appTitle: {
    malayalam: 'ഡിജിറ്റൽ കൃഷി ഓഫീസർ',
    english: 'Digital Krishi Officer'
  },
  appSubtitle: {
    malayalam: 'എന്റെ കൃഷി സഹായി',
    english: 'Your Personal AI Farming Assistant'
  },
  getStarted: {
    malayalam: 'ആരംഭിക്കുക',
    english: 'Get Started'
  },
  askQuestion: {
    malayalam: 'ചോദ്യം ചോദിക്കുക',
    english: 'Ask Question'
  },
  uploadSoilReport: {
    malayalam: 'മണ്ണ് റിപ്പോർട്ട്',
    english: 'Upload Soil Report'
  },
  cropImage: {
    malayalam: 'വിള ചിത്രം',
    english: 'Crop Image'
  },
  marketPrices: {
    malayalam: 'മാർക്കറ്റ് വില',
    english: 'Market Prices'
  },
  startFarmingJourney: {
    malayalam: 'കൃഷി യാത്ര തുടങ്ങുക',
    english: 'Start Farming Journey'
  },
  uploadCropImage: {
    malayalam: 'വിള ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    english: 'Upload Crop Image'
  },
  howItHelps: {
    malayalam: 'എങ്ങനെ സഹായിക്കുന്നു',
    english: 'How Digital Krishi Officer Helps You'
  },
  successStories: {
    malayalam: 'വിജയ കഥകൾ',
    english: 'Success Stories from Fellow Farmers'
  },
  aiWorkflow: {
    malayalam: 'AI വർക്ക്ഫ്ലോ',
    english: 'Our Multi-Layer AI System'
  },
  startToday: {
    malayalam: 'ഇന്നേ തുടങ്ങുക',
    english: 'Start Your Smart Farming Journey Today'
  },
  createFarmProfile: {
    malayalam: 'ഫാം പ്രൊഫൈൽ സൃഷ്ടിക്കുക',
    english: 'Create Farm Profile'
  },
  askFirstQuestion: {
    malayalam: 'നിങ്ങളുടെ ആദ്യ ചോദ്യം ചോദിക്കുക',
    english: 'Ask Your First Question'
  },
  // Dashboard
  dashboard: {
    malayalam: 'ഡാഷ്ബോർഡ്',
    english: 'Dashboard'
  },
  welcome: {
    malayalam: 'നമസ്കാരം',
    english: 'Welcome'
  },
  welcomeBack: {
    malayalam: 'തിരികെ വന്നതിൽ സന്തോഷം! ഇന്നത്തെ നിങ്ങളുടെ ഫാം അവലോകനം ഇതാ.',
    english: 'Welcome back! Here is your farm overview for today.'
  },
  todaysWeather: {
    malayalam: 'ഇന്നത്തെ കാലാവസ്ഥ',
    english: 'Today\'s Weather'
  },
  uploadImage: {
    malayalam: 'ചിത്രം അപ്ലോഡ്',
    english: 'Upload Image'
  },
  logActivity: {
    malayalam: 'പ്രവർത്തനം രേഖപ്പെടുത്തുക',
    english: 'Log Activity'
  },
  alerts: {
    malayalam: 'മുന്നറിയിപ്പുകൾ',
    english: 'Alerts'
  },
  cropHealth: {
    malayalam: 'വിള ആരോഗ്യം',
    english: 'Crop Health'
  },
  upcomingActivities: {
    malayalam: 'വരാനിരിക്കുന്ന പ്രവർത്തനങ്ങൾ',
    english: 'Upcoming Activities'
  },
  viewAllActivities: {
    malayalam: 'എല്ലാ പ്രവർത്തനങ്ങളും കാണുക',
    english: 'View All Activities'
  },
  viewAllPrices: {
    malayalam: 'എല്ലാ വിലകളും കാണുക',
    english: 'View All Prices'
  },
  overallHealth: {
    malayalam: 'മൊത്തത്തിലുള്ള ആരോഗ്യം',
    english: 'Overall Health'
  },
  growthRate: {
    malayalam: 'വളർച്ചാ നിരക്ക്',
    english: 'Growth Rate'
  },
  nutritionLevel: {
    malayalam: 'പോഷകാഹാര നില',
    english: 'Nutrition Level'
  },
  pestResistance: {
    malayalam: 'കീട പ്രതിരോധം',
    english: 'Pest Resistance'
  },
  heavyRainAlert: {
    malayalam: 'കനത്ത മഴ മുന്നറിയിപ്പ്',
    english: 'Heavy Rain Alert'
  },
  heavyRainMessage: {
    malayalam: 'നാളെ കനത്ത മഴ പ്രതീക്ഷിക്കുന്നു. കീടനാശിനി തളിക്കുന്നത് ഒഴിവാക്കുക.',
    english: 'Heavy rain expected tomorrow. Avoid pesticide spraying.'
  },
  pestOutbreakNearby: {
    malayalam: 'സമീപത്ത് കീട ബാധ',
    english: 'Pest Outbreak Nearby'
  },
  pestOutbreakMessage: {
    malayalam: '5 കിലോമീറ്റർ അകലെ ഇലപ്പുള്ളി രോഗം റിപ്പോർട്ട് ചെയ്തു. നിങ്ങളുടെ വിളകൾ നിരീക്ഷിക്കുക.',
    english: 'Leaf spot disease reported 5km away. Monitor your crops.'
  },
  hoursAgo: {
    malayalam: 'മണിക്കൂർ മുമ്പ്',
    english: 'hours ago'
  },
  high: {
    malayalam: 'ഉയർന്ന',
    english: 'high'
  },
  medium: {
    malayalam: 'ഇടത്തരം',
    english: 'medium'
  },
  low: {
    malayalam: 'കുറഞ്ഞ',
    english: 'low'
  },
  // Chat
  todaysAdvisory: {
    malayalam: 'ഇന്നത്തെ ഉപദേശം',
    english: 'Today\'s Advisory'
  },
  weatherAlert: {
    malayalam: 'കാലാവസ്ഥാ മുന്നറിയിപ്പ്',
    english: 'Weather Alert'
  },
  pestAlert: {
    malayalam: 'കീട മുന്നറിയിപ്പ്',
    english: 'Pest Alert'
  },
  expertReviewRequired: {
    malayalam: 'വിദഗ്ദ്ധ അവലോകനം ആവശ്യം',
    english: 'Expert Review Required'
  },
  expertDetails: {
    malayalam: 'വിദഗ്ദ്ധ വിവരങ്ങൾ',
    english: 'Expert Details'
  },
  callExpert: {
    malayalam: 'വിദഗ്ദ്ധനെ വിളിക്കുക',
    english: 'Call Expert'
  },
  close: {
    malayalam: 'അടയ്ക്കുക',
    english: 'Close'
  },
  expertQueryMessage: {
    malayalam: 'ഈ ചോദ്യത്തിന് വിദഗ്ദ്ധ അവലോകനം ആവശ്യമാണ്. ഞങ്ങൾ ഇത് നിങ്ങളുടെ പ്രാദേശിക കൃഷി ഭവൻ ഓഫീസറിന് അയച്ചു.',
    english: 'This query requires expert review. We have forwarded it to your local Krishi Bhavan officer.'
  },
  // Profile
  farmerProfile: {
    malayalam: 'കർഷക പ്രൊഫൈൽ',
    english: 'Farmer Profile'
  },
  personalInformation: {
    malayalam: 'വ്യക്തിഗത വിവരങ്ങൾ',
    english: 'Personal Information'
  },
  locationDetails: {
    malayalam: 'സ്ഥല വിവരങ്ങൾ',
    english: 'Location Details'
  },
  farmDetails: {
    malayalam: 'കൃഷി വിവരങ്ങൾ',
    english: 'Farm Details'
  },
  soilTestReport: {
    malayalam: 'മണ്ണ് പരിശോധന',
    english: 'Soil Test Report'
  },
  saveProfile: {
    malayalam: 'പ്രൊഫൈൽ സേവ് ചെയ്യുക',
    english: 'Save Profile'
  },
  cancel: {
    malayalam: 'റദ്ദാക്കുക',
    english: 'Cancel'
  },
  name: {
    malayalam: 'പേര്',
    english: 'Name'
  },
  malayalamName: {
    malayalam: 'പേര് (മലയാളം)',
    english: 'Name (Malayalam)'
  },
  englishName: {
    malayalam: 'പേര് (ഇംഗ്ലീഷ്)',
    english: 'Name (English)'
  },
  phoneNumber: {
    malayalam: 'ഫോൺ നമ്പർ',
    english: 'Phone Number'
  },
  locationMalayalam: {
    malayalam: 'സ്ഥലം (മലയാളം)',
    english: 'Location (Malayalam)'
  },
  district: {
    malayalam: 'ജില്ല',
    english: 'District'
  },
  farmSize: {
    malayalam: 'ഫാം വലുപ്പം',
    english: 'Farm Size'
  },
  farmingExperience: {
    malayalam: 'കൃഷി അനുഭവം (വർഷങ്ങൾ)',
    english: 'Farming Experience (Years)'
  },
  primaryCrop: {
    malayalam: 'പ്രധാന വിള (മലയാളം)',
    english: 'Primary Crop (Malayalam)'
  },
  secondaryCrops: {
    malayalam: 'ദ്വിതീയ വിളകൾ (ഓപ്ഷണൽ)',
    english: 'Secondary Crops (Optional)'
  },
  soilType: {
    malayalam: 'മണ്ണിന്റെ തരം',
    english: 'Soil Type'
  },
  irrigationSystem: {
    malayalam: 'നനയ്ക്കൽ സംവിധാനം',
    english: 'Irrigation System'
  },
  organicFarmingPractice: {
    malayalam: 'ജൈവ കൃഷി രീതി',
    english: 'Organic Farming Practice'
  },
  soilReportUploadDesc: {
    malayalam: 'വ്യക്തിഗതമാക്കിയ വള നിർദ്ദേശങ്ങൾക്കായി നിങ്ങളുടെ മണ്ണ് പരിശോധന റിപ്പോർട്ട് അപ്ലോഡ് ചെയ്യുക',
    english: 'Upload your soil test report for personalized fertilizer recommendations'
  },
  // Pest Detection
  pestDiseaseDetection: {
    malayalam: 'കീട രോഗ കണ്ടെത്തൽ',
    english: 'Pest & Disease Detection'
  },
  uploadCropImageTitle: {
    malayalam: 'വിള ചിത്രം അപ്ലോഡ് ചെയ്യുക',
    english: 'Upload Crop Image'
  },
  uploadCropImageDesc: {
    malayalam: 'AI പവർഡ് കീട-രോഗ കണ്ടെത്തലിനായി നിങ്ങളുടെ വിളയുടെ വ്യക്തമായ ചിത്രം അപ്ലോഡ് ചെയ്യുക',
    english: 'Upload a clear image of your crop for AI-powered pest and disease detection'
  },
  analyzingImage: {
    malayalam: 'ചിത്രം വിശകലനം ചെയ്യുന്നു...',
    english: 'Analyzing Image...'
  },
  treatmentRecommendations: {
    malayalam: 'ചികിത്സാ നിർദ്ദേശങ്ങൾ',
    english: 'Treatment Recommendations'
  },
  immediateActions: {
    malayalam: 'ഉടനടി നടപടികൾ',
    english: 'Immediate Actions'
  },
  prevention: {
    malayalam: 'പ്രതിരോധം',
    english: 'Prevention'
  },
  askMoreQuestions: {
    malayalam: 'കൂടുതൽ ചോദ്യങ്ങൾ ചോദിക്കുക',
    english: 'Ask More Questions'
  },
  logTreatmentActivity: {
    malayalam: 'ചികിത്സാ പ്രവർത്തനം രേഖപ്പെടുത്തുക',
    english: 'Log Treatment Activity'
  },
  clickToUpload: {
    malayalam: 'അപ്ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക',
    english: 'Click to upload image'
  },
  dragAndDrop: {
    malayalam: 'അല്ലെങ്കിൽ നിങ്ങളുടെ വിള ഫോട്ടോ ഇവിടെ വലിച്ചിടുക',
    english: 'Or drag and drop your crop photo here'
  },
  tryWithSamples: {
    malayalam: 'അല്ലെങ്കിൽ സാമ്പിൾ ചിത്രങ്ങൾ ഉപയോഗിച്ച് പരീക്ഷിക്കുക:',
    english: 'Or try with sample images:'
  },
  sample: {
    malayalam: 'സാമ്പിൾ',
    english: 'Sample'
  },
  selectDifferentImage: {
    malayalam: 'മറ്റൊരു ചിത്രം തിരഞ്ഞെടുക്കുക',
    english: 'Select Different Image'
  },
  aiDetecting: {
    malayalam: 'AI നിങ്ങളുടെ വിള ചിത്രത്തിലെ കീടങ്ങളും രോഗങ്ങളും കണ്ടെത്തുന്നു',
    english: 'AI is detecting pests and diseases in your crop image'
  },
  imageProcessing: {
    malayalam: 'ചിത്രം പ്രോസസ് ചെയ്യൽ',
    english: 'Image Processing'
  },
  diseaseDetection: {
    malayalam: 'രോഗ കണ്ടെത്തൽ',
    english: 'Disease Detection'
  },
  treatmentRecommendationsGeneration: {
    malayalam: 'ചികിത്സാ നിർദ്ദേശങ്ങൾ',
    english: 'Treatment Recommendations'
  },
  confident: {
    malayalam: 'ആത്മവിശ്വാസം',
    english: 'Confident'
  },
  severity: {
    malayalam: 'തീവ്രത',
    english: 'Severity'
  },
  affectedArea: {
    malayalam: 'ബാധിത പ്രദേശം',
    english: 'Affected Area'
  },
  // Market
  currentMarket: {
    malayalam: 'നിലവിലെ മാർക്കറ്റ്',
    english: 'Current Market'
  },
  priceRising: {
    malayalam: 'വില വർധന',
    english: 'Price Rising'
  },
  priceFalling: {
    malayalam: 'വില കുറവ്',
    english: 'Price Falling'
  },
  avgPrice: {
    malayalam: 'ശരാശരി വില',
    english: 'Avg Price'
  },
  yourCrop: {
    malayalam: 'നിങ്ങളുടെ വിള',
    english: 'Your Crop'
  },
  priceTrends: {
    malayalam: 'വില ട്രെൻഡുകൾ',
    english: 'Price Trends'
  },
  risingPrices: {
    malayalam: 'വില വർധനവ്',
    english: 'Rising Prices'
  },
  fallingPrices: {
    malayalam: 'വില കുറവ്',
    english: 'Falling Prices'
  },
  askAboutMarketTrends: {
    malayalam: 'മാർക്കറ്റ് ട്രെൻഡുകളെക്കുറിച്ച് ചോദിക്കുക',
    english: 'Ask About Market Trends'
  },
  backToDashboard: {
    malayalam: 'ഡാഷ്ബോർഡിലേക്ക് മടങ്ങുക',
    english: 'Back to Dashboard'
  },
  lastUpdated: {
    malayalam: 'അവസാനം അപ്ഡേറ്റ് ചെയ്തത്',
    english: 'Last updated'
  },
  quality: {
    malayalam: 'ഗുണമേന്മ',
    english: 'Quality'
  },
  stock: {
    malayalam: 'സ്റ്റോക്ക്',
    english: 'Stock'
  },
  previous: {
    malayalam: 'മുമ്പത്തെ',
    english: 'Previous'
  },
  gradeA: {
    malayalam: 'ഗ്രേഡ് എ',
    english: 'Grade A'
  },
  // Activities
  farmActivities: {
    malayalam: 'കൃഷി പ്രവർത്തനങ്ങൾ',
    english: 'Farm Activity Tracking'
  },
  add: {
    malayalam: 'ചേർക്കുക',
    english: 'Add'
  },
  activitiesThisMonth: {
    malayalam: 'ഈ മാസത്തെ പ്രവർത്തനങ്ങൾ',
    english: 'Activities This Month'
  },
  totalSpent: {
    malayalam: 'മൊത്തം ചെലവ്',
    english: 'Total Spent'
  },
  pendingTasks: {
    malayalam: 'തീർപ്പാക്കാത്ത ജോലികൾ',
    english: 'Pending Tasks'
  },
  recentActivities: {
    malayalam: 'സമീപകാല പ്രവർത്തനങ്ങൾ',
    english: 'Recent Activities'
  },
  lastSevenDays: {
    malayalam: 'കഴിഞ്ഞ 7 ദിവസം',
    english: 'Last 7 days'
  },
  calendar: {
    malayalam: 'കലണ്ടർ',
    english: 'Calendar'
  },
  upcoming: {
    malayalam: 'വരാനിരിക്കുന്നവ',
    english: 'Upcoming'
  },
  newActivity: {
    malayalam: 'പുതിയ പ്രവർത്തനം',
    english: 'Add Activity'
  },
  addActivity: {
    malayalam: 'പ്രവർത്തനം ചേർക്കുക',
    english: 'Add Activity'
  },
  completed: {
    malayalam: 'പൂർത്തിയായി',
    english: 'Completed'
  },
  pending: {
    malayalam: 'തീർപ്പാക്കാനുണ്ട്',
    english: 'Pending'
  },
  activityType: {
    malayalam: 'പ്രവർത്തന തരം',
    english: 'Activity Type'
  },
  description: {
    malayalam: 'വിവരണം',
    english: 'Description'
  },
  quantity: {
    malayalam: 'അളവ്',
    english: 'Quantity'
  },
  cost: {
    malayalam: 'വില',
    english: 'Cost'
  },
  notes: {
    malayalam: 'കുറിപ്പുകൾ',
    english: 'Notes'
  },
  optional: {
    malayalam: 'ഓപ്ഷണൽ',
    english: 'Optional'
  },
  tomorrow: {
    malayalam: 'നാളെ',
    english: 'Tomorrow'
  },
  dayAfterTomorrow: {
    malayalam: 'മറ്റന്നാൾ',
    english: 'Day after tomorrow'
  },
  inThreeDays: {
    malayalam: '3 ദിവസത്തിനുള്ളിൽ',
    english: 'In 3 days'
  },
  features: {
    aiAdvisory: {
      malayalam: 'AI പ്രതിസന്ധി നിർദ്ദേശങ്ങൾ',
      english: 'AI-Powered Advisory'
    },
    voiceAssistant: {
      malayalam: 'വോയ്സ് അസിസ്റ്റന്റ്',
      english: 'Voice Assistant'
    },
    pestDetection: {
      malayalam: 'കീട രോഗ കണ്ടെത്തൽ',
      english: 'Pest Detection'
    },
    marketPrices: {
      malayalam: 'മാർക്കറ്റ് വില',
      english: 'Market Prices'
    }
  }
};