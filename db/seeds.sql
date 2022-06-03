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
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 4, 1),
  ('Peter', 'Greenaway', 8, 13),
  ('Derek', 'Jarman', 5, 1),
  ('Paolo', 'Pasolini', 4, 1),
  ('Heathcote', 'Williams', 8, 13),
  ('Sandy', 'Powell', 5, 4),
  ('Emil', 'Zola', 6, 3),
  ('Sissy', 'Coalpits', 9, 2),
  ('Antoinette', 'Capet', 9, 13),
  ('Samuel', 'Delany', 12, 16),
  ('Tony', 'Duvert', 10, 3),
  ('Dennis', 'Cooper', 18, null),
  ('Monica', 'Bellucci', 13, null),
  ('Samuel', 'Johnson', 16, 22),
  ('John', 'Dryden', 14, 22),
  ('Alexander', 'Pope', 9, 13),
  ('Lionel', 'Johnson', 12, 6);