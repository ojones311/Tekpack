DROP DATABASE IF EXISTS tekpack;

CREATE DATABASE tekpack;

\c tekpack

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE,
    email VARCHAR,
    number INT(10),
    password VARCHAR,
);

CREATE TABLE template(
    template_id SERIAL PRIMARY KEY,
    image VARCHAR,
    users_id INT REFERENCES users(id)
);

CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    description VARCHAR,
    date_made DATE,
    created_by VARCHAR,
    color VARCHAR,
    image_url VARCHAR,
    template_id INT REFERENCES template(id),
    users_id INT REFERENCES users(id)
);

CREATE TABLE measurement(
measurement_id SERIAL PRIMARY KEY,
HPS INT,
CF INT,
CB INT,
SS INT,
body_length INT,
across_chest INT,
waist INT,
hip INT,
garment_base_width INT,
sleeve_length INT,
bicep INT,
armhole_curved INT,
shoulder_drop INT,
neck_opening INT,
upper_waist INT,
lower_hip INT,
thigh INT,
knee_opening INT,
leg_opening INT,
front_rise INT,
back_rise INT,
inseamn INT,
product_id INT REFERENCES product(product_id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment VARCHAR,
    commentors_name VARCHAR REFERENCES users (name)
);