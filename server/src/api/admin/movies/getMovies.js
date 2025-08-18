import { connection } from "../../../db.js";

export async function getAdminMovies(req, res) {
    try {
        const sql = `
            SELECT movies.*, general_status.name AS status_name
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id;`;
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