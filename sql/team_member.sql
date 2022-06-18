CREATE TABLE member (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    UNIQUE(position)
);

insert into member (name, position) values ('Julis Croker', 'CEO');
insert into member (name, position) values ('Caterine John', 'Head coach');