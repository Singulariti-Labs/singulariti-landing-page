import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hourglass, ChevronLeft } from "lucide-react";

interface NotifyMeFormProps {
    onClose: () => void;
}

const NotifyMeForm: React.FC<NotifyMeFormProps> = ({ onClose }) => {
    const location = useLocation();
    const [[step, direction], setStep] = useState([0, 0]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        otherRole: "",
        system: location.state?.system || "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const totalSteps = 4;

    const register = async () => {
        setIsSubmitting(true);
        setError("");

        try {
            const professionTerm = formData.role === "Other" ? formData.otherRole : formData.role;
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    profession: professionTerm,
                    system: formData.system.toLowerCase() // Ensure lowercase for consistency
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to register");

            setStep([3, 1]); // Move to Thank You slide

            // Trigger download for Windows users
            if (formData.system.toLowerCase() === "windows") {
                const downloadUrl = "https://github.com/Singulariti-Labs/Aura_Release/releases/download/0.1.0-Beta/Aura.0.1.0-beta.msi";
                window.location.href = downloadUrl;
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const paginate = (newDirection: number) => {
        if (step === 2 && newDirection > 0) {
            register();
            return;
        }

        if (step + newDirection >= 0 && step + newDirection < totalSteps) {
            setStep([step + newDirection, newDirection]);
        }
    };

    const isStepValid = () => {
        if (step === 0) return formData.name.trim().length > 0;
        if (step === 1) return formData.email.trim().length > 0 && formData.email.includes("@");
        if (step === 2) {
            if (formData.role === "Other") return formData.otherRole.trim().length > 0;
            return formData.role.length > 0;
        }
        return true;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (isStepValid()) {
                    paginate(1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [step, formData]);

    const getFirstName = (fullName: string) => {
        if (!fullName) return "";
        const first = fullName.trim().split(" ")[0];
        return first.charAt(0).toUpperCase() + first.slice(1);
    };

    const roles = [
        "Student",
        "Developer",
        "Designer (UI/UX, Graphic)",
        "Knowledge Worker",
        "Artist / Creator",
        "Founder / Entrepreneur",
        "Other",
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const slideDistance = isMobile ? 250 : 500;

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? slideDistance : -slideDistance,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? slideDistance : -slideDistance,
            opacity: 0,
        }),
    };

    return (
        <div className="flex flex-col w-full h-full relative overflow-hidden">

            {/* Top Bar: Progress & Close */}
            <div className="absolute top-0 left-0 w-full z-50 flex flex-col">
                <div className="w-full h-1 bg-gray-200">
                    <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
                <div className="!p-4 md:!p-8">
                    <button onClick={onClose} className="!p-2 rounded-full hover:bg-gray-100 transition-colors group">
                        <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-black" />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow flex flex-col items-center justify-center !p-4 w-full relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="step0"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="flex flex-col items-center w-full max-w-2xl absolute"
                        >
                            <div className="flex items-center !gap-2 md:!gap-3 !mb-8 md:!mb-16 text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                <span className="text-xl sm:text-2xl md:text-4xl font-semibold">It would just take 10 seconds</span>
                                <Hourglass className="w-6 h-6 md:w-10 md:h-10 stroke-2" />
                            </div>
                            <div className="w-full flex flex-col items-center !gap-6">
                                <div className="text-left w-[90%] md:w-[70%]">
                                    <h2 className="text-2xl md:text-4xl text-black font-semibold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] !mb-2">Hi,</h2>
                                </div>
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-[90%] md:w-[70%] text-lg md:text-2xl border-b border-black/20 focus:border-black outline-none !py-2 bg-transparent transition-colors placeholder:text-black/30 font-semibold"
                                    autoFocus
                                />
                                <div className="w-[90%] md:w-[70%] flex justify-start !mt-4 h-10">
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            className="!px-6 md:!px-8 bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black rounded-lg font-semibold text-base md:text-lg transition-colors shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                                        >
                                            Continue
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="step1"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="flex flex-col items-center w-full max-w-2xl absolute"
                        >
                            <div className="w-full flex flex-col items-center !gap-6">
                                <div className="text-left w-[90%] md:w-[70%]">
                                    <h2 className="text-2xl md:text-4xl text-black font-semibold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] !mb-2">Your Email ID</h2>
                                </div>
                                <input
                                    type="email"
                                    placeholder="sarajones@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-[90%] md:w-[70%] text-lg md:text-2xl border-b border-black/20 focus:border-black outline-none !py-2 bg-transparent transition-colors placeholder:text-black/30 font-semibold"
                                    autoFocus
                                />
                                <div className="w-[90%] md:w-[70%] flex justify-start !mt-4 h-10">
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            className="!px-6 md:!px-8 bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black rounded-lg font-semibold text-base md:text-lg transition-colors shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                                        >
                                            Continue
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="flex flex-col items-center w-full max-w-2xl absolute"
                        >
                            <div className="w-full flex flex-col items-center !gap-6">
                                <div className="text-left w-[90%] md:w-[70%]">
                                    <h2 className="text-2xl md:text-4xl text-black font-semibold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] !mb-2">What best describes you?</h2>
                                </div>
                                <div className="flex flex-col !gap-2 md:!gap-4 w-[90%] md:w-[70%]">
                                    {roles.map((role) => (
                                        <button
                                            key={role}
                                            onClick={() => setFormData({ ...formData, role: role })}
                                            className="flex items-center !gap-3 text-left transition-all duration-200"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.role === role ? "border-black" : "border-gray-400"}`}>
                                                {formData.role === role && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                            </div>
                                            <span className="text-base md:text-lg font-semibold">{role}</span>
                                        </button>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    placeholder="If Other Type Here"
                                    value={formData.otherRole}
                                    onChange={(e) => setFormData({ ...formData, otherRole: e.target.value, role: "Other" })}
                                    className="w-[90%] md:w-[70%] text-base md:text-lg border-b border-black/20 focus:border-black outline-none !py-2 bg-transparent transition-colors placeholder:text-black/30 font-semibold"
                                />

                                <div className="w-[90%] md:w-[70%] flex justify-start !mt-4 h-10">
                                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            disabled={isSubmitting}
                                            className="!px-6 md:!px-8 bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black rounded-lg font-semibold text-base md:text-lg transition-colors shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Submitting..." : "Continue"}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center w-full max-w-2xl absolute"
                        >
                            <div className="w-full flex flex-col items-center !gap-6">
                                <div className="text-left w-[90%] md:w-[70%]">
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
                                        Thank You So Much
                                    </h2>
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] !mt-2 md:!mt-4">
                                        {getFirstName(formData.name)},
                                    </h2>
                                </div>
                                <div className="text-left w-[90%] md:w-[70%]">
                                    <p className="text-base md:text-xl text-black font-semibold !mt-2 md:!mt-4">
                                        {formData.system.toLowerCase() === "windows"
                                            ? "You’re in. Downloading Aura…"
                                            : "You're on the list. We'll notify you soon."}
                                    </p>
                                </div>
                                <div className="w-[90%] md:w-[70%] flex justify-start !mt-4 h-10">
                                    <button
                                        onClick={onClose}
                                        className="!px-6 md:!px-8 bg-[#F5F5ED] hover:bg-[#EBEBE0] text-black rounded-lg font-semibold text-base md:text-lg transition-colors shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                                    >
                                        Back To Home
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Navigation: Previous Button */}
            {
                step > 0 && step < 3 && (
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50 !p-4 md:!p-8">
                        <button
                            onClick={() => paginate(-1)}
                            className="flex items-center !gap-2 text-gray-500 hover:text-black transition-colors font-medium !px-3 !py-1.5 md:!px-4 md:!py-2 text-sm md:text-base hover:bg-gray-100/50 rounded-lg"
                        >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /> Previous Slide
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default NotifyMeForm;
