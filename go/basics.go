// Haven't used Go for a long time? Here is a quick reminder:

// Data types
var count = 5
var weight = 20.5
var message = "Hello world"
var isReady = true

// Variable in string
fmt.Println(fmt.Sprintf("Hello %s", userName))

// Collections (Data structures)
// Warning! Set does not exist
var strSlice = []string{"Hey", "Ho"}
strSlice = append(strSlice, "Lets")

var usersMap = make(map[int]string)
usersMap[21] = "Helga"
usersMap[22] = "Willy"
fmt.Println(usersMap[21])

// Null safety
// Warning! No optional chaining
if config != nil {
}

// Functions
func multiply(x int) int {
	return x * 3
}
multiply(2)

// Conditions
// (&&, ||, !); (==, !=); (true, false)
if (false) {
	fmt.Println("A")
} else if (false) {
	fmt.Println("B")
} else {
	fmt.Println("C")
}

// Cycles
for _, user := range users {
	fmt.Println(user)
}
for true {
	cakesEaten ++
}

// Exceptions - No such thing in Go
func multiply(x int) (int, error) {
	return 0, errors.New("Error example")
}
result, err := multiply(3)
if err != nil {
	fmt.Println(err)
}

// Comparison
fmt.Println(*p == *q) // Compare values (true)
fmt.Println(p == q) // Compare memory addresses (false)

// Modules (Imports)
import (
	"math/rand"
)
fmt.Println(rand.Intn(25))

// Enum - No such thing in Go

// Classes
type User struct {
	Name string
}
func (u User) greet() {
	fmt.Println("Hello " + u.Name)
}
func main() {
	var u = User{Name: "John"}
	u.greet()
}

// Anonymous class / JSON object
// Warning! It's just a map
status := map[string]interface{}{
	"id": 23,
	"message": "Wrong connection",
}
fmt.Println(status["message"])

// Lambda (Anonymous function)
var toUppercase = func(txt string) string {
	return strings.ToUpper(txt)
}
fmt.Println(toUppercase("hey"))

// HTTP request/response
res, err := http.Get("http://httpbin.org/get")
TODO

// Run code in parallel
TODO

// Package manager - Go has default one

// Naming conventions
// Folder - advanced/query
// File - user_repository.go
