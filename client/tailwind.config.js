/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    lineHeight: { // 기본 줄 간격을 120%로 설정
      none: "1",
      tight: "1.2",
      snug: "1.2",
      normal: "1.2", // 기본값을 120%로 변경
      relaxed: "1.2",
      loose: "1.2",
    }, extend: {
      fontFamily : {
        sans : ['PP Pangram Sans']
      },
      colors: {
        primary: '#dcdcdc',
        black: '#000000',
        white: '#ffffff',
        gray: '#f7f7f7',
        grayph: '#8c8c8c',
        bg: '#f0ece1',
        detailbg: '#f6f6f6',
        name: '#333333',
        pink: '#fecad6',
        green: '#21a664',
        blue: '#2c5dab',
        blue2: '#2a5ea5',
        sky: '#dfe7f2',
        orange: '#f15b41',
        yellow: '#f6e163',
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
}

