## Git Quick Start Guide
4 steps to getting started with `git`:

1. Create a new file. This can be in the command line with something like `touch index.html` or using your texteditor.  
2. Add the new file to `git`. If you type in `git status`, you'll see your new file, `index.html`, is not being tracked. That means it's not saving a history of that file! Let's change that by adding the file to git:
`git add newfile.txt`  
You can also use the shortcut, `git add .` to add **ALL** files, but this is generally not recommended as you may add unwanted files. You can also add specific file types only, such as only `.js` files like so: `git add *.js`  
3. Commit with a message. Your file is being tracked but now you need to save the changes you made.
`git commit -m "Create new file called newfile.txt"`  
You'll want to run this command any time after you change a file and have add it to git.
4. Push to github. By default, you are using git on your local machine but for backup and sharing purposes, you push to a remote server. Use this command:
`git push`  
If this is the first time you've tried pushing, git will ask you to set an upstream, which is basically where you want to link to. If you're pushing to Github, you want to push to a `remote` called `origin` and a branch called `master` (which is the default name).  

To summarize:
1. Create a new file or make changes to old ones.
2. Add those files to git using: `git add FILENAME`, where *FILENAME* is the name of the file you changed.
3. Commit those changes: `git commit -m "Created a README"`, where the message in the quotes is a short description of what changes you made.
4. Push to a remote branch: `git push`

Refer to the [official Git docs](https://git-scm.com/docs/gittutorial) for more detailed info.
