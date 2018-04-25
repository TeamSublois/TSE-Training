## sprint 2
#### Modified from [Sumeet Bansal's training repo](https://github.com/sumeet-bansal/tse-training/tree/master/sprint-2)
This sprint is focused on introducing Node.js with Express. **N**ode.js and **E**xpress, plus **M**ongoDB and **R**eact, form the **MERN** stack, which is what we'll be working with throughout the quarter. As with the last sprint, keep updating your progress on the repo's Kanban Boards as you go along.

### Introduction to Node.js with Express
The reason I'm bundling Node.js with Express instead of going through each separately is because Node's just a JavaScript runtime environment&mdash;it allows you to run JavaScript outside of a browser (e.g. in a server or a desktop client). Express is a framework that builds on top of that and is designed for building web applications and APIs, which is what we're doing. That's a simplified explanation but also the gist of it.

1. Read [this introduction to Node and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction).
2. Follow along with [this blog post](https://zellwk.com/blog/crud-express-mongodb/) up to and including the "CRUD - READ" section.
3. Clone/pull this repo and create your own branch&mdash;same as the last sprint.
4. Complete the following mini-project (and update the Kanban board).

### Project 3: navigational-skeleton
__Description__: *set up and deploy a basic navigational skeleton.*
1. Using what you learned in [the last sprint](https://github.com/sumeet-bansal/tse-training/tree/master/sprint-1), recreate the webpages shown below.

![index](https://github.com/sumeet-bansal/tse-training/blob/master/sprint-2/reference/index.png "index screen mockup")
![posts](https://github.com/sumeet-bansal/tse-training/blob/master/sprint-2/reference/posts.png "posts screen mockup")
![post1](https://github.com/sumeet-bansal/tse-training/blob/master/sprint-2/reference/post1.png "post1 screen mockup")
![about](https://github.com/sumeet-bansal/tse-training/blob/master/sprint-2/reference/about.png "about screen mockup")

*Note: [Bootstrap](https://getbootstrap.com/) makes it very easy to quickly style pages; the [grid system](https://getbootstrap.com/docs/4.0/layout/grid/) and [preset buttons](https://getbootstrap.com/docs/4.0/components/buttons/) will be especially useful for the pages below. For [sizing](https://getbootstrap.com/docs/4.0/utilities/sizing/) and [spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/), I don't expect you to nail it, so close enough is good enough.*

2. Create an Express app with routes to the pages and have the pages link to each other as specified in the screenshots above. There should be some starter code in this directory, following a standard project structure for Express apps:
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── Procfile
├── public
│   ├── css
│   │   └── style.css
│   └── js
├── routes
│   ├── about.js
│   ├── index.js
│   ├── post1.js
│   └── posts.js
└── views
│   ├── about.hbs
│   ├── index.hbs
│   ├── post1.hbs
│   └── posts.hbs
```
Make sure you have Node.js and NPM installed. You can find the downloads [here](https://nodejs.org/en/download/). Note that near the bottom of the page there's [a guide to installing Node.js via package manager](https://nodejs.org/en/download/package-manager/), which is the method I recommend. To get started, run `npm install` to install all the necessary Node module dependencies in `node_modules/`. Then, run `npm start` to start up the Express app and go to `localhost:3000` in your browser of choice.

The "main" file is `app.js`: it sets up the website, including the routes. Take a look at the starter code to see how it defines the route for `/`. Don't worry about `bin/`, `package.json`, or `Procfile`. There's not much to do in `public/` for this either, but that's where the various stylesheets and scripts go. The tutorials should explain how `routes/` and `views/` work within the Express app, and the starter code in `routes/about.js` should help clarify. Don't worry about the `.hbs` file extension for now&mdash;it's just the file extension for [`handlebars`](https://github.com/ericf/express-handlebars), the templating engine we'll be using later down the road, but for now, just treat them as regular `.html` files.

Note that every time you make some changes to the Express app (e.g. in `app.js`, you'll need to restart the app via `npm start`).

3. Log in to your account or sign up for one on [Heroku](https://www.heroku.com/).
4. Create a new app on Heroku and deploy the finished skeleton site.

*Note: normally, you'd be able to follow [Heroku's guide to deploying with Git](https://devcenter.heroku.com/articles/git), but the Express app isn't in the root directory as a result of how this repo is structured, so you'll have to push a subdirectory of the repo to Heroku. [This StackOverflow post's top answer](https://stackoverflow.com/a/10648623) has instructions on how to do this, but I'll walk you through it. Make sure you have the Heroku CLI installed (see the aforementioned Heroku guide [prerequisites section](https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli)). Then, execute the following commands from the repo's root directory:*

```bash
~$ heroku create tse-training-spr2-YOUR_GITHUB
~$ heroku git:remote -a tse-training-spr2-YOUR_GITHUB
~$ git subtree push --prefix sprint-2/ heroku master
```

__Since other people are going to be on this repo as well, please don't merge anything back into `master`&mdash;just work on your own branch.__

### Additional Resources
+ [the Express documentation](https://expressjs.com/) on [routing](https://expressjs.com/en/starter/basic-routing.html)
+ of course, [NodeSchool](https://nodeschool.io/) (although it's more focused on vanilla Node than Node with Express)
+ [the MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) for [ExpressJS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs), especially [part 2 (creating a skeleton website)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website) and [the first bit of part 4 (routes and controllers)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
+ [the tutorialspoint ExpressJS tutorial](https://www.tutorialspoint.com/expressjs/index.htm)
+ [this gamified Express tutorial from Code School](https://www.codeschool.com/courses/building-blocks-of-express-js)
