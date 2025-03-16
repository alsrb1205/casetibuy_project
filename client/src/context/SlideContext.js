import { createContext, useState } from "react";

// Context 생성
export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [slideList, setSlideList] = useState([]);

  return (
    <SlideContext.Provider value={{ slideList, setSlideList }}>
      {children}
    </SlideContext.Provider>
  );
};
