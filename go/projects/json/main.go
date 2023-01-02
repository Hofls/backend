package main

import (
	"encoding/json"
	"fmt"
)

type Customer struct {
	Id int
	Name string
}

func main() {
	// Struct to Json
	object := Customer{5, "John"}
	marshalled, _ := json.Marshal(object)
	jsonCustomer := string(marshalled)
	fmt.Println(jsonCustomer)

	// Json to Struct
	var unmarshalled Customer
	_ = json.Unmarshal([]byte(jsonCustomer), &unmarshalled)
	fmt.Println(unmarshalled)
}
