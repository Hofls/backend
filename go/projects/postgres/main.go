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

	// INSERT
	err = db.QueryRow(`INSERT INTO customer(name, rank) VALUES($1, $2)`, "John", 3).Err()
	if err != nil {
		log.Fatal(err)
	}

	// UPDATE
	err = db.QueryRow(`UPDATE customer SET name = $1, rank = $2 WHERE id = 1`, "Sally", 15).Err()
	if err != nil {
		log.Fatal(err)
	}

	// SELECT
	rows, err := db.Query("SELECT * FROM customer WHERE name <> $1", "Leslie")
	if err != nil {
		log.Fatal(err)
	}
	for rows.Next() {
		var c Customer
		if err := rows.Scan(&c.Id, &c.Name, &c.Rank); err != nil {
			log.Fatal(err)
		}
		fmt.Println(c)
	}
}
