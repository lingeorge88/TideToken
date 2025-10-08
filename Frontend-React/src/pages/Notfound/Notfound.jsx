import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import seahorseLogo from "@/assets/seahorselogo.png";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={seahorseLogo} alt="BlueCurrent" className="w-16 h-16" />
            <span className="text-3xl font-bold text-celestial-blue">
              BlueCurrent
            </span>
          </div>

          {/* 404 Error */}
          <div className="space-y-4">
            <h1 className="text-8xl lg:text-9xl font-bold text-celestial-blue">
              404
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-celestial-blue">
              Page Not Found
            </h2>
            <p className="text-xl text-celestial-blue max-w-md mx-auto font-light leading-relaxed">
              Oops! The page you're looking for seems to have drifted away.
              Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              className="bg-white hover: text-celestial-blue hover:bg-sky-blue shadow-md hover:shadow-lg transition-all rounded-full px-8"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-celestial-blue hover:bg-persian-blue text-white shadow-md hover:shadow-lg transition-all rounded-full px-8"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </div>

          {/* Decorative element */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 bg-white border border-celestial-blue rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 bg-celestial-blue rounded-full"></span>
              <span className="text-sm text-celestial-blue font-medium">
                Need help? Contact our support team
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;