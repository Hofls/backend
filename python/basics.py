# Haven't used Python for a long time? Here is a quick reminder:

#### Data types
count = 5
weight = 20.5
message = "Hello world"
isReady = True

#### Variable in string
print(f"Hello {userName}")

#### Collections
list = ['Lets', 'Go']
list.append('Hey')
print('Hey' in list) # True

dictionary = {21: "Helga", 22: "Willy"}
dictionary[23] = "John"
print(dictionary["name"])

my_set={1, 3} # my_set = set()
my_set.add(7)
print(7 in my_set) # True

#### Null safety
# Warning! No optional chaining
name = print('')
if (name): # name is None
    print(name) # won't be printed

#### Functions
def multiply(number):
    return number * 3
multiply(2)

#### Conditions
# (and, or, not); (==, !=);  (True, False)
if (False):
    print("A")
elif False:
    print("B")
else:
    print("C")

#### Cycles
for user in user:
    print(user)
while True:
    print('hmm')
    # break / continue

#### Exceptions
try:
    raise Exception("No internet")
except Exception as e:
    print(e)
finally:
    print('Done!')

#### Comparison
print(authors == writers) # Structural comparison (true)
print(authors is writers) # Referential comparison (false)

#### Modules (Imports)
import monmod
monmod.printNumbers()

#### Enum
from enum import Enum
class State(Enum):
    IDLE
    RUNNING
print(State.RUNNING)

#### Classes
class Person:
    def __init__(self, name):
        self.user = name

    def greet(self):
        print(f"Hello {self.user}")
person = Person("John")
person.greet()

#### Anonymous class / JSON object
# Warning! It's just a dictionary
status = {"id": 23, "message": "Wrong connection"}
print(status["message"])

#### Lambda (Anonymous function)
# Warning! Multiline lambdas not supported
toUppercase = lambda text: text.upper()
print(toUppercase("hey"))

#### HTTP request/response
import requests
response = requests.get("http://httpbin.org/get")
json = response.json()
print(json["origin"])

#### Run code in parallel
def runInParallel(*fns):
    proc = []
    for fn in fns:
        p = Process(target=fn)
        p.start()
        proc.append(p)
    for p in proc:
        p.join()
runInParallel(functA, functB)

#### Naming conventions
# Folder - advanced_query
# File - user_repository.py
