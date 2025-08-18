import { connection } from "../../db.js";

export async function getPublicMovies(req, res) {
    try {
        const sql = `
            SELECT movies.*
            FROM movies
            INNER JOIN categories
                ON movies.category_id = categories.id
            WHERE movies.status_id = (
                SELECT id FROM general_status WHERE name = "published"
            ) AND categories.status_id = (
                SELECT id FROM general_status WHERE name = "published"
            );`;
        const [movies] = await connection.execute(sql);

        return res.json({
            status: 'success',
            movies,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            movies: [],
        });
    }
}