CREATE DATABASE schooldatabase

/* User's table */

/* Role = (student, teacher, admin)*/

CREATE TABLE user (

    id int(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name varchar(50),
    last_name varchar(50),
    dni varchar(50),
    dir varchar(100),
    birthdate varchar(20),
    email varchar(200),
    user_name varchar(200),
    pass varchar(50),
    role varchar(20)
)


INSERT INTO user (first_name, last_name, dni, dir, birthdate, email, user_name, pass, role) VALUES
('Javier', 'Carrillo', '93798954', 'Villegas 745', '21/12/1993', 'javiercarrillo526@hotmail.com', 'Admin', 'Katrina5', 'ADMIN')
('Carolina', 'Eldahuk', '37763808', 'Villegas 745', '08/11/1993', 'caro@hotmail.com', 'Teacher1', 'Titan5', 'TEACHER')
('Damian', 'Salgado', '36763808', 'Añelo 2025', '05/01/1994', 'damian@gmail.com','Teacher2', 'Dragones10', 'TEACHER')
('Robert', 'Carrillo', '93798955', 'Ipanema 32', '02/01/1989', 'titin526@hotmail.com', 'Student', 'Fiat128', 'STUDENT')


CREATE TABLE career (

    id int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    career_name varchar(200),
    description varchar(500),
    duration(200)
)

INSERT INTO career (career_name, description, duration) VALUES 
('Software Developer', '3 years', 'Full Stack Software Developer')


CREATE TABLE subject (

    id int (10) PRIMARY KEY NOT NULL,
    subject_name varchar(200),
    professor_id int(10),
    actual_year varchar(50),
    number_of_classes int(50),
    career_id int (10),
    FOREIGN KEY (career_id) REFERENCES career(id),
    FOREIGN KEY (professor_id) REFERENCES user(id)
)

INSERT INTO subject( subject_name, professor_id, actual_year, number_of_classes, career_id) VALUES 
('Programacion', 1, '2023', 25, 1)
('Ingles', 2, '2023', 10, 1)
('Gestion', 1, '2023', 20, 1)