import { useMemo } from "react";

export default function useColorScheme() {
  // 빨, 주, 노, 초, 파, 남, 보 순서의 색상 테마 예시 (원하는 HEX 코드로 변경 가능)
  const colorSchemes = useMemo(() => [
    { bg: "bg-green", text: "text-black" },     
    { bg: "bg-blue", text: "text-white" },      
    { bg: "bg-orange", text: "text-black" },     
    { bg: "bg-yellow", text: "text-black" },     
    { bg: "bg-pink", text: "text-black" }   
  ], []);

  // getColorScheme 함수를 반환: index에 따라 색상 테마를 결정
  const getColorScheme = (index) => {
    return colorSchemes[index % colorSchemes.length];
  };

  return getColorScheme;
}
