import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function deleteMovies(req, res) {
    const [err, msg] = IsValid.fields(req.params, {
        url: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { url } = req.params;

    try {
        const sql = `DELETE FROM movies WHERE url_slug = ?;`;
        const [response] = await connection.execute(sql, [url]);
        /*Užklausos vykdymas:

const [response] = await connection.execute(sql, [url]);

Čia vykdoma pačia SQL užklausa:

connection.execute() - metodas, kuris vykdo SQL užklausą per duomenų bazės ryšį

[url] - masyvas su parametrais, kurie pakeis klaustukus SQL užklausoje (šiuo atveju pirmas klaustukas bus pakeistas url kintamojo reikšme)

await - laukiama, kol užklausa bus įvykdyta (nes tai asinchroninė operacija)

Rezultatas išskaidomas į [response] - tai reiškia, kad mus domina pirmasis grąžinto masyvo elementas (dažniausiai tai yra operacijos rezultatas)

Kam ši eilutė skirta?
Ši kodo dalis skirtas ištrinti filmo įrašą iš duomenų bazės pagal jo URL slug'ą (unikalų identifikatorių, kuris dažnai naudojamas nuorodose).

Pavyzdžiui, jei url kintamojo reikšmė būtų "geriausias-filmas-2023", ši užklausa ištrintų filmą, kurio "url_slug" stulpelio reikšmė yra "geriausias-filmas-2023".*/

        if (response.affectedRows === 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Toks filmas neegzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(200).json({
        status: 'success',
        msg: 'Filmas istrintas sekmingai',
    });
}