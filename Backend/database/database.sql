DROP DATABASE IF EXISTS tekpack;

CREATE DATABASE tekpack;

\c tekpack


CREATE TABLE users
(
    users_id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR UNIQUE,
    number VARCHAR,
    password VARCHAR
);

CREATE TABLE template
(
    template_id SERIAL PRIMARY KEY,
    image VARCHAR,
    img_name VARCHAR,
    users_id INT REFERENCES users(users_id)
);


CREATE TABLE projects
(
    projects_id SERIAL PRIMARY KEY,
    description VARCHAR,
    date_made DATE,
    created_by VARCHAR,
    quantity INT,
    color VARCHAR,
    img_url VARCHAR,
    template_id INT REFERENCES template(template_id),
    users_id INT REFERENCES users(users_id),
    form_data VARCHAR
);

CREATE TABLE comments
(
    comment_id SERIAL PRIMARY KEY,
    comment VARCHAR,
    commentors_email VARCHAR REFERENCES users(email),
    projects_id INT REFERENCES projects(projects_id)
);



CREATE TABLE measurement
(
    measurement_id SERIAL PRIMARY KEY,
    -- verison INT,
    HPS VARCHAR,
    CF VARCHAR,
    CB VARCHAR,
    SS VARCHAR,
    -- body_length INT,
    -- across_chest INT,
    -- waist INT,
    -- hip INT,
    -- garment_base_width INT,
    -- sleeve_length INT,
    -- bicep INT,
    -- armhole_curved INT,
    -- shoulder_drop INT,
    -- neck_opening INT,
    -- upper_waist INT,
    -- lower_hip INT,
    -- thigh INT,
    -- knee_opening INT,
    -- leg_opening INT,
    -- front_rise INT,
    -- back_rise INT,
    -- inseamn INT,
    projects_id INT REFERENCES projects(projects_id)
);

CREATE TABLE defaultTemplates (
deftemplate_id SERIAL PRIMARY KEY, 
img_name VARCHAR,
 image VARCHAR
);

INSERT INTO users
    (name, email, number, password)
VALUES
    ('Owen Jones', 'OJones@project.com', 1234567890, 'pursuit123'),
    ('Jonathan Fagan', 'JFagan@project.com', 9876543210, 'pursuit123'),
    ('Jenesh Napit', 'JNapit@project.com', 2324568769, 'pursuit123'),
    ('Kadijah Wilson', 'KWilson@project.com', 1245987763, 'pursuit123');



INSERT INTO template
    (image, img_name, users_id)
VALUES
    ('https://i.pinimg.com/originals/63/c2/ee/63c2ee0ce6a9781832abb6257a5a2f6c.jpg', 'T-shirt', 1),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg9nIlbLHdo8ncp26K_zGQCrp-BI0OtabxriquAytsY-u_G4Wq', 'hoodie', 3),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQmNVYh8cirBNxSHCS99seydVuhfc0WPZRKAJHqBN__GyXNatK', 'jeans', 1),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCPm4SynnGYp_s957p0ZRGjES2y8nGMP5UawpOQJuoSixKd_s5', 'Dress', 2);

INSERT INTO projects
    ( description, date_made, created_by, quantity, color, img_url, template_id, users_id, form_data)
VALUES
    ('t-shirt', '2020-02-23', 'peach', 10, 'blue', '' , 1, 1, ''),
    ('jeans', '2020-02-23', 'steve', 5, 'black', 'https://cdn3.vectorstock.com/i/thumb-large/57/12/unisex-outlined-template-jeans-front-back-view-vector-6975712.jpg',NULL,2, '' ),
    ( 'socks', '2020-02-25', 'frank', 80, 'yellow', '', NULL , 4 ,''),
    ('t-shirt', '2020-02-02', 'rose', 5, 'white with blue stripes', '', NULL, 4, ''),
    ('hoodie', '2020-02-23', 'rose', 10, 'purple', '', NULL, 3,'');

INSERT INTO comments
    (comment, commentors_email)
VALUES
    ('I would like 1 sample shipped to me in 14 days if possible.', 'OJones@project.com'),
    ('Can a pocket be added to the leg ?','JFagan@project.com' ),
    ('I Changed the measurements around be see update','KWilson@project.com' ),
    ('is the image clear enough?','JFagan@project.com' ),
    ('The sample looked perfect. I will be updating my quantity.','JNapit@project.com' );

INSERT INTO measurement
    (HPS, CF, CB, SS, projects_id)
VALUES
    (10, 5, 5, 2, 1),
    (5, 4, 12, 6, 2),
    (5, 16, 18, 0, 3),
    (5, 9, 10, 3, 4),
    (10, 3, 5, 14, 5);

INSERT INTO defaultTemplates (deftemplate_id, img_name, image)
VALUES
(1,  'T-shirt',  'https://pluspng.com/img-png/tshirt-png-outline-blank-t-shirt-outline-1663530-1421.jpg'),
(2, 'Hoodie',  'https://i.ya-webdesign.com/images/hoodie-template-png-13.png' ),
(3,'Jeans', 'https://i.pinimg.com/originals/7e/e7/81/7ee78144307504c7de8c4b50255a0ca8.png'),
(4, 'Socks',  'https://media.istockphoto.com/vectors/sock-template-vector-id512011001?k=6&m=512011001&s=612x612&w=0&h=tNkOx3mG7dRj5X1rKB46mYu77ehGHtH0rsNA1GieDmk=');

