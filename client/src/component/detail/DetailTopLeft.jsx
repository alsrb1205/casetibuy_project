import React, { useContext, useEffect, useState } from 'react';
import { DetailContext } from '../../context/DetailContext';
import axios from 'axios';
import { useDetail } from '../../hooks/useDetail';

export default function DetailTopLeft() {
    const { activeCase, productList } = useContext(DetailContext);
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

console.log(activeCase.value);





    return (
        <div className="relative flex-1">

            {productList.map(product => {
          // 상품의 upload_file 배열을 복사
          let files = product.upload_file ? [...product.upload_file] : [];
  
          // 1) 필터링: bounce 케이스만
          files = files.filter(f => {
            const { caseType } = parseCaseAndColor(f);
            return caseType === activeCase.value;
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
                        src="/images/3.png"
                        alt=""
                        className="object-cover w-[98%] h-auto"
                    />
                </div>
                <div className="grid grid-cols-2 gap-17">
                    <img
                        src="/images/4.jpg"
                        alt=""
                        className="object-cover w-full h-auto"
                    />
                   <img
                    src={handleImage()}
                    alt=""
                    className="object-cover w-full h-auto"
                    />

                </div>
            </div>
        </div>

    );
}

