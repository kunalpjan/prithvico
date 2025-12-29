const EarthMascot = () => {
  return (
    <div className="relative animate-float">
      {/* Main Earth body */}
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        {/* Earth globe */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-blue via-earth-green to-ocean-blue shadow-2xl overflow-hidden">
          {/* Continents - simplified kids drawing style */}
          <div className="absolute top-6 left-8 w-16 h-12 bg-earth-green rounded-[40%] rotate-12 opacity-90" />
          <div className="absolute top-12 right-6 w-12 h-10 bg-earth-green rounded-[50%] -rotate-6 opacity-90" />
          <div className="absolute bottom-10 left-1/4 w-20 h-8 bg-earth-green rounded-[40%] rotate-3 opacity-90" />
          <div className="absolute bottom-16 right-8 w-10 h-14 bg-earth-green rounded-[45%] -rotate-12 opacity-90" />
          
          {/* Clouds */}
          <div className="absolute top-4 left-12 w-8 h-3 bg-cloud-white rounded-full opacity-80" />
          <div className="absolute top-16 right-12 w-6 h-2 bg-cloud-white rounded-full opacity-80" />
          <div className="absolute bottom-8 left-8 w-10 h-3 bg-cloud-white rounded-full opacity-80" />
        </div>

        {/* Face */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Eyes */}
          <div className="absolute top-[35%] left-[30%] w-5 h-6 bg-foreground rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
          </div>
          <div className="absolute top-[35%] right-[30%] w-5 h-6 bg-foreground rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
          </div>
          
          {/* Rosy cheeks */}
          <div className="absolute top-[50%] left-[18%] w-6 h-4 bg-heart-pink/40 rounded-full" />
          <div className="absolute top-[50%] right-[18%] w-6 h-4 bg-heart-pink/40 rounded-full" />
          
          {/* Smile */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-12 h-6 border-b-4 border-foreground rounded-b-full" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-2 text-4xl animate-wiggle">✨</div>
      <div className="absolute -bottom-2 -left-4 text-3xl" style={{ animationDelay: "0.5s" }}>🌱</div>
      <div className="absolute top-1/2 -right-6 text-2xl animate-bounce" style={{ animationDelay: "0.3s" }}>💚</div>
    </div>
  );
};

export default EarthMascot;
