/*
-----------------
      RECAP
-----------------
*/


/* 
1. Assign your name to a variable called my_name. In Python, you would have done that like this:

my_name = "Mister Bathgate"
*/






/*

2. Print out the myName variable (which of 
these commands should you use in JavaScript?)

print(myName)
console.out(myName)
console.log(myName)
$echo myName

*/








/*
Challenge.

Create a firstName and lastName variable and assign your first and last name to those variables. Now join those two strings together and print it out.
  Hint: use the + operator.

*/







/*
------------
  IF/ELSE
------------


3. Look online to figure out how to use branching (if/else) in JavaScript.

Write an if/else block to determine if this_year is a leap year. In Python, the code looks like this:


if year % 4 == 0:
  print("No")
elif not year % 100:
  print("Yes")
elif not year % 400:
  print("No")
else:
  print("Yes")

this_year = 2016 should print "No"
this_year = 2019 should print "No"
this_year = 2000 should print "Yes"
this_year = 2021 should print "Yes"

*/



/*
-------------
 FUNCTIONS
-------------


4. Look online to figure out how functions are created in JavaScript. Look for an explanation that uses the function keyword (not this symbol: =>)


  Write a function that checks whether any year is a leap year. Instead of printing out "No" or "Yes" return false and true.
  
  The Python equivalent is:
  
  
def is_leap_year(year):

  if year % 4 == 0:
    return False
  elif not year % 100:
    return True
  elif not year % 400:
    return False
  else:
    return True

*/









/*
Challenge. Figure out how to rewrite your function as an 'arrow function' (using the => syntax)
*/













/*
-------------
    LISTS
-------------


5. Create a new variable in JavaScript and assign a list to it (the syntax for creating lists is the same as for Python — don't forget the let keyword, though!). Add an entry for every year that you've lived.

In Python this would look like:

years_lived = [1986, 1987, 1988, 1989, ..., 2020]

*/






/*
Challenge. Use Google to figure out how to get the length of your list and then print it to the console. (Be aware that lists are called 'arrays' in JavaScript)

In Python, you did this using the len() function:

age = len(years_lived)
print(age)
*/










/*
-------------
   LOOPS
-------------


There are two kinds of loops in JavaScript.


THE FIRST KIND
The "for-of" loop is equivalent to this in Python:

for element in the_list:
  do_something_with(element)

In JavaScript you write this as:

for (let element of the_list) {
  do_something_with(element)
}


THE SECOND KIND
The 'C-style' loop is equivalent to this in Python:

for i in range(len(the_list)):
  do_something_with(the_list[i])
  
In JavaScript, it looks like this:

for (let i = 0; i < the_list.length; i++) {
  do_something_with(the_list[i])
}







6. Using your preferred style of list (for-of or C-style), loop over all of the years from the year you were born until next year. If that year is a leap year (you can use your is_leap_year(year) function for this) print it out.

In Python, you could do that like this:

years_lived = [1986, 1987, 1989, ..., 2020]
for year in years_lived:
  if is_leap_year(year):
    print(year)

*/












/*
Challenge. Count how many years you have lived in that are leap years. In Python, that would look like this:


leap_years_count = 0
years_lived = [1986, 1987, 1989, ..., 2020]

for year in years_lived:
  if is_leap_year(years_lived):
    leap_years_count = leap_years_count + 1

print(leap_years_count)

*/









