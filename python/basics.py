# Haven't used Python for a long time? Here is a quick reminder:

#### Data types
count = 5
weight = 20.5
message = "Hello world"
isReady = True

#### Variable in string
print(f"Hello {userName}")

#### Collections
list = ['Hey', 'Ho', 'Lets']
list.append('Go')
spam.remove('Go')
print('Go' in list) # True

dictionary = {"name": "john", "age": 32}
dictionary["city"] = "Tokio"
print(dictionary["name"])

my_set={2, 2, 3, 3} # my_set = set()
my_set.add(4)
print(4 in my_set) # True

#### Null safety
name = print('')
if (name): # name is None
    print(name) # won't be printed

#### Functions
def double(number):
    return number * 3
double(2)
double(number=2)

#### Conditions
# (and, or, not); (==, !=);  (True, False)
if (False):
    print("A")
elif False:
    print("B")
else:
    print("C")

#### Cycles
while True:
    print('hmm')
    # break / continue

for x in range(3):
    print(x)

#### Exceptions
try:
    raise Exception("Something went wrong")
except Exception as e:
    print(e)
finally:
    print('final')

#### Comparison
print(authors == writers) # Structural comparison (true)
print(authors is writers) # Referential comparison (false)

#### Modules (Imports)
import monmod
monmod.printNumbers()

#### Enum
from enum import Enum
class Color(Enum):
    RED
    GREEN
print(Color.RED)

#### Classes
class Person:
    def __init__(self, name):
        self.user = name

    def greet(self):
        print(f"Hello {self.user}")
person = Person("John")
person.greet()

#### Anonymous class / JSON object
# Warning! No good way found

#### Lambda (Anonymous function)
# Warning! Multiline lambdas not supported
multiply = lambda x: x * 3
print(multiply(2))
