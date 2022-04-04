# Exercises

## Part I - Creating files and directories

**Tip :** To create empty files you can use the command `touch filename.extension`.

1. Using the terminal, apply the directory creation command you learned: create a directory called `unix_tests` and navigate to it.

2. Create a text file named `trybe.txt`.

3. Create a copy of the `trybe.txt` file named `trybe_backup.txt`.

4. Rename the `trybe.txt` file.

5. Inside `unix_tests` , create a new directory called `backup`.

6. Move the `trybe_backup.txt` file to the `backup` directory.

7. Inside `unix_tests` , create a new directory called `backup2`.

8. Move the `trybe_backup.txt` file from the `backup` folder to the `backup2` folder.

9. Delete the `backup` folder.

10. Rename the `backup2` folder to `backup`.

11. See the full path of the current directory and list all the files inside it.

12. Delete the `backup` directory.

13. Clean the terminal.

**For exercises 14 and 15, manually create a text file with the content below, called `skills.txt`, in the graphical part of your operating system:**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
react
SQL
```

14. Display the first 5 skills from the `skills.txt` file on the screen.

15. Show the last 4 skills from the `skills.txt` file on the screen.

16. Delete all files ending in `.txt`.

## Part II - Manipulation & Search

1. In the `unix_tests` folder, download a file with the names of all the countries in the world using the curl command:

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Display the entire contents of the `countries.txt` file on the screen.

3. Show the contents of `countries.txt` page by page until you find `Zambia`.

4. Re-display the contents of `countries.txt` page by page, but now use a command to search for `Zambia`.

5. Search for `Brazil` in `countries.txt`.

6. Search again for `brazil` , but this time using the lower case.

**For the next exercises, create a new file called `phrases.txt` and add some phrases of your choice. You don't need to create the file through the terminal.**

7. Search for phrases that do not contain the word `fox`.

8. Count the number of words in the `phrases.txt` file.

9. Count the number of lines in the `phrases.txt` file.

10. Create the `empty.tbt` and `empty.pdf` files.

11. List all files in the `unix_tests` directory.

12. List all files that end with `txt`.

13. List all files that end with `tbt` or `txt`.

14. Access the `ls` command manual.
