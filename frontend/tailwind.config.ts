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
        background: "var(--background)",
        foreground: "var(--foreground)",
        OlivesColor: "#007c42",
        SecondaryColor: "#f7f7f7",
        BlueStudent:"#0000FF",
        GreenRegistrar:"#008000",
        RedParent:"#FF0000",
        YellowTeacher:"#a5c90f",
        OrangeAccounting:"#ffb366",
        OrangeStudent: "#FFA500",
        PurpleAnother:"#800080",
        MaleGenderColor: "#00a2fb",
        FemaleGenderColor: "#ed47a8",
      },
    },
  },
  plugins: [],
};
export default config;
