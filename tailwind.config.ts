import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#000000',
        secondaryText: '#878895',
        cardBackground: '#F8FAFB',
        stroke: '#ECECEE',
        positiveGreen: '#2EAE75',
        positiveGreenBg: '#2EAE751A', 
        primaryRed: '#DB192B',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],  
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
export default config;
