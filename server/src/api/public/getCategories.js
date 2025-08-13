import { connection } from "../../db.js";

export async function getPublicCategories(req, res) {
    try {
        const sql = `
            SELECT *, 0 AS moviesCount
            FROM categories
            WHERE status_id = (
                SELECT id FROM general_status WHERE name = "published"
            );`;
        const [categories] = await connection.execute(sql);

        return res.json({
            status: 'success',
            categories,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            categories: [],
        });
    }
}