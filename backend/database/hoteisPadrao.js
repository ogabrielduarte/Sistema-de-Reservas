import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./gohotel_db.db');

function hoteisPadrao() {
    try {
        db.serialize(() => {
            db.run(`
                INSERT INTO hoteis (cnpj, fantasia, localizacao, qtd_quartos)
                VALUES (12345678901234, 'Pousada Pratagy', 'Maceió, Brasil', 20);
            `)
            
            db.run(`
                INSERT INTO hoteis (cnpj, fantasia, localizacao, qtd_quartos)
                VALUES (02468024680246, 'The Great Hotel', 'Budapest, Hungria', 100);
            `)
            
            db.run(`
                INSERT INTO hoteis (cnpj, fantasia, localizacao, qtd_quartos)
                VALUES (13579135791357, 'Eorl House', 'Rohan, Middle-earth', 20);
            `)
            
            db.run(`
                INSERT INTO hoteis (cnpj, fantasia, localizacao, qtd_quartos)
                VALUES (42424242424242, 'Hotel Prefect', 'England, United Kingdom', 42);
            `)
            
            db.run(`
                INSERT INTO hoteis (cnpj, fantasia, localizacao, qtd_quartos)
                VALUES (25713793791713, 'Copacabana Palace', 'Rio de Janeiro, Brasil', 200);
            `)
        })
    } catch (e) {
        console.error(e.message);
    }
}

hoteisPadrao();