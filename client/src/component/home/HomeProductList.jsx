// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import HomeProduct from "./HomeProduct.jsx";

// export default function HomeProductList() {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/data/slides.json")
//       .then((res) => {
//         setProductList(res.data.featuredCollection);
//       })
//       .catch((error) => console.error("데이터 불러오기 실패:", error));
//   }, []);

//   return (
//     <>
//       <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
//         {productList.map((product, index) => (
//           <HomeProduct
//             key={product.id}
//             {...product}
//             className={
//               index === 0
//                 ? "sm:col-span-1 lg:col-span-2"
//                 : index === 1
//                 ? "sm:col-span-1 lg:col-span-1"
//                 : index === 2
//                 ? "sm:col-span-1 lg:col-span-1"
//                 : index === 3
//                 ? "sm:col-span-1 lg:col-span-2"
//                 : ""
//             }
//           />
//         ))}
//       </div>
//     </>
//   );
// }

/******************************************************************/
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeProduct from "./HomeProduct.jsx";

export default function HomeProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/slides.json")
      .then((res) => {
        setProductList(res.data.featuredCollection || []); // 데이터가 없을 경우 빈 배열로 처리
      })
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, []);

  return (
    <div className="grid w-full grid-cols-1 gap-24 lg:grid-cols-3">
      {productList.map((product, index) => (
        <div
          key={product.pid}
          className={`w-full      
                ${
                  index === 0
                    ? "sm:col-span-1 lg:col-span-2"
                    : index === 1 || index === 2
                    ? "sm:col-span-1 lg:col-span-1"
                    : index === 3
                    ? "sm:col-span-1 lg:col-span-2"
                    : ""
                }`}
        >
          <HomeProduct
            key={product.id || index} // product.id가 없을 경우 index 사용
            {...product}
            pid={product.pid}
          />
        </div>
      ))}
    </div>
  );
}
