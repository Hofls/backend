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
hashSet.add(7);
hasSet.contains(7);

// Null safety
var address = bob?.department?.head?.address

var name: String? = null
if (name != null) {
    println(name) // Won't be printed
}

// Functions
fun multiply(number: Int): Int {
    return number * 3
}
multiply(2)

// Conditions
// # (and, or, !); (&&, ||, !); (==, ===, !=);  (true, false)
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
} finally {
    println("Done!")
}

// Comparison
println(2 === 3) // True if same reference
println(obj1 == obj2) // True if all fields are equal (same as .equals())

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

// Anonymous class / JSON object
val status = object {
    var id = 23
    var message = "Wrong connection"
}
println(status.message)

// Lambda (Anonymous function)
val toUppercase = { str: String -> str.uppercase() }
println(toUppercase("hey"))

// HTTP request/response
import khttp.get
val response : Response = khttp.get("http://httpbin.org/get")
val json : JSONObject = response.jsonObject
print(json["origin"])

// Run code in parallel
// Waits for 0.5 seconds, writes "Hello world!"
import kotlinx.coroutines.*
suspend fun write(text: String, delay: Long)  {
    delay(delay)
    println(text)
}
fun helloWorld() = runBlocking {
    async {write("World!", 500L)}
    async {write("Hello", 400L)}
}

// Naming conventions
// Folder - advanced/query
// File - UserRepository.kts

// ---------------------------------------
// Kotlin specific:

// Data Classes
data class User(val id: Int, val name: String) {}
val user = User(23, "John")
println(user) // toString
println(user.hashCode())
user.copy()
