# Ursula Vallejo Upggifter / Datalagring

# first check the Databases are running on the program.

SHOW DATABASES;

#In case you have a data base open with that name to delete it and start from zero.
DROP DATABASE uppgift;


# CREATE THE PROJECT:
CREATE DATABASE myBookStore;
USE myBookStore;

# To confirm the data base was created
SHOW DATABASES;

#CREATE THE TABLES:

# create Table No1.
CREATE TABLE authors
(
    id_author      INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_author VARCHAR(100)  NOT NULL
);

# create Table No2.
CREATE TABLE categories
(
    id_category      INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_category VARCHAR(100)
);

# create Table No3.
CREATE TABLE books
(
    id   INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    authorId INT    NOT NULL,
    FOREIGN KEY (authorId ) REFERENCES authors (id_author),
    description VARCHAR(3000),
    year INT   ,
    price_Kr INT    NOT NULL,
    categoryId INT ,
    FOREIGN KEY ( categoryId ) REFERENCES categories (id_category)
);

# To confirm the tables were created
SHOW TABLES;

# To confirm the columns on the table were created
SELECT  * FROM books;
SELECT  * FROM categories;
SELECT  * FROM authors;

# See detailed information of the parameters that were created in each column
DESCRIBE books;
DESCRIBE categories;
DESCRIBE authors;

# ADD INFORMATION TO THE TABLES:

# Add the information in to the tab categories
INSERT INTO categories(name_category)
VALUES ('Arts & Photography'),
       ('Biographies & Memoirs'),
       ('Business & Money'),
       ('Children''s Books'),
       ('Comics & Graphic Novels'),
       ('Computer & Technology'),
       ('Cookbooks, Food & Wine'),
       ('Crafts, Hobbies & Home'),
       ('History'),
       ('Literature & Fiction'),
       ('Mystery, Thriller & Suspense'),
       ('Romance'),
       ('Science & Math'),
       ('Self-Help'),
       ('Travel');

# View the categories were created and the Id that correspond each of them
SELECT  * FROM categories;

# Add the information in to the tab authors
INSERT INTO authors(name_author)
VALUES ('Stephen Hawking'),
       ('Jeffrey Eugenides'),
       ('Maurice Sendak'),
       ('Gabriel Garcia Marquez'),
       ('Isabel Allende'),
       ('Haruki Murakami'),
       ('Phil Sanders'),
       ('J.K. Rowling'),
       ('Dr.Seuss');

# View the authors were created and the Id
SELECT  * FROM authors;

# Add the information in to the tab books
INSERT INTO books(title, authorid, description, year, price_kr, categoryid)
VALUES ('A Brief History of Time',1,
        'A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?',
        1998,80, 13),
       ('Middlesex',2,
        'Middlesex is the winner of the 2003 Pulitzer Prize for Fiction. A dazzling triumph from the bestselling author of The Virgin Suicides--the astonishing tale of a gene that passes down through three generations of a Greek-American family and flowers in the body of a teenage girl.',
        2002,120, 10),
       ('Where the Wild Things Are',3,
        'This iconic story has inspired a movie, an opera, and the imagination of generations. When Max dresses in his wolf suit and causes havoc in the house, his mother sends him to bed. From there, Max sets sail to an island inhabited by the Wild Things, who name him king and share a wild rumpus with him. But then from far away across the world, Max smells good things to eat...',
        1963,143, 4),
       ('One Hundred Years of Solitude',4,
        'One of the most influential literary works of our time, One Hundred Years of Solitude remains a dazzling and original achievement by the masterful Gabriel Garcia Marquez, winner of the Nobel Prize in Literature.',
        1967,250, 10),
        ('Love in the Time of Cholera',4,
        'In their youth, Florentino Ariza and Fermina Daza fall passionately in love. When Fermina eventually chooses to marry a wealthy, well-born doctor, Florentino is devastated, but he is a romantic. As he rises in his business career he whiles away the years in 622 affairs--yet he reserves his heart for Fermina. Her husband dies at last, and Florentino purposefully attends the funeral. Fifty years, nine months, and four days after he first declared his love for Fermina, he will do so again.',
        1985,159, 12),
        ('The House of the Spirits: A Novel',5,
        'One of the most important novels of the twentieth century, The House of the Spirits is an enthralling epic that spans decades and lives, weaving the personal and the political into a universal story of love, magic, and fate.',
        1982,269, 2),
        ('The Soul of a Woman: A Novel',5,
        'As a young woman coming of age in the late 1960s, she rode the second wave of feminism. Among a tribe of like-minded female journalists, Allende for the first time felt comfortable in her own skin, as they wrote “with a knife between our teeth” about women’s issues. She has seen what the movement has accomplished in the course of her lifetime. And over the course of three passionate marriages, she has learned how to grow as a woman while having a partner, when to step away, and the rewards of embracing one’s sexuality.',
        2020,197, 2),
        ('Kafka on the Shore',6,
        'Here we meet a teenage boy, Kafka Tamura, who is on the run, and Nakata, an aging simpleton who is drawn to Kafka for reasons that he cannot fathom. As their paths converge, acclaimed author Haruki Murakami enfolds readers in a world where cats talk, fish fall from the sky, and spirits slip out of their bodies to make love or commit murder, in what is a truly remarkable journey.',
        2002,106, 10),
       ('Dr. Seuss''s Beginner Book Collection',9,
        'Originally created by Dr. Seuss himself, Beginner Books are fun, funny, and easy to read. These unjacketed hardcover early readers encourage children to read all on their own, using simple words and illustrations.',
        2009,290, 4),
       ('Prints and Their Makers',7,
        'Prints and Their Makers takes you behind the scenes to witness the creative process at the world''s top printmaking workshops. Master printer Phil Sanders offers an in-depth look at this versatile medium and places contemporary prints and practices in the context of traditions and techniques developed over more than a thousand years.',
        2002,500, 1),
       ('Harry Potter and the Sorcerer''s Stone',8,
        'Harry Potter series is both universally adored and critically acclaimed. Now, experience the magic as you’ve never heard it before. The inimitable Jim Dale brings to life an entire cast of characters - from the pinched, nasal whine of Petunia Dursley to the shrill huff of the Sorting Hat to the earnest, wondrous voice of the boy wizard himself.',
        1997,130, 10);

# View the books were created and all the content
SELECT  * FROM books;

#SQL QUESTIONS :

# 1.Books together with category:

# All book information and the category is related with them (shows the two complete tables columns)
SELECT * FROM books
INNER JOIN categories on books.categoryId = categories.id_category;

# Do the same function as the one above but the information is organized and do not visualized the FK for category
SELECT books.id,books.authorId,books.title,books.description,books.year,books.price_Kr, categories.name_category
FROM books
INNER JOIN categories on books.categoryId = categories.id_category;


# 2.Books together with category and author:

# Shows all the content created on the tables. Book information and his related category and author
SELECT * FROM  books, authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category;

# Do the same function as the one above but the information is organized and do not visualized the FK for author and category
SELECT books.id,authors.name_author,books.title,books.description,books.year,books.price_Kr, categories.name_category
FROM books,authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category;

# 3.Books for a certain category:

# Using Join to filter only viewing the title of the book and the category
SELECT books.title, categories.name_category
FROM books
lEFT JOIN categories on books.categoryId = categories.id_category
WHERE id_category = 10;

# All book information,author,related with id_category (Literature & Fiction)
SELECT * FROM  books, authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category AND
      id_category = 10;

# Do the same function as the one above but the information is organized and do not visualized the FK for author and category
SELECT books.id,authors.name_author,books.title,books.description,books.year,books.price_Kr, categories.name_category
FROM  books, authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category AND
      id_category = 10;

# Only view few information, Book title and author; using the relation with name_category instead of id (Literature & Fiction)
SELECT * FROM books;
SELECT title,name_author,name_category from books,authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category AND
      name_category = 'Literature & Fiction';

# Only view few information,Book title and author; related with id_category instead of name_category(Literature & Fiction)
SELECT * FROM books;
SELECT title,name_author,name_category from books,authors, categories
WHERE
      books.authorId = authors.id_author AND
      books.categoryId = categories.id_category AND
      id_category = 10;


# 4.All categories (even those that have no connection to any book) together with the books that have a connection to category:

# All the columns created in categories with all book columns
SELECT * FROM categories
LEFT JOIN books on books.categoryId = categories.id_category;

# Do the same function as the one above but the information is organized and do not visualized the FK for author and category
SELECT categories.name_category,books.title,books.id,books.authorId,books.description,books.year,books.price_Kr
FROM categories
LEFT JOIN books on books.categoryId = categories.id_category;

# Only view few information,All categories with the book title
SELECT categories.name_category, books.title
FROM categories
LEFT JOIN books  on books.categoryId = categories.id_category;

# 5.All books (even those that have no connection to any category) together with the categories that have a connection to a book:

# All tab columns that exist on the books tab with all columns in categories. Using LEFT JOIN.
SELECT * FROM books
LEFT JOIN categories on books.categoryId = categories.id_category;

# Same result as above but  Using RIGHT JOIN.
SELECT * FROM categories
RIGHT JOIN books on books.categoryId = categories.id_category;

# Do the same function as the one above USING LEFT JOIN but the information is organized and do not visualized the FK for author and category
SELECT books.id,books.title,categories.name_category,books.authorId,books.description,books.year,books.price_Kr
FROM books
LEFT JOIN categories on books.categoryId = categories.id_category;

#Only view few information, All categories with the book title
SELECT books.title,categories.name_category
FROM books
LEFT JOIN categories  on books.categoryId = categories.id_category;

# To see if actually work to print information of a book that has no category will  insert one new book without Category:
INSERT INTO authors(name_author)
VALUES ('Stephen King');


# Add a book without a category
INSERT INTO books(title, authorid, description, year, price_kr)
VALUES ('The Outsider',10,
        'An eleven-year-old boy’s violated corpse is discovered in a town park. Eyewitnesses and fingerprints point unmistakably to one of Flint City’s most popular citizens—Terry Maitland, Little League coach, English teacher, husband, and father of two girls. Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest.',
        2018,160);

# Repeat SQL questions ( same as the one above) to check if lists shows a books without a category.
SELECT books.title,categories.name_category
FROM books
LEFT JOIN categories  on books.categoryId = categories.id_category;

# Update content. As has information the category missing on the last book i added will update the information to that one.

# First check the book id to be able to update the information
SELECT * from books;

# Check the category id to be able to update the information
SELECT * from categories;

# the id of the book want to update is 12 and id category = 11
START TRANSACTION ;
UPDATE books SET categoryId= 11 where id=12;

# Check if update was implemented
SELECT * from books;

# change order to view the elements Descending and ascending ( extra)
SELECT * from books ORDER BY title ASC;
SELECT * from books ORDER BY id DESC ;

# 6.Delete any row in the book table / Delete any row in category:

# Delete any row in the book table with id
SELECT * from books;

START TRANSACTION ;
DELETE FROM books Where id=10;
SELECT * from books;
ROLLBACK;
SELECT * from books;

# Delete any row in category using the name instead of the ID:

SELECT * from categories;

START TRANSACTION ;
DELETE FROM categories Where  name_category='History';
SELECT * from categories;
ROLLBACK;
SELECT * from categories;

# Have a lovely day! : )

# To delete my database ( has add it as a comment on case you run all at the same time do not have a problem)
# DROP DATABASE myBookStore;