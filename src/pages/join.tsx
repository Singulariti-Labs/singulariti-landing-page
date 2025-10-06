import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import joinBg from "@/assets/join-bg.png";

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  const handleBackToForm = () => {
    window.location.href = "/";
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col relative"
      style={{
        backgroundImage: `url(${joinBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 z-20 inline-flex items-center text-black/70 hover:text-black transition-colors duration-200 backdrop-blur-sm bg-white/30 !px-4 !py-2 rounded-full"
      >
        <svg
          className="w-5 h-5 !mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </button>

      {!isSubmitted ? (
        <>
          <div className="w-full text-center !pt-24 !px-4">
            <h1 className="text-7xl lg:text-9xl font-medium text-black !mb-4">
              Get Aura
            </h1>

            <p className="text-xl lg:text-3xl text-black/80 !mb-0">
              Sign Up to get early access for Aura
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center !px-4 !-mt-24">
            <div className="w-full max-w-xl">
              <div className="flex gap-3 items-center bg-gradient-to-r from-amber-800/40 to-amber-900/50 !px-2 rounded-xl backdrop-blur-sm shadow-xl">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 !px-4 !py-2 lg:!px-6 lg:!py-2 bg-transparent border-none outline-none text-white placeholder-white/60 text-lg"
                  placeholder="Type your email here"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
                <Button
                  onClick={handleSubmit}
                  className="bg-white hover:bg-white/90 text-black !px-2 !py-2 lg:!px-6 lg:!py-4 rounded-md text-lg font-semibold whitespace-nowrap"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full text-center !pb-8 !px-4">
            <p className="text-md font-medium text-black/90">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full !px-4 text-center">

            <h1 className="text-7xl lg:text-8xl font-medium text-black !mb-6">
            Thanks For Joining Waitlist
            </h1>
            <p className="text-xl lg:text-3xl text-black/80 !mb-12 leading-relaxed">
            We will notify you, Access will be provided soon
            </p>

            <Button
              onClick={handleBackToForm}
              className="bg-white hover:bg-white/90 text-black !px-12 !py-6 rounded-lg text-xl font-semibold"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinWaitlist;