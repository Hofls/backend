# Haven't used this language for a long time? Here is a quick reminder:

#### Data types
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

#### Variable in string
print(f"{name} welcome to the {area}")

#### No value
hmm = print('')
if (hmm): # hmm is None
    print("wont be printed")

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

#### Functions
def double(number):
    return number * 2
double(2)
double(number=2)

#### Exceptions
try:
    raise Exception("Something went wrong")
except Exception as e:
    print(e)
finally:
    print('final')

#### Modules
import monmod
monmod.printNumbers()

#### Classes
class Person:
    def __init__(self, name):
        self.user = name

    def greet(self):
        print(f"Hello {self.user}")

person = Person("John")
person.greet()
