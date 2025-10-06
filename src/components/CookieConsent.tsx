import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-elevated animate-slide-in-right">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 justify-between">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Cookie Notice</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                By clicking "Accept", you consent to our use of cookies. Read our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="flex-1 sm:flex-none text-xs sm:text-sm"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="flex-1 sm:flex-none text-xs sm:text-sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};