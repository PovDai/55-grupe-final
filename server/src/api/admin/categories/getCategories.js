import { connection } from "../../../db.js";

export async function getAdminCategories(req, res) {
    try {
        const sql = `
            SELECT categories.*,
            (
                SELECT COUNT(*)
                FROM movies
                WHERE category_id = categories.id
            ) AS moviesCount,
            general_status.name AS status_name
            FROM categories
            INNER JOIN general_status
                ON categories.status_id = general_status.id;`;
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