import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  ChevronRight,
  Filter,
  Globe,
  Landmark,
  Loader2,
  Send,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  AnimatePresence,
  type Transition,
  type Variants,
  motion,
} from "motion/react";
import { useRef, useState } from "react";
import { useSubmitContactForm } from "./hooks/useQueries";

/* ─────────────────────────────────────────
   Fade-up animation variants
───────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } as Transition },
};

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function Navbar({ onGetLeads }: { onGetLeads: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.08 0.01 280 / 0.98) 0%, oklch(0.08 0.01 280 / 0.85) 100%)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.22 0.015 280 / 0.5)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm"
          style={{ background: "oklch(0.75 0.15 75)" }}
        >
          <span
            className="font-display font-bold text-sm"
            style={{ color: "oklch(0.1 0.008 280)" }}
          >
            T
          </span>
        </div>
        <span className="font-heading font-bold text-lg tracking-wide text-gold">
          TEJ
          <span className="text-foreground font-light text-sm ml-1.5 tracking-widest uppercase opacity-70">
            Agency
          </span>
        </span>
      </div>

      {/* Nav CTA */}
      <Button
        data-ocid="nav.primary_button"
        onClick={onGetLeads}
        size="sm"
        className="font-heading font-semibold tracking-wide uppercase text-xs px-5 py-2 gold-glow transition-all duration-300 hover:scale-105"
        style={{
          background: "oklch(0.75 0.15 75)",
          color: "oklch(0.1 0.008 280)",
          border: "none",
        }}
      >
        Get Qualified Leads
        <ChevronRight className="ml-1 h-3 w-3" />
      </Button>
    </motion.header>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection({ onGetLeads }: { onGetLeads: () => void }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.08 0.012 285) 0%, oklch(0.1 0.008 280) 50%, oklch(0.12 0.01 270) 100%)",
      }}
    >
      {/* Hero background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          opacity: 0.18,
        }}
      />

      {/* Radial gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.75 0.15 75 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.75 0.15 75 / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.75 0.15 75 / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center py-32 pt-40">
        {/* Pill badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(0.75 0.15 75 / 0.12)",
              border: "1px solid oklch(0.75 0.15 75 / 0.35)",
              color: "oklch(0.78 0.14 75)",
            }}
          >
            <Star className="h-3 w-3 fill-current" />
            AI-Powered B2B Lead Generation
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="block text-foreground">Connecting Dubai's</span>
          <span className="block gold-gradient-text">Premium Real Estate</span>
          <span className="block text-foreground">Experts with India's</span>
          <span className="block gold-gradient-text">Elite HNWIs</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "oklch(0.7 0.03 80)" }}
        >
          Stop wasting time on generic lead databases. We leverage custom AI
          engines to supply verified Indian Founders, CEOs, and High-Net-Worth
          Individuals actively looking to diversify their wealth into tax-free
          UAE assets.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            data-ocid="hero.primary_button"
            onClick={onGetLeads}
            size="lg"
            className="font-heading font-bold tracking-wide uppercase text-sm px-10 py-6 gold-glow transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.78 0.16 78) 0%, oklch(0.68 0.18 68) 100%)",
              color: "oklch(0.1 0.008 280)",
              border: "none",
              borderRadius: "2px",
            }}
          >
            Get Qualified Leads
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          <div
            className="flex items-center gap-2"
            style={{ color: "oklch(0.55 0.03 80)" }}
          >
            <div
              className="w-6 h-px"
              style={{ background: "oklch(0.35 0.05 75)" }}
            />
            <span className="text-sm font-heading tracking-wide">
              Exclusive. Verified. Delivered.
            </span>
            <div
              className="w-6 h-px"
              style={{ background: "oklch(0.35 0.05 75)" }}
            />
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "HNWIs Delivered" },
            { value: "₹50Cr+", label: "Avg. Investor Net Worth" },
            { value: "48h", label: "Lead Delivery Time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4"
              style={{ borderTop: "1px solid oklch(0.75 0.15 75 / 0.2)" }}
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div
                className="text-xs font-heading tracking-wide uppercase"
                style={{ color: "oklch(0.5 0.03 80)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.1 0.008 280))",
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────
   PROBLEM SECTION
───────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Outdated Lists",
      desc: "Generic databases filled with irrelevant contacts who have no intent to invest. You're paying for noise.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "No Intent Signal",
      desc: "No way to know who is actually ready to invest right now. Every call is a cold start with zero context.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Wasted Time",
      desc: "Hours spent manually qualifying leads that go nowhere. Time is your most valuable asset — stop burning it.",
    },
  ];

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.1 0.008 280)" }}
    >
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-gold mb-4">
              The Challenge
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              The Problem with
              <br />
              <span className="gold-gradient-text">
                Traditional Lead Generation
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, _i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="card-hover relative p-8 rounded-sm"
                style={{
                  background: "oklch(0.13 0.01 280)",
                  border: "1px solid oklch(0.22 0.015 280)",
                }}
              >
                {/* Red accent for pain */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-sm mb-6"
                  style={{
                    background: "oklch(0.6 0.22 25 / 0.12)",
                    color: "oklch(0.7 0.2 25)",
                    border: "1px solid oklch(0.6 0.22 25 / 0.25)",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.58 0.03 80)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY INDIAN HNWIs SECTION
───────────────────────────────────────── */
function WhyIndianSection() {
  const reasons = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "UAE Golden Visa",
      desc: "Indian HNWIs seek permanent residency through Dubai property investment — a clear, proven pathway to a UAE lifestyle.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Tax-Free Returns",
      desc: "Zero capital gains tax. Zero income tax on UAE assets. Indian investors recognize the compounding power of tax-free growth.",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Rupee Hedge",
      desc: "Protect generational wealth against Rupee depreciation by holding USD/AED-denominated premium real estate assets.",
    },
  ];

  return (
    <section
      className="relative py-28 noise-overlay overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.12 0.01 275) 0%, oklch(0.1 0.008 280) 100%)",
      }}
    >
      {/* Gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.75 0.15 75 / 0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-gold mb-4">
              The Opportunity
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Why Indian Investors Are
              <br />
              <span className="gold-gradient-text">Flocking to Dubai</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, _i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="card-hover relative p-8 rounded-sm"
                style={{
                  background: "oklch(0.13 0.01 280)",
                  border: "1px solid oklch(0.35 0.06 75 / 0.25)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-sm mb-6"
                  style={{
                    background: "oklch(0.75 0.15 75 / 0.1)",
                    color: "oklch(0.78 0.14 75)",
                    border: "1px solid oklch(0.75 0.15 75 / 0.25)",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.58 0.03 80)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   3-STEP AI DELIVERY SYSTEM
───────────────────────────────────────── */
function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: <Bot className="h-7 w-7" />,
      title: "Intelligent Sourcing",
      desc: "Our automated AI workflows scan thousands of Indian companies to identify verified Founders and C-level executives actively expanding their portfolios.",
    },
    {
      number: "02",
      icon: <Filter className="h-7 w-7" />,
      title: "Wealth & Intent Verification",
      desc: "We filter our lists to ensure we only target individuals with the capital capability for high-ticket Dubai real estate — no wasted conversations.",
    },
    {
      number: "03",
      icon: <Send className="h-7 w-7" />,
      title: "Direct Connection",
      desc: "You get highly qualified, exclusive leads ready for a strategic conversation about off-plan investments — delivered directly to your inbox.",
    },
  ];

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.1 0.008 280)" }}
    >
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-gold mb-4">
              How It Works
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our 3-Step
              <br />
              <span className="gold-gradient-text">AI Delivery System</span>
            </h2>
          </motion.div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Connector line desktop */}
            <div
              className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.75 0.15 75 / 0.3), oklch(0.75 0.15 75 / 0.3), transparent)",
              }}
            />

            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((step, _i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number + Icon circle */}
                  <div className="relative mb-8">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center gold-glow"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.75 0.15 75 / 0.15) 0%, oklch(0.75 0.15 75 / 0.05) 100%)",
                        border: "1px solid oklch(0.75 0.15 75 / 0.4)",
                        color: "oklch(0.78 0.14 75)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="absolute -top-3 -right-3 font-display font-bold text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        background: "oklch(0.75 0.15 75)",
                        color: "oklch(0.1 0.008 280)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-xs mx-auto"
                    style={{ color: "oklch(0.58 0.03 80)" }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY TEJ SECTION
───────────────────────────────────────── */
function WhyTejSection() {
  const reasons = [
    {
      title: "Real-Time AI Tracking",
      desc: "Not static lists. Our AI continuously monitors fresh signals — not stale databases from six months ago.",
    },
    {
      title: "Verified Intent Signals",
      desc: "Every lead is filtered for active intent to invest in UAE real estate, not just wealth status.",
    },
    {
      title: "Exclusive, Not Recycled",
      desc: "Your leads are exclusive to you. We do not resell the same contacts to your competitors.",
    },
    {
      title: "Inbox-Ready Delivery",
      desc: "Leads are formatted, profiled, and delivered directly — no digging through spreadsheets.",
    },
    {
      title: "Indian HNWI Focus",
      desc: "We specialize exclusively in Indian HNWIs, giving you the deepest intelligence in this specific market.",
    },
  ];

  return (
    <section
      className="relative py-28 noise-overlay overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.12 0.012 275) 0%, oklch(0.1 0.008 280) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.75 0.15 75 / 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-gold mb-4">
              Our Edge
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Why Dubai's Top Advisors
              <br />
              <span className="gold-gradient-text">Choose TEJ</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((item, _i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="card-hover group relative p-7 rounded-sm"
                style={{
                  background: "oklch(0.13 0.01 280)",
                  border: "1px solid oklch(0.22 0.015 280)",
                }}
              >
                {/* Gold left accent line */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full transition-all duration-300 group-hover:top-3 group-hover:bottom-3"
                  style={{ background: "oklch(0.75 0.15 75)" }}
                />
                <div className="pl-5">
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.55 0.03 80)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final card — CTA teaser */}
            <motion.div
              variants={fadeUp}
              className="card-hover relative p-7 rounded-sm flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.15 75 / 0.12) 0%, oklch(0.75 0.15 75 / 0.04) 100%)",
                border: "1px solid oklch(0.75 0.15 75 / 0.35)",
              }}
            >
              <div className="pl-5">
                <div
                  className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                  style={{ background: "oklch(0.75 0.15 75)" }}
                />
                <h3 className="font-heading font-bold text-base text-gold mb-2">
                  Ready to Get Started?
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.58 0.03 80)" }}
                >
                  Join Dubai's top advisors who trust TEJ to fill their pipeline
                  with verified Indian investors.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT FORM SECTION
───────────────────────────────────────── */
function ContactSection({
  sectionRef,
}: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agencyName: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const submitMutation = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const result = await submitMutation.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        agencyName: form.agencyName,
        message: form.message,
      });
      if (result.__kind__ === "ok") {
        setFormStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          agencyName: "",
          message: "",
        });
      } else {
        setFormStatus("error");
        setErrorMsg(result.err || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const isLoading = submitMutation.isPending;

  const inputStyle = {
    background: "oklch(0.16 0.012 280)",
    border: "1px solid oklch(0.28 0.018 280)",
    color: "oklch(0.94 0.02 80)",
    borderRadius: "2px",
  };

  const labelStyle = "text-sm font-heading font-medium tracking-wide";

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.1 0.008 280)" }}
      id="contact"
    >
      {/* Top divider */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.75 0.15 75 / 0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container max-w-2xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-xs font-heading font-semibold tracking-widest uppercase text-gold mb-4">
              Get Started
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Scale
              <br />
              <span className="gold-gradient-text">Your Portfolio?</span>
            </h2>
            <p className="text-base" style={{ color: "oklch(0.6 0.03 80)" }}>
              Get your first batch of qualified Indian investors. Fill out the
              form and we'll be in touch within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div
              className="p-8 md:p-10 rounded-sm"
              style={{
                background: "oklch(0.13 0.01 280)",
                border: "1px solid oklch(0.25 0.016 280)",
                boxShadow: "0 40px 100px oklch(0 0 0 / 0.4)",
              }}
            >
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    key="success"
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: "oklch(0.65 0.18 145 / 0.12)",
                        border: "1px solid oklch(0.65 0.18 145 / 0.3)",
                      }}
                    >
                      <CheckCircle2
                        className="h-8 w-8"
                        style={{ color: "oklch(0.7 0.18 145)" }}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      Submission Received!
                    </h3>
                    <p style={{ color: "oklch(0.6 0.03 80)" }}>
                      Thank you for reaching out. Our team will contact you
                      within 24 hours with your first qualified leads.
                    </p>
                    <Button
                      onClick={() => setFormStatus("idle")}
                      variant="outline"
                      size="sm"
                      className="mt-4 font-heading tracking-wide"
                      style={{
                        borderColor: "oklch(0.75 0.15 75 / 0.4)",
                        color: "oklch(0.75 0.15 75)",
                        background: "transparent",
                      }}
                    >
                      Submit Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className={labelStyle}
                          style={{ color: "oklch(0.75 0.04 80)" }}
                        >
                          Full Name <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          data-ocid="contact.name_input"
                          placeholder="Rahul Sharma"
                          required
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          className="focus:ring-1 focus:ring-yellow-600/50 placeholder:opacity-30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className={labelStyle}
                          style={{ color: "oklch(0.75 0.04 80)" }}
                        >
                          Email Address <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          data-ocid="contact.email_input"
                          placeholder="rahul@company.com"
                          required
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          className="focus:ring-1 focus:ring-yellow-600/50 placeholder:opacity-30"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Agency */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className={labelStyle}
                          style={{ color: "oklch(0.75 0.04 80)" }}
                        >
                          Phone Number <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          data-ocid="contact.phone_input"
                          placeholder="+971 50 000 0000"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          style={inputStyle}
                          className="focus:ring-1 focus:ring-yellow-600/50 placeholder:opacity-30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="agencyName"
                          className={labelStyle}
                          style={{ color: "oklch(0.75 0.04 80)" }}
                        >
                          Agency / Company Name{" "}
                          <span className="text-gold">*</span>
                        </Label>
                        <Input
                          id="agencyName"
                          name="agencyName"
                          data-ocid="contact.agency_input"
                          placeholder="Prestige Properties Dubai"
                          required
                          value={form.agencyName}
                          onChange={handleChange}
                          style={inputStyle}
                          className="focus:ring-1 focus:ring-yellow-600/50 placeholder:opacity-30"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className={labelStyle}
                        style={{ color: "oklch(0.75 0.04 80)" }}
                      >
                        Message{" "}
                        <span style={{ color: "oklch(0.5 0.03 80)" }}>
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        data-ocid="contact.message_textarea"
                        placeholder="Tell us about your target market, average deal size, or any specific requirements..."
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical" }}
                        className="focus:ring-1 focus:ring-yellow-600/50 placeholder:opacity-30"
                      />
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {formStatus === "error" && (
                        <motion.div
                          data-ocid="contact.error_state"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-3 p-4 rounded-sm"
                          style={{
                            background: "oklch(0.6 0.22 25 / 0.1)",
                            border: "1px solid oklch(0.6 0.22 25 / 0.3)",
                          }}
                        >
                          <AlertCircle
                            className="h-4 w-4 shrink-0"
                            style={{ color: "oklch(0.7 0.2 25)" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "oklch(0.75 0.15 25)" }}
                          >
                            {errorMsg}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={isLoading}
                      className="w-full font-heading font-bold tracking-wide uppercase text-sm py-6 gold-glow transition-all duration-300 hover:brightness-110"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.78 0.16 78) 0%, oklch(0.68 0.18 68) 100%)",
                        color: "oklch(0.1 0.008 280)",
                        border: "none",
                        borderRadius: "2px",
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Qualified Leads
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p
                      className="text-center text-xs"
                      style={{ color: "oklch(0.45 0.02 80)" }}
                    >
                      No spam. No recycled lists. Your information is strictly
                      confidential.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "oklch(0.08 0.008 280)",
        borderTop: "1px solid oklch(0.18 0.012 280)",
      }}
    >
      <div className="container max-w-5xl mx-auto px-6">
        {/* Top row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8"
          style={{ borderBottom: "1px solid oklch(0.18 0.012 280)" }}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-sm"
              style={{ background: "oklch(0.75 0.15 75)" }}
            >
              <span
                className="font-display font-bold text-base"
                style={{ color: "oklch(0.1 0.008 280)" }}
              >
                T
              </span>
            </div>
            <div>
              <span className="font-heading font-bold text-xl tracking-wide text-gold">
                TEJ Agency
              </span>
              <p
                className="text-xs font-heading tracking-widest uppercase"
                style={{ color: "oklch(0.45 0.03 80)" }}
              >
                AI-Powered Lead Intelligence
              </p>
            </div>
          </div>

          {/* Founder info */}
          <div className="text-right">
            <p className="font-heading font-semibold text-sm text-foreground">
              Founded by Ajay Kumar
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.48 0.03 80)" }}
            >
              Bilaspur, Himachal Pradesh, India
            </p>
            <p className="text-xs mt-0.5 text-gold-muted font-heading tracking-wide">
              Serving Dubai's Top Real Estate Advisors
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs" style={{ color: "oklch(0.42 0.025 80)" }}>
              © {year} TEJ Agency. All rights reserved.
            </p>
            <Link
              to="/admin"
              data-ocid="footer.admin_link"
              className="text-xs font-heading tracking-wide transition-opacity duration-200 opacity-40 hover:opacity-70"
              style={{ color: "oklch(0.5 0.04 75)" }}
            >
              Admin
            </Link>
          </div>
          <p className="text-xs" style={{ color: "oklch(0.38 0.02 80)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-200"
              style={{ color: "oklch(0.5 0.04 75)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onGetLeads={scrollToContact} />
      <main>
        <HeroSection onGetLeads={scrollToContact} />
        <div className="section-divider" />
        <ProblemSection />
        <div className="section-divider" />
        <WhyIndianSection />
        <div className="section-divider" />
        <ProcessSection />
        <div className="section-divider" />
        <WhyTejSection />
        <ContactSection sectionRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
