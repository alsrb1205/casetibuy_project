import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";


export default function Title() {

    const [productTitle, setProductTitle] = useState([]);
    const [selected, setSelected] = useState("all");

    useEffect(() => {
        axios.get("/data/categories.json") 
          .then(res => setProductTitle(res.data))
          .catch(error => console.error("Error fetching categories:", error));
      }, []);
    
      const handleCategoryClick = (categoryId) => {
        setSelected(categoryId);
        setProductTitle(categoryId === "아이폰" ? "아이폰" : categoryId);
      };



    return (
        <>
            <div className=''>
                <div className=''>
                    <nav>
                        <ul className='flex p-10 space-x-4 mx-7 gap-15'>

                            <li>
                                <Link to='/allproduct'>
                                    <span className='text-[#000] cursor-pointer hover:text-[gray] text-[12px] md:text-[16px]'>전 상품</span></Link>
                            </li>
                            
                            <li>
                                <Link to='/model'><span className='text-[#000] cursor-pointer hover:text-[gray] text-[12px] md:text-[16px]'>기종</span></Link>
                            </li>
                            
                            <li>
                                <Link to='/modelall'><span className='text-[#000] cursor-pointer hover:text-[gray] text-[12px] md:text-[16px]'>모든 상품</span></Link>
                            </li>
                            
                            <li>
                                <Link to='/iphoneall'><span className='text-[#000] cursor-pointer hover:text-[gray] text-[12px] md:text-[16px]'>아이폰</span></Link>
                            </li>    

                            <li>
                                <div className="flex gap-2 mb-4">
                                    {/* {productTitle.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => handleCategoryClick(category.id)}
                                            className={`p-2 border ${selected === category.id ? "bg-gray-300" : ""}`}
                                            >
                                            {category.name}
                                        </button>
                                    ))} */}
                                </div>

                            </li>                       
                        </ul>
                    </nav>
                </div>         
            </div>
        </>
    );
}
