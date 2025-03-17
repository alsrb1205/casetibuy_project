import React from 'react';
import EditAccount from '../component/EditAccount.jsx';
import ContactEdit from '../component/ContactEdit.jsx';
import DeleteAccount from '../component/DeleteAccount.jsx';

export default function Settings() {

    return (
        <>
            <div className="font-bold text-32 mb-30">계정 정보 수정하기</div>
            <form className="w-full mx-auto bg-white">
                {/* 계정 정보 수정 영역 */}
                <EditAccount />
                {/* 연락처 수정 영역 */}
                <ContactEdit />
                <div className="text-center">
                    <button className="p-15 bg-black border-2 text-18 text-white rounded-20 w-[300px]">
                        설정 업데이트
                    </button>
                </div>
            </form>
            {/* 계정 삭제 영역 */}
            <DeleteAccount />
        </>
    );
}
