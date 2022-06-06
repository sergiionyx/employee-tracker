INSERT INTO departments (name)
VALUES
("Admin department"),
("Accounts and Finance"),
("HR"),
("Sales and marketing"),
("Research and development"),
("IT services");

INSERT INTO roles (title, salary, department_id)
VALUES
("CEO", 300000, 1),
("Product Manager", 200000, 1),
("VP of Marketing", 180000, 2),
("VP of Engineering", 1730000, 4),
("Chief Architect", 150000, 4),
("Engineering Project Manager", 175000, 2),
("Technical Lead", 190000, 5),
("Principal Software Engineer", 160000, 5),
("Senior Software Engineer", 150000, 1),
("Software Engineer", 90000, 2),
("Junior Software Developer", 85000, 3),
("Intern Software Developer", 62000, 3),
("Quality Technician", 70000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Sara", "Havel", 1, 1),
("Quan", "Anderson", 2, 1),
("Jonas", "Avram", 3, 1),
("Rupa", "Domitia", 4, 1),
("Axel", "Russel", 5, 4),
("Indie", "Kubra", 5, 4),
("Brody", "Sue", 6, 3),
("Ru", "Sybil", 6, 3),
("Meriadoc", "Brandybuck", 6, 3),
("Janey", "Sa'adah", 7, 1),
("Kimberlyn", "Scarlett", 8, 7),
("Rick", "Andrea", 9, 2),
("Jaslene", "Shayne", 9, 2),
("Raynard", "Kingston", 9, 2),
("Eugenia", "Kameron", 10, 3),
("Ryder", "Imram", 10, 3),
("Olly", "Dren", 11, 2),
("Delora", "Merrion", 12, 2),
("Sa'di", "Gillian", 13, 2);
