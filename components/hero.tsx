"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Code2, Download, FileCode, Palette, Braces } from "lucide-react";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/contexts/language-provider";

const orbitingIcons = [
  { icon: FileCode, delay: 0 },
  { icon: Palette, delay: 2.67 },
  { icon: Braces, delay: 5.33 },
];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="space-y-2">
            <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {t.welcome}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              {t.namePrefix}{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {t.name}
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
              {t.title}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 text-center"
            >
              {t.viewWork}
            </a>
            <a
              href="/pricing"
              className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all hover:scale-105 text-center"
            >
              {t.viewPricing}
            </a>
            {/* <a
              href="/SaraKhalifa_CV.pdf"
              download="SaraKhalifa_CV.pdf"
              className="px-8 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.downloadCVButton}
            </a> */}
            <a
              href="https://drive.google.com/file/d/11qEgAr2x_r0Tm16RBS1b66IRvvLVylW8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
              aria-label="Download CV"
            >
              {t.downloadCV}
            </a>
            {/* <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-center"
            >
              {t.getInTouch}
            </a> */}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t.projectsCompleted}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <p className="text-3xl font-bold text-secondary">120+</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t.trainingHours}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t.techSkills}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image with Orbiting Icons */}
        <div
          className={`relative h-80 md:h-[500px] flex items-center justify-center transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative w-full h-full max-w-md max-h-md flex items-center justify-center">
            {/* Orbit Path - Circle Border */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                opacity="0.3"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Profile Image - Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-2xl shadow-primary/60">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sara-rK87L4oHmkz5MjtzL78i5t5fWPEq06.png"
                  alt="Sara Khalifa - Full Stack Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
            </div>

            {/* Orbiting Icons - Animated */}
            <style>{`
              @keyframes orbiting {
                0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
                100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
              }
              .orbit-icon {
                animation: orbiting 8s linear infinite;
                position: absolute;
                width: 56px;
                height: 56px;
                left: 50%;
                top: 50%;
                margin-left: -28px;
                margin-top: -28px;
              }
            `}</style>

            {orbitingIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="orbit-icon flex items-center justify-center"
                  style={{
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/50 border border-primary/30 hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
