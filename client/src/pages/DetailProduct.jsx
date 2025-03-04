import React, { useContext, useEffect } from 'react';
import DetailTopLeft from '../component/detail/DetailTopLeft';
import DetailTopRight from '../component/detail/DetailTopRight';
import ProductFeatures from '../component/detail/ProductFeature';
import ProductInfo from '../component/detail/ProductInfo';
import axios from 'axios';
import { DetailContext } from '../context/DetailContext';
import { useParams } from 'react-router-dom';

export default function DetailProduct() {
  const { pid } = useParams();
  const { detail, setDetail } = useContext(DetailContext);

  useEffect(() => {
    axios.post('http://localhost:9000/product/detail', { "pid": pid })
      .then(res => setDetail(res.data))
      .catch(err => console.log(err));
  }, [])



  return (
    <div className='flex flex-col items-center'>
      <div className="detailpage max-w-[1382px] m-32 bg-detailbg">
        <div className="flex gap-32">
          {/* 왼쪽 콘텐츠 */}
          <DetailTopLeft detail={detail}/>
          {/* 오른쪽 콘텐츠 (sticky) */}
          <DetailTopRight detail={detail}/>
        </div>
      </div>
      <ProductFeatures/>
      <ProductInfo/>
    </div>
  );
}
