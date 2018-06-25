--  File for defining the structure of the tables 
create table todos (
    id serial primary key, --makes it so that Id's are automatically set 
    title varchar(300),
    isdone boolean
);