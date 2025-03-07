import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressModal = ({ isOpen, onClose, onAddressSelected }) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        onAddressSelected({
            address: fullAddress,
            zipcode: data.zonecode,
        });
        onClose();
    };

    const postCodeStyle = {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    };


    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50" onClick={onClose}> {/* 모달 배경 클릭 시 닫기 이벤트 */}
            <div className="overflow-hidden bg-white rounded-md" onClick={(e) => e.stopPropagation()}> {/* 모달 내용 영역, 클릭 이벤트 stopPropagation 추가 */}
                <div className="p-4"> {/* padding 추가 */}
                    <h2 className="mb-2 text-lg font-bold">우편번호 검색</h2> {/* 제목 margin 조정 */}
                    <p className="mb-3 text-sm text-gray-700"> {/* 설명 문구 margin, 폰트 크기 조정 */}
                        예) 판교역로 235, 분당 주공, 삼평동 681
                    </p>
                    <div className="w-full h-[400px]"> {/* DaumPostcode height 조정 */}
                        <DaumPostcode
                            onComplete={handleComplete}
                            style={postCodeStyle}
                            height={400} // height 값 postCodeStyle 과 통일
                            className="postcode-modal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;