import seahorseLogo from "@/assets/seahorselogo.png";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-celestial-blue/20 rounded-full blur-2xl animate-pulse"></div>
          <img
            src={seahorseLogo}
            alt="BlueCurrent"
            className="w-24 h-24 relative z-10 animate-pulse"
          />
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-celestial-blue text-3xl font-bold">BlueCurrent</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-celestial-blue rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-celestial-blue rounded-full animate-bounce shadow-sm" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-celestial-blue rounded-full animate-bounce shadow-sm" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-celestial-blue font-light">Loading your portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
