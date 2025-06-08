import React, { useState } from 'react';
import { Phone, Calendar, TrendingUp, Mail, Clock, CheckCircle, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Warm People With <span className="text-orange-500">Heartwarming</span> Cold Calls
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Ai call agents actually do more harm than good, this one is different.
          </p>

          {/* Demo Call CTA */}
          <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md mx-auto mb-12 float-animation border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">See It Work—Right Now</h3>
            <p className="text-muted-foreground mb-6">Enter your number and try it out (US only):</p>
            
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
            
            <p className="text-sm text-muted-foreground mt-4">~10 seconds, no spam, just a quick real-time call to see it in action.</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-4">"Maybe Ai call agents do not suck afterall."</p>
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
                <p className="text-foreground">Video Demo</p>
                <p className="text-sm text-muted-foreground mt-2">Watch The Fox in action</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload Your Leads</h3>
              <p className="text-muted-foreground text-sm">CSV or CRM, if you don't have any we can help</p>
            </div>
            
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload 5-10 Sales Calls Your Best Salesperson Made</h3>
              <p className="text-muted-foreground text-sm">So it learns how you you like to communicate with your leads</p>
            </div>
            
            <div className="text-center p-4 rounded-xl hover:bg-card transition-colors border border-border/50">
              <div className="w-12 h-12 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Go Live</h3>
              <p className="text-muted-foreground text-sm">Add a limit to how many calls the agent makes each day & it's all done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why It's Different:</h2>
            <div className="w-full h-px bg-border mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Book meetings on autopilot without destroying the brand</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Learn which scripts convert (and why)</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Scale cheaply without having to consistantly interview salespeople</h3>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="w-16 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Strengthen brand value while maximizing the bottom line</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Visual Section - Social Proof */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-orange-500 mr-2" />
                <span className="text-3xl font-bold text-foreground">2,847</span>
              </div>
              <p className="text-muted-foreground">Sign Ups</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-orange-500 mr-2" />
                <span className="text-3xl font-bold text-foreground">94%</span>
              </div>
              <p className="text-muted-foreground">Say "this doesn't suck"</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-orange-500 mr-2" />
                <span className="text-3xl font-bold text-foreground">12min</span>
              </div>
              <p className="text-muted-foreground">Average setup time</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground italic">"I am not a fan of robocalls at all but outbound calling to customers That's a wicked way to reengage them""</p>
            <p className="text-sm text-muted-foreground mt-2">- Sarah Ashour, SmartR</p>
            
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What You Get</h2>
            <div className="w-full h-px bg-border mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Timely gestures that makes cold leads feel good about your outreach</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <TrendingUp className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Self-improving scripts that evolve over time</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Better targeting on your niche with time</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors border border-border/50">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Genuine AI voice calls that people don't hate</h3>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Trust The Fox</h2>
          <div className="w-full h-px bg-border mb-8"></div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p><strong className="text-foreground">Not just voicemail drops.</strong></p>
            <p><strong className="text-foreground">Not just transcripts.</strong></p>
            <p><strong className="text-foreground">Nothing that feels aggressive.</strong></p>
            <p className="text-xl font-semibold text-orange-500"><strong>It find ways to make people feel WARM 🤗 toward your brand</strong></p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Questions? We Got You 🤝</h2>
            <div className="w-24 h-px bg-border mx-auto"></div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                Does this actually work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                It does work. That's why we let you test it for free with your own phone number. No smoke and mirrors, just give it a try above and see for yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                How much does it cost? Are you going to bankrupt me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We're still in early access. But we already are able to cut costs down to offer lowest prices for Ai cold calls worldwide. No more than $0.1 per min. Pennies not dollars.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                What if people hate getting AI calls?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                That's exactly why we built this. Most AI call make leads colder not warmer (if not destroy them completely). Ours focuses on being genuinely human.
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                Can I use my own voice or scripts?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! That's the whole point. You upload 5-10 recordings of your best sales calls, and the AI learns your communication style. It's not trying to replace you, it's trying to scale you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                How fast can I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most founders get their first campaigns running in under 10 minutes. Upload your leads, add a few sample calls, set your daily limits, and you're live. No complicated setup or training required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-orange-500 transition-colors">
                What if I don't have any leads yet?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No worries! We can help you get started with lead generation too. Many of our founders start with our lead sourcing recommendations and build from there.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Test the Call. See for Yourself.</h2>
          <p className="text-xl text-muted-foreground mb-8">Put in your number, hear what the fox sounds like.</p>
          
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
          <p className="text-muted-foreground">Built in Florida ☀️ by a team that Cares 🧡.</p>
          <p className="text-muted-foreground">&copy; 2025 Outbound Fox.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
