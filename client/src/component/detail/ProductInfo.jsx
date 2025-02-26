import React, { useContext } from 'react';
import { DetailContext } from '../../context/DetailContext';

export default function ProductInfo() {
        const { activeCase, casesData } = useContext(DetailContext);
        const caseFeature = casesData[activeCase] || {}; // 선택된 케이스 데이터
        const infoList = caseFeature.info

    return (
        <div>
            {/* 바운스케이스 */}
            {
                activeCase==="bounce" ?
                
                    
                        <div>
                            <img src={infoList[0].image} alt="" />
                            
                        </div>
                    
                 : "" 
            }
        </div>
                
    );
}

