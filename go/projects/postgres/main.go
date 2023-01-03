package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

type Customer struct {
	Id int
	Name string
	Rank int
}

func main() {
	// CONNECTION
	connStr := "postgres://postgres:postgres@158.160.12.42/postgres?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// INSERT
	_, err = db.Exec(`INSERT INTO customer(name, rank) VALUES($1, $2)`, "John", 3)
	if err != nil {
		log.Fatal(err)
	}

	// UPDATE
	_, err = db.Exec(`UPDATE customer SET name = $1, rank = $2 WHERE id = 1`, "Sally", 15)
	if err != nil {
		log.Fatal(err)
	}

	// SELECT (1 ROW)
	var count string
	err = db.QueryRow("SELECT COUNT(*) FROM customer WHERE name <> $1", "Leslie").Scan(&count)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Count - " + count)

	// SELECT (MULTIPLE ROWS)
	rows, err := db.Query("SELECT * FROM customer WHERE name <> $1", "Leslie")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		var c Customer
		if err := rows.Scan(&c.Id, &c.Name, &c.Rank); err != nil {
			log.Fatal(err)
		}
		fmt.Println(c)
	}
}
