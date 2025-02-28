import React, { useContext, useEffect, useState } from 'react';
import { DetailContext } from '../../context/DetailContext';
import axios from 'axios';
import { useDetail } from '../../hooks/useDetail';

export default function DetailTopLeft() {
    const { activeCase,activeColor, productList, casesData } = useContext(DetailContext);
    const { getProductList, parseCaseAndColor } = useDetail();


    const handleImage = () => {
        if (activeCase === "bounce") {
            return '/images/detail/bounce/bouncedefault.jpg'
        } else if (activeCase === "ring") {
            return '/images/detail/ring/ringdefault.jpg'
        } else if (activeCase === "mirror") {
            return '/images/detail/mirror/mirrordefault.jpg'
        }
    }

      // JSON에서 현재 케이스(activeCase)와 컬러(activeColor)에 해당하는 이미지 배열을 추출
  const getJsonImages = (caseType, color) => {
    // JSON 구조: detailFeature[caseType].colorImg[0] 안에 { colorKey: [이미지경로1, 이미지경로2, ...] } 형태
    if (
      casesData[caseType] &&
      casesData[caseType].colorImg &&
      casesData[caseType].colorImg.length > 0
    ) {
      const colorObj = casesData[caseType].colorImg[0];
      if (colorObj[color]) {
        return colorObj[color];
      }
    }
    return [];
  };

  // JSON 이미지 배열 (예: ["images/iphone16pro=common/iphone16p_common_side_case_bounce_color_babyblue.png", ...])
  const jsonImages = getJsonImages(activeCase, activeColor);

  // URL 보정: JSON에 저장된 경로가 상대경로이면, "http://localhost:9000/"를 붙이고, 백슬래시를 슬래시로 변환
  const getFullUrl = (imgPath) => {
    if (!imgPath) return "";
    // 만약 경로에 http가 포함되어 있으면 그대로 사용
    if (imgPath.startsWith("http")) return imgPath;
    return "http://localhost:9000/" + imgPath.replace(/\\/g, "/");
  };

console.log(productList[0]);

    return (
        <div className="relative flex-1">

            {productList.map(product => {
          // 상품의 upload_file 배열을 복사
          let files = product.upload_file ? [...product.upload_file] : [];
  
          // 1) 필터링: bounce 케이스만
          files = files.filter(f => {
            const { caseType } = parseCaseAndColor(f);
            return caseType === activeCase;
          });
  
  
          return (
            <div key={product.pid}>
              <h2>{product.name}</h2>
              <div>
                {files.map((filePath, idx) => {
                  const fullUrl = "http://localhost:9000/" + filePath.replace(/\\/g, "/");
                  return (
                    <img
                      key={idx}
                      src={fullUrl}
                      alt={`img-${idx}`}
                      style={{ width: "100px", margin: "5px" }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <button onClick={()=>getProductList()}>asdasd</button>

            <div className="flex flex-col gap-17">
                <div className="relative flex w-full">
                    <img
                        src="/images/1.webp"
                        alt=""
                        className="w-[83.2%] h-auto object-cover justify-center mx-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-17">
                    <img
                        src="/images/2.webp"
                        alt=""
                        className="object-cover w-[98%] h-auto"
                    />
 <img
            src={
              jsonImages[0]
            }
            alt=""
            className="object-cover w-full h-auto"
          />                </div>
                <div className="grid grid-cols-2 gap-17">
                <img
            src={
              jsonImages[1]
            }
            alt=""
            className="object-cover w-full h-auto"
          />                   <img
                    src={handleImage()}
                    alt=""
                    className="object-cover w-full h-auto"
                    />

                </div>
            </div>
        </div>

    );
}





// import React, { useContext, useEffect, useState } from 'react';
// import { DetailContext } from '../../context/DetailContext';
// import { useDetail } from '../../hooks/useDetail';



// export default function DetailTopLeft() {
//   // DetailContext에서 activeCase, activeColor, productList 가져오기
//   const { activeCase, activeColor, productList,casesData } = useContext(DetailContext);
//   const { getProductList, parseCaseAndColor } = useDetail();
// // JSON에 있는 기본 이미지(종류+컬러) 추출 함수
// function getJsonDefaultImages(caseType, color) {

//     const caseData = casesData[caseType];
//     if (!caseData || !caseData.colorImg) return [];
//     const colorObj = caseData.colorImg[0];
//     if (!colorObj[color]) return [];
//     return colorObj[color].map(imgPath =>
//       imgPath.startsWith("http")
//         ? imgPath
//         : "http://localhost:9000/" + imgPath.replace(/\\/g, "/")
//     );
//   }
//   // DB에서 필터링한 이미지 배열 (activeCase, activeColor)
//   const [dbImages, setDbImages] = useState([]);

//   // (1) activeCase, activeColor 변경 시 상품 목록 갱신
//   useEffect(() => {
//     getProductList();
//   }, [activeCase, activeColor]);

//   // (2) productList 업데이트 시 DB 이미지 필터링 (activeCase + activeColor)
//   useEffect(() => {
//     if (!productList || productList.length === 0) {
//       setDbImages([]);
//       return;
//     }
//     let images = [];
//     productList.forEach(product => {
//       const files = product.upload_file || [];
//       files.forEach(filePath => {
//         const { caseType, color } = parseCaseAndColor(filePath);
//         if (caseType === activeCase && color === activeColor) {
//           const fullUrl = "http://localhost:9000/" + filePath.replace(/\\/g, "/");
//           images.push(fullUrl);
//         }
//       });
//     });
//     setDbImages(images);
//   }, [productList, activeCase, activeColor, parseCaseAndColor]);

//   // (3) handleImage(): 케이스별 기본(default) 이미지 (컬러 무관)
//   const handleImage = () => {
//     if (activeCase === "bounce") {
//       return '/images/detail/bounce/bouncedefault.jpg';
//     } else if (activeCase === "ring") {
//       return '/images/detail/ring/ringdefault.jpg';
//     } else if (activeCase === "mirror") {
//       return '/images/detail/mirror/mirrordefault.jpg';
//     }
//     return '/images/default.png';
//   };

//   // JSON 기본 이미지 (종류+컬러) 추출
//   const jsonDefaultImages = getJsonDefaultImages(activeCase, activeColor);
//   // 케이스별 기본 이미지
//   const caseDefaultImage = handleImage();

//   return (
//     <div className="relative flex-1">
//       <div className="flex flex-col gap-17">
//         {/* 예시 상단 영역 */}
//         <div className="relative flex w-full">
//           <img
//             src="/images/1.webp"
//             alt=""
//             className="w-[83.2%] h-auto object-cover justify-center mx-auto"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-17">
//           <img
//             src="/images/2.webp"
//             alt=""
//             className="object-cover w-[98%] h-auto"
//           />
//           <img
//             src="/images/3.png"
//             alt=""
//             className="object-cover w-[98%] h-auto"
//           />
//         </div>

//         {/* 이미지 출력 섹션 */}
//         <div className="flex flex-col gap-10">
//           {/* A. DB에서 가져온 이미지 */}
//           <div>
//             <h3 className="text-lg font-bold">DB 이미지</h3>
//             {dbImages.length > 0 ? (
//               <div className="grid grid-cols-3 gap-4">
//                 {dbImages.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`DB 이미지 ${idx + 1}`}
//                     className="object-cover w-full h-auto"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p>DB 이미지가 없습니다.</p>
//             )}
//           </div>

//           {/* B. JSON 기본 이미지 (종류+컬러) */}
//           <div>
//             <h3 className="text-lg font-bold">JSON 기본 이미지 (종류+컬러)</h3>
//             {jsonDefaultImages.length > 0 ? (
//               <div className="grid grid-cols-3 gap-4">
//                 {jsonDefaultImages.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`JSON 기본 이미지 ${idx + 1}`}
//                     className="object-cover w-full h-auto"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p>JSON 기본 이미지가 없습니다.</p>
//             )}
//           </div>

//           {/* C. 케이스별 기본 이미지 */}
//           <div>
//             <h3 className="text-lg font-bold">케이스별 기본 이미지</h3>
//             <img
//               src={caseDefaultImage}
//               alt="케이스별 기본 이미지"
//               className="object-cover w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
