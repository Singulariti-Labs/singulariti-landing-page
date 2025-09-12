// JoinWaitlist.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/join-bg.png";

const JoinWaitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Email saved:", data);
        setIsSubmitted(true);
      } else {
        alert(data.error || "Failed to join waitlist");
      }
    } catch (err) {
      console.error("Error submitting email:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleBackToForm = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 backdrop-blur-sm bg-white/10 !px-4 !py-2 rounded-full"
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
      </Link>

      {/* Glassmorphism Form */}
      <div className="relative z-10 w-full max-w-md lg:max-w-xl !mx-4">
        <div className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl !p-8 shadow-2xl">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center !mb-8">
                <h1 className="text-4xl font-semibold text-white !mb-3 drop-shadow-lg">
                  Join the Waitlist
                </h1>
                <p className="text-white/90 text-lg drop-shadow-sm">
                  Be the first to experience the future of AI
                </p>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full !px-6 !py-4 backdrop-blur-md bg-white/20 border border-white/40 rounded-xl text-xl text-black placeholder-black focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-200 text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full max-w-lg bg-white/90 hover:bg-white/50 text-black font-semibold !py-4 !px-6 !mt-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-xl lg:text-2xl backdrop-blur-sm"
                >
                  Join the Waitlist
                </button>
              </form>

              <p className="text-center text-sm text-white/70 !mt-6 drop-shadow-sm">
                We respect your privacy. Your information will never be shared.
              </p>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center !mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full !mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-center !mb-8">
                <h1 className="text-4xl lg:text-5xl font-semibold text-white !mb-4 drop-shadow-lg">
                  Welcome to the singularity.
                </h1>
                <p className="text-white/90 text-lg lg:text-xl drop-shadow-sm leading-relaxed">
                  The pull begins, and you’ll feel it before the crowd does.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/"
                  onClick={handleBackToForm}
                  className="block w-full text-center bg-white hover:bg-white/50 text-black text-xl lg:text-2xl font-semibold !py-4 !px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg backdrop-blur-sm border border-white/40"
                >
                  Back to Home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
