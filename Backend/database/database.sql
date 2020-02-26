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
    ('Jonathan Fagan', 'JFagan@project.com', 9876543210, 'pursuit123');

INSERT INTO template
    (image, img_name)
VALUES
    ('https://i.pinimg.com/originals/63/c2/ee/63c2ee0ce6a9781832abb6257a5a2f6c.jpg', 'T-shirt'),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBLh2S4BzaeD8ekMQkQ-PGOgeeyvObvrUUx7XtOejo6ZHX2G8r', 'Dress'),
    ('https://www.pngitem.com/pimgs/m/30-303343_images-of-template-sketch-hd-png-download.png', 'jeans');

INSERT INTO projects
    (projects_id, description, date_made, created_by, quantity, color, img_url, template_id, users_id, form_data)
VALUES
    (1, 't-shirt', '2020-02-23', 'peach', 10, 'blue', '' , 1, 1, ''),
    (2, 'jeans', '2020-02-23', 'steve', 5, 'black', 'https://cdn3.vectorstock.com/i/thumb-large/57/12/unisex-outlined-template-jeans-front-back-view-vector-6975712.jpg',3,2, '' );

INSERT INTO comments
    (comment, commentors_email)
VALUES
    ('I would like 1 sample shipped to me in 14 days if possible.', 'OJones@project.com'),
    ('Can a pocket be added to the leg ?','JFagan@project.com' );

INSERT INTO measurement
    (HPS, CF, CB, SS, projects_id)
VALUES
    (10, 5, 5, 2, 1),
    (5, 4, 12, 6, 2);


