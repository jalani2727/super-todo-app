--  File for defining the structure of the tables 
create table todos (
    id serial primary key,
    title varchar(300),
    isDone boolean
);