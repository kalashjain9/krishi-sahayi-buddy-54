import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ChatInterface from '@/components/ChatInterface';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslation, translations } from '@/hooks/useTranslation';
import { ArrowLeft, Phone, Video } from 'lucide-react';

const Chat = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showEscalationModal, setShowEscalationModal] = useState(false);

  const handleEscalation = () => {
    setShowEscalationModal(true);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-chat-background flex flex-col relative">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="text-primary-foreground hover:bg-white/20 p-1"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">{t(translations.appTitle)}</h1>
          </div>
        </div>
        <div className="text-right">
          <LanguageToggle />
        </div>
      </header>

      {/* Advisory Cards */}
      <div className="p-4 space-y-3">
        <h2 className="text-sm font-semibold text-foreground">💡 {t(translations.todaysAdvisory)}</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3 bg-weather-blue/10 border-weather-blue/20">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 text-weather-blue">☁️</div>
              <div>
                <p className="text-xs font-medium text-weather-blue">{t(translations.weatherAlert)}</p>
                <p className="text-xs text-foreground mt-1">{t(translations.heavyRainMessage)}</p>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-pest-red/10 border-pest-red/20">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 text-pest-red">🐛</div>
              <div>
                <p className="text-xs font-medium text-pest-red">{t(translations.pestAlert)}</p>
                <p className="text-xs text-foreground mt-1">{t(translations.pestOutbreakMessage)}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        <ChatInterface onEscalation={handleEscalation} />
      </div>

      {/* Escalation Modal */}
      {showEscalationModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-sm p-6 text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">{t(translations.expertReviewRequired)}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t(translations.expertQueryMessage)}
            </p>
            <div className="bg-muted/50 p-3 rounded-lg mb-4 text-left">
              <p className="text-sm font-medium mb-1">{t(translations.expertDetails)}:</p>
              <p className="text-sm">Dr. രാജേഷ് കുമാർ</p>
              <p className="text-xs text-muted-foreground">Agricultural Officer, Alappuzha</p>
              <p className="text-xs text-muted-foreground">Phone: +91 9876543210</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowEscalationModal(false)}
              >
                {t(translations.close)}
              </Button>
              <Button className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                {t(translations.callExpert)}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Chat;