import { AppWindow, Globe, File, Timer, Earth, Sparkles } from "lucide-react";

export const NAV_ITEMS = [
  {
    href: "#fetures",
    label: "Features",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
] as const;

export const FEATURES = [
  {
    title: "Instant Class Creation",
    description:
      "Quickly create and manage classes with a simple interface and real-time course previews.",
    icon: Timer,
  },
  {
    title: "Cross Platform",
    description:
      "Join or teach classes from any device, anywhere, with seamless online access and collaboration.",
    icon: Earth,
  },
  {
    title: "AI Content Creation",
    description:
      "Get instant AI-powered content tailored to your course and audience, saving you time and effort.",
    icon: Sparkles,
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Starter",
    priceMonth: "$0",
    priceAnnual: "$0",
    priceSuffixM: "/month",
    priceSuffixA: "/year",
    description:
      "Basic features for individuals creating their first online class.",
    features: ["1 Course", "1 Class", "Community access"],

    highlight: false,
  },
  {
    name: "Creator",
    priceMonth: "$19.99",
    priceAnnual: "$199.99",
    priceSuffixM: "/month",
    priceSuffixA: "/year",
    description: "Advanced features for creators with multiple classes.",
    features: [
      "3 Courses",
      "Unlimited Classes",
      "Community Access",
      "AI Content Creation",
      "Image Support",
    ],
    highlight: true,
  },
  {
    name: "Professional",
    priceMonth: "$49.99",
    priceAnnual: "$499.99",
    priceSuffixM: "/month",
    priceSuffixA: "/year",
    description: "Perfect for professionals creating multiple online courses.",
    features: [
      "Unlimited Courses",
      "Unlimited Classes",
      "Community Access",
      "AI Content Creation",
      "Video Support",
    ],
    highlight: false,
  },
] as const;
