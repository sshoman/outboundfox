
import React, { useState } from 'react';
import { Phone, Calendar, TrendingUp, Mail, Clock, CheckCircle, Star, Users, Zap, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ffa8f6c1-ed52-4eeb-94c1-61c421921a95.png" 
                  alt="Outbound Fox Logo" 
                  className="w-12 h-12 drop-shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-sm -z-10"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Outbound Fox
              </h1>
            </div>

            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105">
                <a href="https://call.outboundfox.com/" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </Button>

              <Button asChild className="fox-gradient text-white hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                <a href="https://call.outboundfox.com/" target="_blank" rel="noopener noreferrer">
                  Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="mb-8">
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Heartfelt AI Calls That{' '}
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">
                  Melt the Coldest Leads
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-xl -z-10 rounded-lg"></div>
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              Cold leads should not be aggressively sold to, but warmed with human gestures that makes them feel good towards your business.
            </p>
          </div>

          {/* Demo Call CTA */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg mx-auto mb-16 border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-6">See It Work—Right Now</h3>
              <p className="text-muted-foreground mb-8 text-lg">Put in your number, hear how the fox sounds like (US & EU):</p>
              
              <div className="space-y-6">
                <Input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && requestDemoCall()}
                  className="w-full h-14 bg-input/50 backdrop-blur border-border/50 focus:border-orange-500 focus:ring-orange-500/20 text-foreground text-lg rounded-xl"
                />
                <Button 
                  onClick={requestDemoCall}
                  disabled={isLoading}
                  className="w-full h-14 fox-gradient text-white hover:opacity-90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {isLoading ? 'Calling...' : 'Send Me the Call'}
                </Button>
              </div>
              
              <p className="text-muted-foreground mt-6 text-sm">~10 seconds, no spam, just a quick call by our Ai to see it in action.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-medium text-foreground mb-4 italic">"Maybe Ai call agents do not suck afterall."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-transparent relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Video Embed */}
          <div className="mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-xl"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 fox-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-foreground text-xl font-semibold">Video Demo</p>
                  <p className="text-muted-foreground mt-2">Watch The Fox in action</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Upload Your Leads", desc: "CSV or CRM, if you don't have any we can help" },
              { num: "2", title: "Upload 5-10 Calls Your Best Salesman Did", desc: "So it learns how you you like to communicate with your leads" },
              { num: "3", title: "Add A Limit To Daily Calls", desc: "Add a limit to how many calls the agent makes each day & it's all done" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl hover:bg-card/50 transition-all duration-300 border border-border/30 backdrop-blur-sm hover:scale-105">
                <div className="w-16 h-16 fox-gradient text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg">
                  {item.num}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-transparent to-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why It's Different:</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Book meetings on autopilot without destroying the brand" },
              { icon: TrendingUp, title: "Learn which scripts convert (and why)" },
              { icon: Clock, title: "Scale cheaply without having to consistantly interview salespeople" },
              { icon: Mail, title: "Strengthen brand value while maximizing the bottom line" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300 border border-orange-500/20">
                    <item.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-foreground text-lg leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-muted/10 to-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
            {[
              { icon: Users, number: "2,847", label: "On The Waitlist" },
              { icon: Star, number: "94%", label: "Say \"this doesn't suck\"" },
              { icon: Zap, number: "12min", label: "Average setup time" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <item.icon className="w-10 h-10 text-orange-500 mr-3" />
                  <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {item.number}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">{item.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-orange-500 fill-current" />
              ))}
            </div>
            <p className="text-2xl text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "I am not a fan of robocalls at all but outbound calling to old contacts, That's a wicked way to reengage them""
            </p>
            <p className="text-muted-foreground mt-4">- Sarah Ashour, SmartR</p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-transparent relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">What You Get</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Phone, title: "Warm cold leads on autopilot with a human touch (automated, yet personal)" },
              { icon: TrendingUp, title: "Self-improving scripts that evolve over time" },
              { icon: Mail, title: "Better targeting on your niche with time" },
              { icon: CheckCircle, title: "Genuine AI voice calls that people don't hate" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-card/50 transition-all duration-300 border border-border/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 bg-gradient-to-br from-transparent to-muted/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-foreground mb-8">Why Trust The Fox</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-12"></div>
          <div className="space-y-6 text-xl text-muted-foreground">
            <p><strong className="text-foreground">Not just voicemail drops.</strong></p>
            <p><strong className="text-foreground">Not just transcripts.</strong></p>
            <p><strong className="text-foreground">Nothing that feels aggressive.</strong></p>
            <p className="text-3xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent pt-4">
              <strong>Creative gestures that make people feel WARM 🤗 towards your brand</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-transparent relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">FAQ ⁉️</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                q: "Does this actually work?",
                a: "It does work. That's why we let you test it for free with your own phone number. No smoke and mirrors, just give it a try above and see for yourself."
              },
              {
                q: "How much does it cost? Are you going to bankrupt me?",
                a: "We're still in early access. But we already are able to cut costs down to offer lowest prices for Ai cold calls worldwide. No more than $0.1 per min. Pennies not dollars."
              },
              {
                q: "What if people hate getting AI calls?",
                a: "That's exactly why we built this. Most AI call make leads colder not warmer (if not destroy them completely). Ours focuses on being genuinely human."
              },
              {
                q: "Can I use my own voice or scripts?",
                a: "Absolutely! That's the whole point. You upload 5-10 recordings of your best sales calls, and the AI learns your communication style. It's not trying to replace you, it's trying to scale you."
              },
              {
                q: "How fast can I get started?",
                a: "Most founders get their first campaigns running in under 10 minutes. Upload your leads, add a few sample calls, set your daily limits, and you're live. No complicated setup or training required."
              },
              {
                q: "What if I don't have any leads yet?",
                a: "No worries! We can help you get started with lead generation too. Many of our founders start with our lead sourcing recommendations and build from there."
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx + 1}`} className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl px-8">
                <AccordionTrigger className="text-left hover:text-orange-500 transition-colors text-lg font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Test the Call. See for Yourself.</h2>
          <p className="text-2xl text-muted-foreground mb-12">Put in your number, hear how the fox sounds like (US & EU).</p>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg mx-auto border border-border/50">
              <div className="space-y-6">
                <Input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && requestDemoCall()}
                  className="w-full h-14 bg-input/50 backdrop-blur border-border/50 focus:border-orange-500 focus:ring-orange-500/20 text-foreground text-lg rounded-xl"
                />
                <Button 
                  onClick={requestDemoCall}
                  disabled={isLoading}
                  className="w-full h-14 fox-gradient text-white hover:opacity-90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {isLoading ? 'Calling...' : 'Send Me the Call'}
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mt-12 text-xl italic">This is the moment SDRs became optional.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-background to-muted/10 py-12 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/ffa8f6c1-ed52-4eeb-94c1-61c421921a95.png" 
                alt="Outbound Fox" 
                className="w-10 h-10 drop-shadow-lg"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-sm -z-10"></div>
            </div>
            <span className="font-semibold text-foreground text-lg">Outbound Fox</span>
          </div>
          <p className="text-muted-foreground text-lg">Built in Florida ☀️ by a team that Cares 🧡.</p>
          <p className="text-muted-foreground">&copy; 2025 Outbound Fox.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
