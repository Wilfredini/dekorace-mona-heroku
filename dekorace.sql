CREATE TABLE uzivatel{
    id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL,
    passhash VARCHAR NOT NULL
};

INSERT INTO users(username, passhash, email) values($1, $2, $3);