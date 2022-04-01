#!/bin/bash

# Exercício 1

cd unix_tests

# Exercício 2

cat > skills2.txt
Internet
Unix
Bash

# Exercício 3

cat >> skills2.txt
Javascript
Java
Python
React
Node

# Exercício 4

cat skills2.txt | wc -l

# Exercício 5

cat skills2.txt | sort | head -3 > top_skills.txt

# Exercício 6

 cat > phrases2.txt
 phrases

# Exercício 7

cat phrases2.txt| grep br | wc -l

# Exercício 8

cat phrases2.txt| grep -v br | wc -l

# Exercício 9

cat >> phrases2.txt
Estados Unidos
China

# Exercício 10

cat phrases2.txt countries.txt > bunch_of_things.txt


# Exercício 11

sort -o bunch_of_things.txt
