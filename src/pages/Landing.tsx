import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslation, translations } from '@/hooks/useTranslation';
import { 
  Sprout, 
  MessageCircle, 
  Upload, 
  TrendingUp, 
  Shield, 
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  Leaf,
  CloudRain,
  Bug
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const { t, isEnglish } = useTranslation();

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: {
        malayalam: "AI പ്രതിസന്ധി നിർദ്ദേശങ്ങൾ",
        english: "AI-Powered Advisory"
      },
      description: {
        malayalam: "വികസിത AI ഉപയോഗിച്ച് വ്യക്തിഗത കൃഷി ഉപദേശം നേടുക",
        english: "Get personalized farming advice powered by advanced AI"
      }
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: {
        malayalam: "വോയ്സ് അസിസ്റ്റന്റ്",
        english: "Voice Assistant"
      },
      description: {
        malayalam: "വോയ്സ് കമാൻഡുകൾ ഉപയോഗിച്ച് മലയാളത്തിൽ ചോദ്യങ്ങൾ ചോദിക്കുക",
        english: "Ask questions in Malayalam using voice commands"
      }
    },
    {
      icon: <Bug className="h-8 w-8 text-pest-red" />,
      title: {
        malayalam: "കീട രോഗ കണ്ടെത്തൽ",
        english: "Pest Detection"
      },
      description: {
        malayalam: "തൽക്ഷണ കീട-രോഗ കണ്ടെത്തലിനായി വിള ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക",
        english: "Upload crop images for instant pest and disease detection"
      }
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success-green" />,
      title: {
        malayalam: "മാർക്കറ്റ് വില",
        english: "Market Prices"
      },
      description: {
        malayalam: "തത്സമയ പ്രാദേശിക മാർക്കറ്റ് വിലകളും ട്രെൻഡുകളും",
        english: "Real-time local market prices and trends"
      }
    }
  ];

  const successStories = [
    {
      name: t({ malayalam: "രാജു കെ.", english: "Raju K." }),
      location: t({ malayalam: "കോട്ടയം", english: "Kottayam" }),
      crop: t({ malayalam: "നെൽ", english: "Rice" }),
      improvement: t({ malayalam: "30% വിളവ് വർധന", english: "30% yield increase" }),
      story: t({ malayalam: "AI ഉപദേശം വള ഉപയോഗം ഒപ്റ്റിമൈസ് ചെയ്യാൻ സഹായിച്ചു", english: "AI advisory helped optimize fertilizer usage" })
    },
    {
      name: t({ malayalam: "സുനിത ആർ.", english: "Sunitha R." }),
      location: t({ malayalam: "തിരുവനന്തപുരം", english: "Thiruvananthapuram" }), 
      crop: t({ malayalam: "വഴുതന", english: "Brinjal" }),
      improvement: t({ malayalam: "₹15,000 ലാഭം", english: "₹15,000 saved" }),
      story: t({ malayalam: "നേരത്തെയുള്ള കീട കണ്ടെത്തൽ വലിയ വിള നഷ്ടം തടഞ്ഞു", english: "Early pest detection prevented major crop loss" })
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">{t(translations.appTitle)}</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Button 
                variant="secondary" 
                onClick={() => navigate('/dashboard')}
                className="bg-white/20 hover:bg-white/30"
              >
                {t(translations.getStarted)}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t(translations.appSubtitle)}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t({
              malayalam: "കൃത്രിമ ബുദ്ധി ഉപയോഗിച്ച് നിങ്ങളുടെ കൃഷിയെ കൂടുതൽ ലാഭകരമാക്കുക",
              english: "Make your farming more profitable with AI assistance"
            })}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="text-lg px-8 py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t(translations.startFarmingJourney)}
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/chat')}
              className="text-lg px-8 py-4"
            >
              <Upload className="mr-2 h-5 w-5" />
              {t(translations.uploadCropImage)}
            </Button>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
              onClick={() => navigate('/chat')}
            >
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">{t(translations.askQuestion)}</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-success-green/5 to-success-green/10 border-success-green/20"
              onClick={() => navigate('/upload')}
            >
              <Upload className="h-8 w-8 text-success-green mx-auto mb-3" />
              <p className="font-semibold text-sm">{t(translations.uploadSoilReport)}</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-pest-red/5 to-pest-red/10 border-pest-red/20"
              onClick={() => navigate('/pest-detection')}
            >
              <Bug className="h-8 w-8 text-pest-red mx-auto mb-3" />
              <p className="font-semibold text-sm">{t(translations.cropImage)}</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-weather-blue/5 to-weather-blue/10 border-weather-blue/20"
              onClick={() => navigate('/market')}
            >
              <TrendingUp className="h-8 w-8 text-weather-blue mx-auto mb-3" />
              <p className="font-semibold text-sm">{t(translations.marketPrices)}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t(translations.howItHelps)}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{t(feature.title)}</h4>
                <p className="text-sm text-muted-foreground">{t(feature.description)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t(translations.successStories)}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-success-green/5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{story.name}</h4>
                      <span className="text-sm text-muted-foreground">• {story.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <Leaf className="inline h-4 w-4 mr-1" />
                      {story.crop}
                    </p>
                    <div className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {story.improvement}
                    </div>
                    <p className="text-sm text-foreground">{story.story}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-success-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {t(translations.aiWorkflow)}
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center flex-1">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t({ malayalam: "മെഷീൻ ലേണിംഗ്", english: "Machine Learning" })}</h4>
              <p className="text-sm text-muted-foreground">{t({ malayalam: "മണ്ണ് വിശകലനവും വിള തിരിച്ചറിയലും", english: "Soil analysis & crop recognition" })}</p>
            </Card>
            
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
            
            <Card className="p-6 text-center flex-1">
              <MessageCircle className="h-12 w-12 text-success-green mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t({ malayalam: "ഭാഷാ മോഡൽ", english: "Language Model" })}</h4>
              <p className="text-sm text-muted-foreground">{t({ malayalam: "മലയാളത്തിൽ ഉപദേശ ജനറേഷൻ", english: "Advisory generation in Malayalam" })}</p>
            </Card>
            
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
            
            <Card className="p-6 text-center flex-1">
              <Shield className="h-12 w-12 text-weather-blue mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t({ malayalam: "മനുഷ്യ സാധൂകരണം", english: "Human Validation" })}</h4>
              <p className="text-sm text-muted-foreground">{t({ malayalam: "വിദഗ്ദ്ധ അവലോകനവും ഗുണനിലവാര നിയന്ത്രണവും", english: "Expert review & quality control" })}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            {t(translations.startToday)}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/profile')}
              className="text-lg px-8 py-4"
            >
              {t(translations.createFarmProfile)}
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/chat')}
              className="text-lg px-8 py-4"
            >
              {t(translations.askFirstQuestion)}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Sprout className="h-6 w-6" />
              <div>
                <p className="font-semibold">{t(translations.appTitle)}</p>
                <p className="text-sm opacity-80">{t({ malayalam: "ഇന്ത്യൻ കർഷകരെ ശാക്തീകരിക്കുന്നു", english: "Empowering Indian Farmers" })}</p>
              </div>
            </div>
            <div className="text-sm opacity-80">
              <p>{t({ malayalam: "ഇന്ത്യൻ കർഷകർക്കായി ❤️ ഉണ്ടാക്കിയത്", english: "Made with ❤️ for Indian Farmers" })}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;