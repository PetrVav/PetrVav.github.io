BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "classmates" (
	"studid"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT,
	"age"	TEXT,
	"addres"	TEXT,
	PRIMARY KEY("studid" AUTOINCREMENT)
);
INSERT INTO "classmates" ("studid","name","age","addres") 
VALUES 
 (1,'Иван','34','Санкт-Петербург, Ленина 1'),
 (2,'Сергей','55','Казань, Южная 109'),
 (3,'Людмила','43','Москва, Профсоюзная 118'),
 (4,'Нина','55','Калязин, Космонавтов 10'),
 (5,'Игорь','30','Москва, Волгина 5'),
 (6,'Алла','40','Москва, Жукова 15'),
 (7,'Сергей','24','Москва, Дорожная 9'),
 (8,'Георгий','39','Москва, Филёвская 3');
COMMIT;
