import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function postAdminMovies(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'url',
        duration: 'numberInteger',
        category: 'numberInteger',
        status: 'nonEmptyString',
        rating: 'numberFloat',
    }, {
        img: 'nonEmptyString',
        description: 'nonEmptyString',
        releaseDate: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { title, url, status, duration, rating } = req.body;
    let { category, description, releaseDate, img } = req.body;

    if (category === 0) {
        category = null;
    }
    if (!description) {
        description = '';
    }
    if (!releaseDate) {
        releaseDate = null;
    }
    if (!rating) {
        rating = 0;
    }
    if (!img) {
        img = '';
    }

    const imgPath = img.split('/').at(-1);

    try {
        const sql = `SELECT * FROM movies WHERE url_slug = ?;`;
        const [response] = await connection.execute(sql, [url]);

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokia filmo nuoroda jau uzimta',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    try {
        const sql = `
            INSERT INTO movies
                (img, title, url_slug, category_id, status_id, description, release_date, duration_in_minutes, rating)
            VALUES (?, ?, ?, ?,
                (SELECT id FROM general_status WHERE name = ?),
                ?, ?, ?, ?);`;
        const [response] = await connection.execute(sql,
            [imgPath, title, url, category, status, description, releaseDate, duration, rating]
        );

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurtas filmas',
    });
}