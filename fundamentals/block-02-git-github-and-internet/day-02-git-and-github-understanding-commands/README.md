## Let's practice
⚠️ To do the following exercises, you must use the project with the text in the .`txt` file, located inside the directory of the previous day, create a copy to use today.
This time, everyone should do the exercises on their computer, ok? Come on! 😋

1. Navigate to the project root with the `.txt` file;

2. Check that nothing exists without "committing" using `git status`:
* If there is something, check if it is needed and `commit` , or remove it.

3. Create a new `branch` named `trybe-skills-changes` and checkout it;

4. In the `.txt` file, at the end of the skills list, add two more skills that will be developed in Trybe:

* Example:
What I will learn at Trybe:

- Unix
- Bash
- Git
- HTML
- CSS

* Do a `git add filename.extension` ;

 * You can add all the files you've modified using `git add .` , but avoid this in commits with many files so you don't add any changes by mistake;

* Now a `git commit -m "Message you would like"` ;

* A good practice is to always summarize what your commit is changing, eg `git commit -m "Add new skill"` ;

* Avoid merging too many changes into a single commit. So, if there is any error in the code, it will be easier to see in which change it appeared;

* And lastly a `git push -u origin trybe-skills-changes` ;

5. Open a Pull Request with a detailed description:

* Give context to what you are doing, provide links or cite relevant specifications. Ex: "Work done for week 1 of the Software Developer course at Trybe. Here, the challenge was... And to solve the problem we did... And the result was..." ;

* The merge should only be done when you get to exercise 10.

6. Return to the main branch, `master` , with the command: `git checkout master` ;

7. Check that you are on the `master ` branch, with the command: `git branch` (this branch must be in the original format, without the newly added skills);

8. Create a new `trybe-skills-updates` branch from `master` and checkout it;

9. In the same `.txt` file that you modified in step 4 , also at the end of your skills list, add one more learning that you will have in the next blocks:

* Heads up! Here the file will not have the changes made previously in the other branch 😉;

* Do a `git add filename.extension` ;

* Now a `git commit -m "Message you would like"` ;

* And lastly a `git push -u origin trybe-skills-updates` ;

* After the first "push" of your branch, you can just use the `git push ` command;

* Open a Pull Request with a friendly description:

* The merge should be done only when reaching exercise 10;

10. Now, `merge` the `trybe-skills-changes` and `trybe-skills-updates` branches into the `master branch` , via the Pull Request :
First, go to the first Pull Request page (branch `trybe-skills-changes` ) and merge by clicking the green **"Merge pull request"** button;

* Now, go to the other Pull Request page (branch `trybe-skills-updates` ) and try to merge it by clicking the same button. Did you notice that it is blocked? This is because this Pull Request is trying to change the same line of code with different content, and Git can't determine on its own which of the two lines is correct;

* You will have to resolve this **conflict** before "merging" the Pull Request . Click on the **"Resolve conflicts"** button, choose one of the two versions of the text (remember to erase the lines with `<<<<<<<` and `>>>>>>> `, they are created just to give a more visual identification of the problem). Then click on **"Mark as resolved"** and then on **"Commit merge"** ;

* You should now be able to "merge" your Pull Request normally. 😎
