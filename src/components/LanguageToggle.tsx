import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-auto min-w-[140px] bg-background/80 backdrop-blur-sm border-border/50">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-popover border-border">
        <SelectItem value="malayalam" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <span>മലയാളം</span>
            <span className="text-muted-foreground text-xs">Malayalam</span>
          </div>
        </SelectItem>
        <SelectItem value="english" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <span>English</span>
            <span className="text-muted-foreground text-xs">ഇംഗ്ലീഷ്</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export const LanguageToggleButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm">
        {language === 'malayalam' ? 'മ' : 'En'}
      </span>
    </Button>
  );
};