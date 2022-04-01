#!/bin/bash

# Exercícios 1

ps


# Exercícios 2

sleep 30 &

# Exercícios 3

ps | grep sleep
kill PID

# Exercícios 4

sleep 30
bg

# Exercícios 5

sleep 300&

# Exercícios 6

sleep 200&
ctrl+z
sleep 100&
ctrl+z

# Exercícios 7

jobs
fg %1
ctrl+z

# Exercícios 8

bg %3
jobs

# Exercícios 9

ps| grep sleep
kill PID
kill PID
kill PID
