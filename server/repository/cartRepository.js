import { db } from "./db.js";

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
  let result_rows = 0;
  const userId = id || "test_user"; // 로그인 없이 기본 ID 설정

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
insert into casetibuy_cart(qty, id, pid, cname, color, case_type, price, cdate)
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
