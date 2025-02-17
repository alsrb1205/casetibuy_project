import React from 'react';
import '../../style/bar.css';

export default function Bars() {
    return (
        <div className='bars relative grid grid-cols-2 auto-rows-[fit-content(100%)]'>
            <div>
                <div className='bartext'>
                    <span>보호 성능: 강력한</span>
                </div>
                <div className='bar'>

                </div>
            </div>
            <div>
                <div className='bartext'>
                    <span>무게: 가벼움</span>
                </div>
                <div className='bar'>

                </div>
            </div>
        </div>);
}

