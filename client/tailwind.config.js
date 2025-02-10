/** @type {import('tailwindcss').Config} */
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
    },    extend: {
      colors:{
        primary: '#dcdcdc',
        black: '#000000',
        white: '#ffffff',
        gray: '#f7f7f7',
        bg: '#f0ece1',
        detailbg: '#f6f6f6',
        name: '#333333',
        pink: '#fecad6',
        green: '#21a664',
        blue: '#2c5dab',
        red: '#f15b41',
        yellow: '#f6e163',
    },
    lineHeight: {

    }

    },
  },
  plugins: [],
}

