import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import ImageUpload from './ImageUpload';

export default function NewProduct() {

    const productNameRef = useRef(null);
    const [fname, setFname] = useState({});
    const [preview, setPreview] = useState('');
    let [formData, setFormData] = useState({
        productname: "",
        isNew: false,
        isHot: false,
        isRec: false
    });
    const [previewList, setPreviewList] = useState([]);
    const navigate = useNavigate();

    const getFileName = (filenames) => {
        setFname(filenames);
        setPreviewList(filenames.uploadFileName);
    }

    // 폼 입력시 값을 formData로 추가하는 이벤트 처리
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };



    // 등록 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        if (productNameRef.current.value === '') {
            alert('상품명을 입력해주세요');
            productNameRef.current.focus();
            return false;
        } else {
            // 서버연동
            formData = {
                ...formData, "uploadFile": fname.uploadFileName,
                "sourceFile": fname.sourceFileName
            };

            axios.post('http://localhost:9000/product/new', formData)
                .then(res => {
                    if (res.data.result_rows === 1) {
                        alert("상품이 등록되었습니다.");
                        // navigate('/all')
                    } else {
                        alert("상품 등록 실패");
                    }
                }
                )
                .catch(err => {
                    alert("상품 등록 실패");
                    console.log(err)
                }
                )
        }
    }

    return (
        <div>
            <h1>상품등록</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text"
                            name='productname'
                            ref={productNameRef}
                            onChange={handleChange}
                            value={formData.productname}
                        />
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="isNew"
                                checked={formData.isNew}
                                onChange={handleChange}
                            />
                            isNew
                        </label>                        <label>
                            <input
                                type="checkbox"
                                name="isHot"
                                checked={formData.isHot}
                                onChange={handleChange}
                            />
                            isHot
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="isRec"
                                checked={formData.isRec}
                                onChange={handleChange}
                            />
                            isRec
                        </label>
                    </li>
                    <li>
                        <label>파일 업로드(multiple)</label>
                        <ImageUpload getFileName={getFileName} />
                        {/* 다중파일 preview */}
                        {
                            previewList && previewList.map((preview) =>
                                <img src={`http://localhost:9000/${preview}`}
                                    alt="preview image"
                                    style={{ width: '100px', height: '100px', margin: '5px' }} />
                            )
                        }
                    </li>
                    <li>
                        <input type="hidden" name="upload" value={fname.uploadFileName} />
                        <input type="hidden" name="source" value={fname.sourceFileName} />
                    </li>
                    <li>
                        <button type="submit">등록</button>
                        <button type="reset">취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

