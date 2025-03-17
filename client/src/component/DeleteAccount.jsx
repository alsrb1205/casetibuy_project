import React, { useState } from 'react';

export default function DeleteAccount() {
        const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    
        const handleDeleteClick = () => {
            setShowConfirmDelete(true);
        };
    
        const handleCancelClick = () => {
            setShowConfirmDelete(false);
        };
    
        const handleConfirmDelete = () => {
            alert("계정이 삭제되었습니다.");
            setShowConfirmDelete(false);
        };


    return (
        <div className="p-32 rounded-20 bg-[#eee] mt-60 relative">
                <div className="mb-32 font-bold text-32">
                    계정 삭제
                </div>
                <div className="mb-16">
                    주문 등 정보를 포함한 모든 프로필이 영구적으로 삭제됩니다.
                    계정 삭제 후에는 주문 정보를 복원할 수 없습니다.
                </div>
                <div className="text-center">
                    {/* "내 계정 삭제" 버튼 클릭 시 확인 박스 노출 */}
                    <button
                        onClick={handleDeleteClick}
                        className="p-15 bg-white border-2 text-orange rounded-20 mb-15 w-[300px]"
                    >
                        내 계정 삭제
                    </button>
                </div>

                {/* showConfirmDelete가 true일 때만 확인 박스 렌더링 */}
                {showConfirmDelete && (
                    <>
                        <div
                            className="absolute top-0 left-0 z-40 w-full h-full bg-opacity-30"
                            onClick={handleCancelClick}
                        />
                        {/* 인라인 박스 */}
                        <div
                            className="
                                        absolute 
                                        top-1/2 left-1/2 
                                        transform -translate-x-1/2 -translate-y-1/2
                                        w-[400px] h-[267px] 
                                        bg-white 
                                        rounded-20 p-30 
                                        z-50
                                        text-center
                                        "
                        >
                            <div className="mb-5 font-bold text-21">계정 삭제 확인</div>
                            <div className="mb-20 text-[#666]">
                                주문 등 정보를 포함한 모든 프로필이 영구적으로 삭제됩니다.
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <button
                                    onClick={handleConfirmDelete}
                                    className="p-15 bg-red-500 border-2 text-18 text-white rounded-20 w-[300px]"
                                >
                                    내 계정 삭제
                                </button>
                                <button
                                    onClick={handleCancelClick}
                                    className="p-15 bg-white border-2 text-18 border-[#eee] rounded-20 w-[300px]"
                                >
                                    취소
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
    );
}

