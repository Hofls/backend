// Haven't used Kotlin for a long time? Here is a quick reminder:

// Data types
var count = 5
val weight = 3.5
var message = "Hello world"
val isReady = true

// Variable in string
println("Hello $userName")

// Collections
var list = ArrayList<String>()
list.add("Hey")
list.contains("Hey")

var hashMap = HashMap<Int, String>()
hashMap.put(23, "John")
println(hashMap.get(23))

var hashSet = HashSet<Int>()
hashSet.add(7)
hashSet.add(7)
println(hashSet); // prints "7"

// Null safety
var address = bob?.department?.head?.address

var name: String? = null
if (name != null) {
    println(name) // Won't be prited
}

// Functions
fun multiply(number: Int): Int {
    return number * 3
}
multiply(2)

// Conditions
if (true) {
    println("A")
} else {
    println("B")
}

// Cycles
for (user in users) {
    println(user)
}
while (true) {
    cakesEaten ++
}

// Exceptions
try {
    throw RuntimeException("No internet")
} catch (ex: Exception) {
    println(ex)
}

// Comparison
println(authors == writers) // Structural comparison (true)
println(authors === writers) // Referential comparison (false)

// Modules (Imports)
import java.time.LocalDate
println(LocalDate.now())

// Enum
enum class State {
    IDLE, RUNNING
}
println(State.RUNNING)

// Classes
open class Person(val name: String) {
    open fun greet() {
        println("Hello $name")
    }
}
var person = Person("John")
user.greet()

// Data Classes
data class User(val id: Int, val name: String) {}
val user = User(23, "John")
println(user) // toString
println(user.hashCode())
user.copy()

// Anonymous class
val status = object {
    var id = 23
    var message = "Wrong connection"
}
println(status.message)

// Lambda
val toUppercase = { str: String -> str.uppercase() }
println(toUppercase("hey"))

