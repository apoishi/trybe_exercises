#!/bin/bash

# Exercícios 1

cd unix_tests

# Exercícios 2

cat > skills2.txt
Internet
Unix
Bash

# Exercícios 3

cat >> skills2.txt
Javascript
Java
Python
React
Node

# Exercícios 4

cat skills2.txt | wc -l

# Exercícios 5

cat skills2.txt | sort | head -3 > top_skills.txt

# Exercícios 6

 cat > phrases2.txt
 phrases

# Exercícios 7

cat phrases2.txt| grep br | wc -l

# Exercícios 8

cat phrases2.txt| grep -v br | wc -l

# Exercícios 9

cat >> phrases2.txt
Estados Unidos
China

# Exercícios 10

cat phrases2.txt countries.txt > bunch_of_things.txt


# Exercícios 11

sort -o bunch_of_things.txt
