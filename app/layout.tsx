import "./globals.css";
import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "./Floating";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>

        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Premium Safari Theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {

                    colors: {

                      safari: {

                        forest: '#0B3D2E',
                        forestLight: '#145443',

                        sand: '#D6C6A5',
                        sandLight: '#F3EAD7',

                        accent: '#F4A300',
                        accentSoft: '#FFD27A',

                        background: '#FAF8F3',

                        dark: '#1B1B1B'
                      }

                    },

                    fontFamily: {

                      heading: ['Pacifico', 'cursive'],

                      body: ['Josefin Sans', 'sans-serif']

                    },

                    boxShadow: {

                      safari: '0 20px 60px rgba(0,0,0,0.15)',

                      soft: '0 10px 30px rgba(0,0,0,0.08)'

                    },

                    borderRadius: {

                      safari: '24px'

                    },

                    animation: {

                      float: 'float 6s ease-in-out infinite',

                      fadeUp: 'fadeUp 0.8s ease forwards'

                    },

                    keyframes: {

                      float: {
                        '0%, 100%': {
                          transform: 'translateY(0px)'
                        },

                        '50%': {
                          transform: 'translateY(-10px)'
                        }
                      },

                      fadeUp: {
                        '0%': {
                          opacity: '0',
                          transform: 'translateY(30px)'
                        },

                        '100%': {
                          opacity: '1',
                          transform: 'translateY(0)'
                        }
                      }

                    }

                  }
                }
              }
            `,
          }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="theme-color"
          content="#0B3D2E"
        />

        <title>
          Dotto African Adventures & Safaris
        </title>

      </head>

      <body
        className="
          bg-safari-background
          text-safari-dark
          font-body
          antialiased
          overflow-x-hidden
        "
      >

        {/* Premium Ambient Background */}
<div className="fixed inset-0 -z-10 overflow-hidden">

  {/* GENERAL BACKGROUND IMAGE (VERY SUBTLE) */}
  <div
    className="
      absolute inset-0
      bg-cover bg-center
      opacity-[0.5]
      scale-110
    "
    style={{
      backgroundImage: "url('/images/erand.jpg')",
    }}
  />

  {/* Gradient overlay for readability */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-white/60
      via-safari-background/40
      to-safari-background
    "
  />

  {/* Accent glow */}
  <div
    className="
      absolute
      top-[-200px]
      left-1/2
      -translate-x-1/2
      w-[900px]
      h-[900px]
      bg-safari-accent/10
      rounded-full
      blur-3xl
    "
  />

  <div
    className="
      absolute
      bottom-[-200px]
      right-[-100px]
      w-[600px]
      h-[600px]
      bg-safari-forest/10
      rounded-full
      blur-3xl
    "
  />

</div>

        {/* NAVBAR */}
        <Navbar />

        {/* Main App */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
                <FloatingContact />

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}