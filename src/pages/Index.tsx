
import React, { useState } from 'react';
import { Phone, Calendar, TrendingUp, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const requestDemoCall = async () => {
    if (!phone.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }

    // Basic phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Demo call initiated!",
        description: `You should receive a call at ${phone} in about 10 seconds.`,
      });
      setPhone('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 fox-gradient rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6b64530a-b345-4121-8790-d9af0e2f019d.png" 
                  alt="Outbound Fox Logo" 
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Outbound Fox</h1>
              </div>
            </div>
            <div className="space-x-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
              <Button className="fox-gradient text-white hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 fox-dark-gradient">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Turn Cold Calls into <span className="text-orange-500">Warm Leads</span>—Automatically
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            OutboundFox is your AI-powered sales rep that makes real calls, qualifies real leads, and emails you the ones that matter.
          </p>

          {/* Demo Call CTA */}
          <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md mx-auto mb-12 float-animation border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">See It Work—Right Now</h3>
            <p className="text-muted-foreground mb-6">Want to see how it sounds? Enter your number and we'll call you with a live demo of the AI in action:</p>
            
            <div className="space-y-4">
              <Input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && requestDemoCall()}
                className="w-full bg-input border-border focus:border-orange-500 focus:ring-orange-500 text-foreground"
              />
              <Button 
                onClick={requestDemoCall}
                disabled={isLoading}
                className="w-full fox-gradient text-white hover:opacity-90 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                {isLoading ? 'Calling...' : 'Send Me the Call'}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">Takes ~10 seconds. No spam. Just a quick real-time demo.</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-4">"This actually works."</p>
          </div>
        </div>
      </section>

      {/* How It Works - Section 2 with Video */}
      <section className="py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <div className="w-full h-px bg-border mt-4"></div>
          </div>
          
          {/* Video Embed */}
          <div className="mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 fox-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <p className="text-foreground">Video Demo Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-2">Watch OutboundFox in action</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload Your Leads</h3>
              <p className="text-muted-foreground text-sm">CSV, CRM, or Zapier</p>
            </div>
            
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customize Your Prompt</h3>
              <p className="text-muted-foreground text-sm">Control exactly what your AI says</p>
            </div>
            
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Go Live</h3>
              <p className="text-muted-foreground text-sm">We'll call, qualify, and follow up automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Founders use OutboundFox to:</h2>
            <div className="w-full h-px bg-border mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Book meetings while they sleep</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Learn which scripts convert (and why)</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cut SDR time by 60%</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Follow up instantly via email</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What You Get</h2>
            <div className="w-full h-px bg-border mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Real AI voice calls to real prospects</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <TrendingUp className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Smart analytics on objections + sentiment</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email follow-up for hot leads</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Lead cards with call history & next actions</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors md:col-span-2 border border-border/50">
              <TrendingUp className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Self-improving scripts that evolve over time</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-card relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why It's Different</h2>
          <div className="w-full h-px bg-border mb-8"></div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p><strong className="text-foreground">Not just voicemail drops.</strong></p>
            <p><strong className="text-foreground">Not just transcripts.</strong></p>
            <p className="text-xl font-semibold text-orange-500"><strong>OutboundFox learns—and gets better with every call.</strong></p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 fox-dark-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Test the Call. See for Yourself.</h2>
          <p className="text-xl text-muted-foreground mb-8">Put in your number. Hear what your future AI rep sounds like.</p>
          
          <div className="bg-card rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-border">
            <div className="space-y-4">
              <Input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && requestDemoCall()}
                className="w-full bg-input border-border focus:border-orange-500 focus:ring-orange-500 text-foreground"
              />
              <Button 
                onClick={requestDemoCall}
                disabled={isLoading}
                className="w-full fox-gradient text-white hover:opacity-90 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                {isLoading ? 'Calling...' : 'Send Me the Call'}
              </Button>
            </div>
          </div>
          
          <p className="text-muted-foreground mt-8 text-lg italic">This is the moment SDRs became optional.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 fox-gradient rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/6b64530a-b345-4121-8790-d9af0e2f019d.png" 
                alt="Outbound Fox" 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </div>
            <span className="font-semibold text-foreground">Outbound Fox</span>
          </div>
          <p className="text-muted-foreground">&copy; 2025 Outbound Fox. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
