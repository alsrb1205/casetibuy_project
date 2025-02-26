import { db } from "./db.js";

/**
 * 상품 등록
 */

export const registerProduct = async (formData) => {
    const sql = `
        insert into casetibuy_product(pname, price, upload_file, source_file, pdate)
            values(?,?,?,?,now())
    `;
    const values = [
        formData.productname,
        formData.price || 0,
        formData.uploadFile || null,
        formData.sourceFile || null
    ];
    const [result] = await db.execute(sql, values);
    return { "result_rows": result.affectedRows };
}