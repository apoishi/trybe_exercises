#!/bin/bah

# Exercício 1

ps

# Exercício 2

sleep 30 &

# Exercício 3

ps| grep sleep
kill PID

# Exercício 4

sleep 30
bg

# Exercício 5

sleep 300&

# Exercício 6

sleep 200&
ctrl+z
sleep 100&
ctrl+z

# Exercício 7

jobs
fg %1
ctrl+z

# Exercício 8

bg %3
jobs

# Exercício 9

ps| grep sleep
kill PID
kill PID
kill PID
