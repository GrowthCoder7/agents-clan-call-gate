import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Users, Zap } from "lucide-react";

interface BookACallProps {
  calendlyUrl?: string;
}

const BookACall = ({ calendlyUrl = "https://calendly.com/agentsclan" }: BookACallProps) => {
  const handleBookCall = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--primary)/0.15),transparent_50%)]" />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-40" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Glowing orbs with animation */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Badge */}
        <div className="mb-10 text-center animate-slide-up">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/60 border border-accent/30 backdrop-blur-md shadow-lg shadow-accent/10">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-3 h-3 rounded-full bg-accent/50 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground tracking-wide">AGENTS CLAN</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
        </div>
        
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-center leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Ready to Join
          </span>
          <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer" style={{ animationDelay: '0.5s' }}>
            the Web3 Revolution?
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto text-center leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Connect with our community leaders and discover how <span className="text-accent font-semibold">Agents Clan</span> can accelerate your Web3 journey with expert guidance and cutting-edge strategies
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="web3" 
            size="lg"
            onClick={handleBookCall}
            className="text-xl px-16 py-8 h-auto group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Book A Call
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-base font-medium">30-minute strategy session</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="text-base font-medium text-accent">Free</span>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Join a thriving ecosystem of Web3 pioneers and innovators</p>
            </div>
          </div>
          
          <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Web3 Focused</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Specialized expertise in blockchain and decentralized tech</p>
            </div>
          </div>
          
          <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Strategic insights from experienced Web3 professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookACall;
