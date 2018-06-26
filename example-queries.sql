-- Add a new set of items to your table
insert into todos
(title, isdone)
values 
('Re-evaluate love life', false);



-- All retrieval


-- Get all todos 
select * from todos

-- Get one todo by id
select * from todos
where id = 2; --id number can vary depending on the id of the item

-- Get all uncompleted todos
select * from todos
where isDone = false;

-- Get all completed todos
select * from todos
where isDone = false;

-- Search by title, should have zero results 
select * from todos
where title ilike '%zzzzzz%';

--Search by title should have three results 
select * from todos
where title ilike '%your%';

-- Change the title of a todo
update todos
set title = "delete your history"
where id = 1;

-- Delete some shit 
delete from todos
where isDone = true
-- To see what you have left after deleting  
select * from todos

