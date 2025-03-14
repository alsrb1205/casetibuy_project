import { useContext, useEffect } from "react";
import axios from "axios";
import { SlideContext } from "../context/SlideContext.js";

export const useSlide = () => {
  const { slideList, setSlideList } = useContext(SlideContext);

  /**
   * slides.json 전체 데이터 가져오기(홈에 들어가는 이미지, 스타일 지정)
   */
  useEffect(() => {
    axios
      .get("/data/slides.json")
      .then((res) => {
        console.log("[SlideList] ==>", res.data);
        setSlideList(res.data);
      })
      .catch((error) => console.log(error));
  }, [slideList, setSlideList]);

  return { slideList, setSlideList };
};
