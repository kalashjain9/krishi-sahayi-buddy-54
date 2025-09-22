import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslation, translations } from '@/hooks/useTranslation';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Sprout,
  Calendar,
  CloudRain,
  Bug,
  TrendingUp,
  Bell,
  Settings,
  MessageCircle,
  Camera,
  BarChart3,
  Thermometer,
  Droplets,
  Sun,
  Wind
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentWeek] = useState(new Date().getWeek());

  // Mock data
  const farmerProfile = {
    name: t({ malayalam: "ബാബു കെ.", english: "Babu K." }),
    location: t({ malayalam: "ആലപ്പുഴ", english: "Alappuzha" }),
    farmSize: "2.5 acres",
    primaryCrop: t({ malayalam: "വഴുതന", english: "Brinjal" }),
    soilType: t({ malayalam: "കളിമണ്ണ്", english: "Clay Soil" })
  };

  const todayWeather = {
    temperature: "28°C",
    humidity: "75%",
    rainfall: "Light Rain Expected",
    windSpeed: "12 km/h"
  };

  const alerts = [
    {
      type: "weather",
      title: translations.heavyRainAlert,
      message: translations.heavyRainMessage,
      time: `2 ${translations.hoursAgo}`,
      severity: translations.high
    },
    {
      type: "pest",
      title: translations.pestOutbreakNearby,
      message: translations.pestOutbreakMessage,
      time: `6 ${translations.hoursAgo}`, 
      severity: translations.medium
    }
  ];

  const upcomingActivities = [
    {
      activity: translations.features.aiAdvisory,
      date: translations.tomorrow,
      type: "fertilizer"
    },
    {
      activity: translations.pestAlert,
      date: translations.dayAfterTomorrow,
      type: "monitoring"
    },
    {
      activity: translations.todaysWeather,
      date: translations.inThreeDays,
      type: "irrigation"
    }
  ];

  const cropHealth = {
    overall: 85,
    growth: 90,
    nutrition: 80,
    pest: 85
  };

  const marketPrices = [
    { crop: t({ malayalam: "വഴുതന", english: "Brinjal" }), price: "₹35/kg", change: "+5%", trend: "up" },
    { crop: t({ malayalam: "തക്കാളി", english: "Tomato" }), price: "₹25/kg", change: "-2%", trend: "down" },
    { crop: t({ malayalam: "മുളക്", english: "Chilli" }), price: "₹45/kg", change: "+8%", trend: "up" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">{t(translations.dashboard)}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary-foreground hover:bg-white/20"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/profile')}
                className="text-primary-foreground hover:bg-white/20"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 p-6 bg-gradient-to-r from-primary/5 to-success-green/5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {t(translations.welcome)} {farmerProfile.name}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t(translations.welcomeBack)}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Sprout className="h-4 w-4 text-primary" />
                    {farmerProfile.primaryCrop}
                  </span>
                  <span className="flex items-center gap-1">
                    📍 {farmerProfile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    🌾 {farmerProfile.farmSize}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Sprout className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Weather Card */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t(translations.todaysWeather)}</h3>
              <CloudRain className="h-5 w-5 text-weather-blue" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-pest-red" />
                <span className="text-sm">{todayWeather.temperature}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-weather-blue" />
                <span className="text-sm">{todayWeather.humidity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{todayWeather.windSpeed}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10"
            onClick={() => navigate('/chat')}
          >
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-center">{t(translations.askQuestion)}</p>
          </Card>
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-pest-red/5 to-pest-red/10"
            onClick={() => navigate('/pest-detection')}
          >
            <Camera className="h-8 w-8 text-pest-red mx-auto mb-2" />
            <p className="text-sm font-medium text-center">{t(translations.uploadImage)}</p>
          </Card>
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-success-green/5 to-success-green/10"
            onClick={() => navigate('/activities')}
          >
            <Calendar className="h-8 w-8 text-success-green mx-auto mb-2" />
            <p className="text-sm font-medium text-center">{t(translations.logActivity)}</p>
          </Card>
          <Card 
            className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-weather-blue/5 to-weather-blue/10"
            onClick={() => navigate('/market')}
          >
            <TrendingUp className="h-8 w-8 text-weather-blue mx-auto mb-2" />
            <p className="text-sm font-medium text-center">{t(translations.marketPrices)}</p>
          </Card>
        </div>

        {/* Alerts & Crop Health */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Alerts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t(translations.alerts)}</h3>
              <Bell className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className={`p-2 rounded-full ${
                    alert.type === 'weather' ? 'bg-weather-blue/10' : 'bg-pest-red/10'
                  }`}>
                    {alert.type === 'weather' ? 
                      <CloudRain className="h-4 w-4 text-weather-blue" /> :
                      <Bug className="h-4 w-4 text-pest-red" />
                    }
                  </div>
                  <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{t(alert.title)}</p>
                        <Badge variant={alert.severity.english === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                          {t(alert.severity)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{t(alert.message)}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Crop Health */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t(translations.cropHealth)}</h3>
              <BarChart3 className="h-5 w-5 text-success-green" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>{t(translations.overallHealth)}</span>
                  <span className="font-medium">{cropHealth.overall}%</span>
                </div>
                <Progress value={cropHealth.overall} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>{t(translations.growthRate)}</span>
                  <span className="font-medium">{cropHealth.growth}%</span>
                </div>
                <Progress value={cropHealth.growth} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>{t(translations.nutritionLevel)}</span>
                  <span className="font-medium">{cropHealth.nutrition}%</span>
                </div>
                <Progress value={cropHealth.nutrition} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>{t(translations.pestResistance)}</span>
                  <span className="font-medium">{cropHealth.pest}%</span>
                </div>
                <Progress value={cropHealth.pest} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Activities & Market Prices */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upcoming Activities */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t(translations.upcomingActivities)}</h3>
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-3">
              {upcomingActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.activity.english}</p>
                      <p className="text-xs text-muted-foreground">{activity.date.english}</p>
                    </div>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={() => navigate('/activities')}
            >
              {t(translations.viewAllActivities)}
            </Button>
          </Card>

          {/* Market Prices */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t(translations.marketPrices)}</h3>
              <TrendingUp className="h-5 w-5 text-success-green" />
            </div>
            <div className="space-y-3">
              {marketPrices.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div>
                    <p className="font-medium text-sm">{item.crop}</p>
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={item.trend === 'up' ? 'default' : 'secondary'}
                      className={item.trend === 'up' ? 'bg-success-green' : 'bg-pest-red'}
                    >
                      {item.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={() => navigate('/market')}
            >
              {t(translations.viewAllPrices)}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Helper function to get week number
declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function() {
  const date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  const week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export default Dashboard;