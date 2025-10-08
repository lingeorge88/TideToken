import seahorseLogo from "@/assets/seahorselogo.png";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src={seahorseLogo}
            alt="BlueCurrent"
            className="w-20 h-20 animate-pulse"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-celestial-blue text-xl font-semibold">BlueCurrent</span>
          <span className="text-white text-xl font-semibold">Trading</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-celestial-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-celestial-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-celestial-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
