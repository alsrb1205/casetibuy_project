/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.2",
      normal: "1.2",
      relaxed: "1.2",
      loose: "1.2",
    },
    extend: {
      fontFamily: {
        sans: ["PP Pangram Sans"],
      },
      colors: {
        primary: "#dcdcdc",
        black: "#000000",
        black2: "#191919",
        silver: "#c0c0c0",
        white: "#ffffff",
        gray: "#f7f7f7",
        gray2: "#e8e8e8",
        grayph: "#8c8c8c",
        grayborder: "#f0f0f0",
        grayhborder: "#e8e8e8",
        bg: "#f0ece1",
        detailbg: "#f6f6f6",
        name: "#333333",
        pink: "#fecad6",
        green: "#21a664",
        lightgreen: "baef80",
        blue: "#2c5dab",
        blue2: "#2a5ea5",
        babyblue: "#83daef",
        sky: "#dfe7f2",
        skyblue: "#83daef",
        purple: "#c77ee1",
        orange: "#f15b41",
        yellow: "#f6e163",
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      borderRadius: px0_100,
      animation: {
        shake: 'shake 0.15s',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
