// Haven't used Kotlin language for a long time? Here is a quick reminder:

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

// Exceptions

// Comparison
println(authors == writers) // Structural comparison (true)
println(authors === writers) // Referential comparison (false)

// Modules (Imports)
import java.time.LocalDate
println(LocalDate.now())

// Classes
open class Person(val name: String) {
    open fun greet() {
        println("Hello $name")
    }
}

var person = Person("John")
user.greet()
