#!/bin/bah

# Exercise 1

ps

# Exercise 2

sleep 30 &

# Exercise 3

ps| grep sleep
kill PID

# Exercise 4

sleep 30
bg

# Exercise 5

sleep 300&

# Exercise 6

sleep 200&
ctrl+z
sleep 100&
ctrl+z

# Exercise 7

jobs
fg %1
ctrl+z

# Exercise 8

bg %3
jobs

# Exercise 9

ps| grep sleep
kill PID
kill PID
kill PID
