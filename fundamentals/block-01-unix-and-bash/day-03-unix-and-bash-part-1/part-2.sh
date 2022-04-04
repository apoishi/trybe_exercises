#!/bin/bash

# Exercise 1

curl -s -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercise 2

cat countries.txt

# Exercise 3

less countries.txt

# Exercise 4

less countries.txt
/Zambia

# Exercise 5

grep "Brazil" countries.txt

# Exercise 6

grep "brazil" countries.txt


# Exercise 7

grep -v fox phrases.txt

# Exercise 8

wc -w phrases.txt

# Exercise 9

wc -l phrases.txt

# Exercise 10

touch empty.tbt empty.pdf

# Exercise 11

ls -a

# Exercise 12

ls -a *.txt

# Exercise 13

ls -a *.{tbt,txt}

# Exercise 14

man ls
