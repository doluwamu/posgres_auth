CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(1500) NOT NULL,
    UNIQUE(email)
);

insert into users (name, email, password) values ('dee', 'dee@gmail.com', 'dee1');
insert into users (name, email, password) values ('mee', 'mee@gmail.com', 'mee1')