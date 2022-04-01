#!/bin/bash

# Exercise 1

cd unix_tests

# Exercise 2

cat > skills2.txt
Internet
Unix
Bash

# Exercise 3

cat >> skills2.txt
Javascript
Java
Python
React
Node

# Exercise 4

cat skills2.txt | wc -l

# Exercise 5

cat skills2.txt | sort | head -3 > top_skills.txt

# Exercise 6

 cat > phrases2.txt
 phrases

# Exercise 7

cat phrases2.txt| grep br | wc -l

# Exercise 8

cat phrases2.txt| grep -v br | wc -l

# Exercise 9

cat >> phrases2.txt
Estados Unidos
China

# Exercise 10

cat phrases2.txt countries.txt > bunch_of_things.txt


# Exercise 11

sort -o bunch_of_things.txt
