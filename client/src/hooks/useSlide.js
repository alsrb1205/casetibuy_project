import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SlideContext } from "../context/SlideContext.js";
import { useDetail } from "../hooks/useDetail.js";

export const useSlide = () => {
  const { slideList, setSlideList } = useContext(SlideContext);
  const { getProductList, parseCaseAndColor } = useDetail();
  const [hnrSlides, setHnrSlides] = useState({
    recommended: [],
    hot: [],
    new: [],
  });

  /**
   * slides.json 전체 데이터 가져오기
   */
  useEffect(() => {
    axios
      .get("/data/slides.json")
      .then((res) => {
        setSlideList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /**
   * server product 중 isHot, isNew, isRec 데이터 가져오기
   */

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductList();
      if (!data || data.length === 0) return;

      const categorizedData = {
        recommended: [],
        hot: [],
        new: [],
      };

      // 배경색 배열
      const bgColors = ["bg-orange", "bg-green", "bg-blue", "bg-yellow"];

      // 각 상품의 출력할 데이터, 스타일 정리
      data.forEach((item) => {
        // parseCaseAndColor 호출하여 케이스와 색상 정보 추출
        const { caseType, color } = parseCaseAndColor(item.repImage);

        const productData = {
          image: `http://localhost:9000/${item.repImage}`,
          pid: item.pid,
          title: item.name,
          btnText: "Buy Now",
          btnStyle: "py-12 px-20 text-20 rounded-full border",
          bgColor: bgColors[item.pid % bgColors.length],
          cpadding: "p-24",
          cround: "rounded-20",
          activeCase: caseType,
          activeColor: color,
        };

        if (item.isRec === 1) categorizedData.recommended.push(productData);
        if (item.isHot === 1) categorizedData.hot.push(productData);
        if (item.isNew === 1) categorizedData.new.push(productData);
      });

      setHnrSlides(categorizedData);
    };

    fetchData();
  }, [getProductList, parseCaseAndColor]);

  return { slideList, setSlideList, hnrSlides, setHnrSlides };
};
