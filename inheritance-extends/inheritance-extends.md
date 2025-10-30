Day 13: Abstract
 Classes
 Objective
 Today, we will extend what we learned yesterday about Inheritance to Abstract Classes. Because this is a
 very specific object oriented concept, submissions are limited to the few languages that use this
 construct. Check out the Tutorial tab for learning materials and an instructional video.
 Task
 Given a Book class and a Solution class, write a MyBook class that does the following:
 Inherits from Book
 Has a parameterized constructor taking these 
1. string 
2. string 
3. int 
 parameters:
 Implements the Book class' abstract display() method so it prints these 
1. 
2. 
3. 
, a space, and then the current instance's .
 , a space, and then the current instance's 
, a space, and then the current instance's 
.
 .
 lines:
 Note: Because these classes are being written in the same file, you must not use an access modifier
 (e.g.: ) when declaring MyBook or your code will not execute.
 Input Format
 You are not responsible for reading any input from stdin. The Solution class creates a Book object and
 calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method
 on the Book object.
 Output Format
 The  method should print and label the respective 
object's instance (with each value on its own line) like so:
 Title: $title
 Author: $author
 Price: $price
 , , and  of the MyBook
 Note: The  is prepended to variable names to indicate they are placeholders for variables.
 Sample Input
 The following input from stdin is handled by the locked stub code in your editor:
 1/2
The Alchemist
 Paulo Coelho
 248
 Sample Output
 The following output is printed by your display() method:
 Title: The Alchemist
 Author: Paulo Coelho
 Price: 248