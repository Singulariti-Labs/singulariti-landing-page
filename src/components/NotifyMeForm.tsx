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
                    system: formData.system.toLowerCase()
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to register");

            setStep([3, 1]);

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
        "Designer",
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
        <div className="flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden pt-20">

            {/* Top Bar: Progress & Close */}
            <div className="absolute top-0 left-0 w-full z-50 flex flex-col">
                <div className="w-full h-1 bg-[#141413]/10">
                    <motion.div
                        className="h-full bg-[#141413]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
                <div className="p-6 md:p-10 flex justify-end">
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-[#141413]/5 transition-colors group">
                        <X className="w-6 h-6 text-[#141413]/40 group-hover:text-[#141413]" />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow flex flex-col items-center justify-center p-6 w-full relative overflow-visible">
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
                            <div className="flex items-center gap-3 mb-12 text-[#141413]">
                                <span className="text-2xl md:text-3xl font-medium">It would just take 10 seconds</span>
                                <Hourglass className="w-8 h-8 opacity-40" />
                            </div>
                            <div className="w-full flex flex-col items-center gap-8">
                                <div className="text-left w-full md:w-[80%]">
                                    <h2 className="text-3xl md:text-5xl text-[#141413] font-medium mb-2">Hi,</h2>
                                </div>
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full md:w-[80%] text-2xl md:text-4xl border-b border-[#141413]/10 focus:border-[#141413] outline-none py-4 bg-transparent transition-all placeholder:text-[#141413]/20 font-medium"
                                    autoFocus
                                />
                                <div className="w-full md:w-[80%] flex justify-start mt-4 h-12">
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            className="px-10 bg-[#141413] text-[#F0EEE6] rounded-full font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
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
                            <div className="w-full flex flex-col items-center gap-8">
                                <div className="text-left w-full md:w-[80%]">
                                    <h2 className="text-3xl md:text-5xl text-[#141413] font-medium mb-2">Your Email ID</h2>
                                </div>
                                <input
                                    type="email"
                                    placeholder="sarajones@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full md:w-[80%] text-2xl md:text-4xl border-b border-[#141413]/10 focus:border-[#141413] outline-none py-4 bg-transparent transition-all placeholder:text-[#141413]/20 font-medium"
                                    autoFocus
                                />
                                <div className="w-full md:w-[80%] flex justify-start mt-4 h-12">
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            className="px-10 bg-[#141413] text-[#F0EEE6] rounded-full font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
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
                            <div className="w-full flex flex-col items-center gap-8">
                                <div className="text-left w-full md:w-[80%]">
                                    <h2 className="text-3xl md:text-5xl text-[#141413] font-medium mb-2">What best describes you?</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-[80%]">
                                    {roles.map((role) => (
                                        <button
                                            key={role}
                                            onClick={() => setFormData({ ...formData, role: role })}
                                            className={`flex items-center justify-between gap-3 text-left py-4 px-6 rounded-2xl border transition-all duration-200 ${formData.role === role ? "bg-[#141413] text-[#F0EEE6] border-[#141413]" : "bg-transparent text-[#141413] border-[#141413]/10 hover:border-[#141413]/30"}`}
                                        >
                                            <span className="text-lg font-medium">{role}</span>
                                            {formData.role === role && <div className="w-2 h-2 rounded-full bg-[#F0EEE6]" />}
                                        </button>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    placeholder="If Other Type Here"
                                    value={formData.otherRole}
                                    onChange={(e) => setFormData({ ...formData, otherRole: e.target.value, role: "Other" })}
                                    className="w-full md:w-[80%] text-xl md:text-2xl border-b border-[#141413]/10 focus:border-[#141413] outline-none py-3 bg-transparent transition-all placeholder:text-[#141413]/20 font-medium"
                                />

                                <div className="w-full md:w-[80%] flex justify-start mt-4 h-12">
                                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                                    {isStepValid() && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => paginate(1)}
                                            disabled={isSubmitting}
                                            className="px-10 bg-[#141413] text-[#F0EEE6] rounded-full font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
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
                            <div className="w-full flex flex-col items-center gap-8 text-center md:text-left">
                                <div className="w-full md:w-[80%] text-center">
                                    <h2 className="text-4xl md:text-7xl text-[#141413] font-medium leading-none tracking-tighter">
                                        Thank You So Much
                                    </h2>
                                    <h2 className="text-3xl md:text-5xl text-[#141413] font-medium mt-6 opacity-60">
                                        {getFirstName(formData.name)},
                                    </h2>
                                </div>
                                <div className="w-full md:w-[80%] text-center">
                                    <p className="text-xl md:text-2xl text-[#141413]/70 font-medium italic">
                                        {formData.system.toLowerCase() === "windows"
                                            ? "You’re in. Downloading Aura…"
                                            : "You're on the list. We'll notify you soon."}
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] flex justify-center mt-8 h-12">
                                    <button
                                        onClick={onClose}
                                        className="px-12 bg-[#141413] text-[#F0EEE6] rounded-full font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
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
                    <div className="absolute bottom-10 left-0 right-0 z-50 flex justify-center">
                        <button
                            onClick={() => paginate(-1)}
                            className="flex items-center gap-2 text-[#141413]/40 hover:text-[#141413] transition-all font-medium py-3 px-6 rounded-full hover:bg-[#141413]/5"
                        >
                            <ChevronLeft className="w-5 h-5" /> Previous Slide
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default NotifyMeForm;
