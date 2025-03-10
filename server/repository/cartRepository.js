import { db } from "./db.js";
/**
 * 유저 아이디
 */
export const getId = async ({ id }) => {
  const sql = `
            select * from casetibuy_cart
              where id = ? 
    `;
  const [result] = await db.execute(sql, [id]);

  return result;
};

/**
 * 장바구니 전체 조회
 */
export const getItems = async ({ id }) => {
  const sql = `
            select * from view_cart_list 
            where id = ?
    `;
  const [result] = await db.execute(sql, [id]);

  return result;
};

/**
 * 장바구니 추가
 */
export const addCart = async ({ id, cartList }) => {
  // ✅ cartList가 객체로 중첩되어 있을 경우, 내부 배열을 꺼내기
  // if (!Array.isArray(cartList)) {
  //   cartList = cartList.cartList ?? []; // 내부 cartList가 있다면 사용
  // }

  let result_rows = 0;
  // const userId = id || "test_user"; // 로그인 없이 기본 ID 설정

  console.log("🛒 [addCart] 받은 데이터:", { id, cartList });

  // ✅ cartList가 배열인지 확인
  if (!Array.isArray(cartList)) {
    console.error("❌ [addCart] cartList가 배열이 아닙니다:", cartList);
    return { result_rows: 0, error: "cartList가 올바르지 않습니다." };
  }

  const result = await Promise.all(
    cartList.map(async (item) => {
      const values = [
        item.qty ?? 1,
        id,
        item.pid ?? null,
        item.cname ?? "이름 없음",
        item.color ?? "색상 없음",
        item.caseType ?? "기본 케이스",
        item.price ?? 0,
      ];

      console.log("[addCart] DB 저장 값:", values);

      const sql = `
insert into casetibuy_cart(qty, id, pid, cname, color, caseType, price, cdate)
                        values(?, ?, ?, ?, ?, ?, ?, now());
                `;
      const [result] = await db.execute(sql, values); //Promise형태로 실행
      return result.affectedRows;
    })
  );
  result_rows = result.reduce((acc, cur) => acc + cur, 0);

  console.log(result_rows);

  return { result_rows: result_rows };
};

/**
 * 장바구니 전체 카운트 조회
 */
// view 만들어서 줄임 (오라클은 뷰를 생성하기 위해 권한을 생성해야 한다)
export const getCount = async ({ id }) => {
  const sql = `
        select count(*) as count from casetibuy_cart
            where id= ?
    `;

  const [result] = await db.execute(sql, [id]); // [[{count: 2}] [count필드정보]]
  return result[0];
};

/**
 * 장바구니 상품 수량 업데이트
 */
export const updateQty = async ({ cid, type }) => {
  const str = type === "increase" ? "qty=qty+1" : "qty=qty-1";
  const sql = `
        update casetibuy_cart 
            set ${str}
            where cid = ?
    `;

  const [result] = await db.execute(sql, [cid]);
  return { result_rows: result.affectedRows };
};

/**
 * 장바구니 아이템 삭제
 */
export const deleteItem = async ({ cid }) => {
  const sql = `
        delete from casetibuy_cart where cid = ?
    `;
  const [result] = await db.execute(sql, [cid]);
  return { result_rows: result.affectedRows };
};
