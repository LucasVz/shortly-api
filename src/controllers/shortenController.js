import { connection } from '../database.js';

export async function postShorten(req, res) {
    const url = req.body;
    const shortUrl = (Math.round(Date.now() / 100)).toString(8);
    try{
        await connection.query(`
            INSERT INTO
            urls (url,"shortUrl")
            VALUES ($1,$2)
        `,[url,shortUrl]);

        res.send(shortUrl).status(201);

    }catch (erro) {
        console.log(erro)
        res.sendStatus(500)
    }
}