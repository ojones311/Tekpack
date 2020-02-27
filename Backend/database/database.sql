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



INSERT INTO users
    (name, email, number, password)
VALUES
    ('Owen Jones', 'OJones@project.com', 1234567890, 'pursuit123'),
    ('Jonathan Fagan', 'JFagan@project.com', 9876543210, 'pursuit123'),
    ('Jenesh Napit', 'JNapit@project.com', 2324568769, 'pursuit123'),
    ('Kadijah Wilson', 'KWilson@project.com', 1245987763, 'pursuit123');



INSERT INTO template
    (image, img_name)
VALUES
    ('https://i.pinimg.com/originals/63/c2/ee/63c2ee0ce6a9781832abb6257a5a2f6c.jpg', 'T-shirt'),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg9nIlbLHdo8ncp26K_zGQCrp-BI0OtabxriquAytsY-u_G4Wq', 'hoodie'),
    ('data:image/jpeg;base64,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', 'jeans'),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCPm4SynnGYp_s957p0ZRGjES2y8nGMP5UawpOQJuoSixKd_s5', 'Dress');

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


