import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What are you looking for?
          </h2>
          <p className="text-gray-500 max-w-sm mb-8">
            We couldn't find the page you're looking for. Let's get you back on
            track.
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-8 py-3"
          >
            Back to Homepage
          </Button>
        </div>

        {/* 404 Graphic */}
        <div className="relative flex items-center justify-center">
          <div className="text-[12rem] md:text-[16rem] font-bold flex items-center">
            <span
              className="text-gray-200"
              style={{
                textShadow:
                  "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #e2e8f0",
              }}
            >
              4
            </span>
            <span className="z-10 text-purple-400">0</span>
            <span
              className="text-gray-200"
              style={{
                textShadow:
                  "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 4px 4px 0 #e2e8f0",
              }}
            >
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
