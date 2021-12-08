# Freight Deck Bootcamp

# Tools

 1. VSCode: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
 2. Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
 3. Postman: [https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/)
 4. ngrok: [https://ngrok.com/download](https://ngrok.com/download)

# Plugins

 1. [Glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)
 2. [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
 3. [ES7 React/Redux/GraphQL/React-Native snippets]( https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
 4. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
 5. [Javascript Booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)
 6. [Synk](https://marketplace.visualstudio.com/items?itemName=pmbenjamin.vscode-snyk)
 7. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
 8. [Node Exec](https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node)
 9. [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)

 # Newsletters
  Some news letters for regular updates
 1. Javascript Weekly: https://javascriptweekly.com/
 2. React Status: https://react.statuscode.com/
 3. Node Weekly: https://nodeweekly.com/
 4. Mobile Dev Weekly: https://mobiledevweekly.com/

# VSCode Settings

Hit `Shift+Cmd+P` in VSCode and click `Open Settings (JSON)` then append the following to it.

```
{
	"editor.fontSize": 26,
	"editor.tabSize": 2,
	"editor.wordWrap": "on",
	"terminal.integrated.fontSize": 26,
	"emmet.includeLanguages": {"javascript": "javascriptreact"},
	"emmet.syntaxProfiles": {"javascript": "jsx"}
}
```

# Let's Begin

Task for Day 1 will be to setup the environment like tools, plugins and run the express server. Then we will learn to configure git to push our code to github.

## Day 1

### Prerequisites

 1. Download the required tools and plugins and subscribe to the above mentioned newsletters.
 2. Open [https://github.com/](https://github.com/) and create your account.
 3. Download and Install Node.js from [here](https://nodejs.org/en/download/). After installing you will be able to acess node package manager (npm) globally.
 4. Go through the following cheatsheet for shortcuts in VSCode.
	 1. Windows: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
	 2.  macOS: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
	 3. Linux: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
  
  ### Walkthrough
  
 1. Create a new folder in your preferred location and open that folder in VSCode.
 2. Open the terminal inside VSCode (or if you prefer to use an external terminal, open that and navigate to the current working directory) by pressing ``Ctrl + ` `` .
 3. Initialize the project folder with `express-generator` using command `npx express-generator`. Note: npx is already available in Node.js version 8.2.0 and above.
 4. After running the command it will ask `destination is not empty, continue?`. Press `y` and hit Enter.
 5. Now your express server is bootstrapped by express-generator. The generated app will have the following directory structure.
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

### Directory Structure
 
**`package.json`** holds the various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package.

The **`bin/`** directory serves as a location where you can define your various startup scripts. The `www` is an example to start the express app as a web server.

In `Express 4.0`  all middleware have been removed so that they can be maintained and updated independently from the core Express, thus they need to be called separately (what you see in **`app.js`**.

The **`public/`** directory serves static files such as images, CSS files, and JavaScript files. We use the `express.static` built-in middleware function in Express. We will talk in detail about this in future.

The **`routes/`** directory is used by `app.js` to register all the routes to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions. We will talk in detail about controller function in future.

The **`views/`** directory will server our static template files in our application.

Then what is the difference between `views/` and `public/` directory 🤔. Let's find out:

`Views` are rendered by the JavaScript runtime “dynamically”, requiring processing of data to generate a response body (usually HTML or a template which in our case is JADE/PUG). The view could be rendered by any http endpoint, or other view, by name.

`Public` is served “statically”, meaning that a file is served as-is from disk or from an in-memory cache. Usually, the path of any subtree or file in public is served by applying its relative path as a suffix to the server’s host plus public subpath.

### Next Steps

1. Now it's time to install the packages defined in `package.json`. Run `npm install` in your terminal. Now `node_modules` folder will be created in your root directory. Don't forget to add this directory in `.gitignore`.
2. Now you can run your server using `npm start` in your terminal. By default it will be hosted at `http://localhost:3000`. Visit the link and you will see the default page which express-generator uses. 
3. Now it's time to initialize this directory as a repository. Run the following github commands in order:
	1. `git config --global user.name "[name]"`. Replace [name] with your GitHub username.
	2. `git config --global user.email "[email address]"`. Replace [email address] with your email id used to create GitHub account.
	3. `git init`
	4. Now go to your github account on web and create a new repository. Use step 1 to step 6 from here: [https://help.github.com/en/articles/create-a-repo](https://help.github.com/en/articles/create-a-repo)
	5. `git remote add origin [url]`.  Replace [url] with your repository url on web. Now your local repo is attached to the github repo.
	6. Since there is already a `README.md` file present in your cloud repo, we should pull the changes first on cloud before commiting our owns. So now we have to run `git pull origin master`.
	7. Now you will see a `README`.md file pulled from github to your local repo.
	8. Now next step is to let github know which files to track. For this we will use the command `git add [filename]` or `git add .` to track all files. But there will be time we don't want some files/dirs to be pushed to cloud like node_modules and the .env file. So before tracking any files we will add a `.gitignore` file in the root directory. You can use [http://gitignore.io/](http://gitignore.io/) to generate content for .gitignore. Just type "Node" in [http://gitignore.io/](http://gitignore.io/) and hit "Create". Now copy this content to your .gitignore file and then run the command `git add .`. You will notice that the folder `node_modules` is blurred which indicates it is not being tracked by git.
	9. Next step is to commit your changes. Run `git commit -am [message]`. Replace [message] with your own message.
	10. Now run `git push origin master`. It will push your changes to github. Go to your browser and navigate to your repository and you will see your content there under `master` branch. We will learn more about branching later in this bootcamp.
	11. Remember the order: pull --> add --> commit --> push.

### Assignment

Find out what the following npm packages does in `app.js`

 1. path
 2. cookie-parser
 
 Find out what the following middlewares does in `app.js`

1. express.json()
2. express.urlencoded({ extended:  false })
3. cookieParser()
4. path.join(__dirname, 'public')

Push your directory to GitHub.

Read this GitHub [cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## Day 2

The tasks for day 2 is to create our own routes in express and learn how to use Postman to test those routes. We will also learn some basics of JADE templating here.

### Prerequisites

1. Express server from Day 1 should be up and running.
2. Postman should be installed.

  ### Walkthrough
  
1. First we will learn how does the express server knows to render `index.jade` or `index.html` when we hit `http://localhost:3000`.
2. `http://localhost:3000` is the root route which is indicated by `/`. All other routes will be like this `http://localhost:3000/login` which will be indicated as `/login` in our express server.
3. So for configuring root route we will use `/` and for further sub routes we will use `/routeName`.
4. Now lets naviagate to routes folder with the structure as follows.
```
.
├── routes
│   ├── index.js
│   └── users.js
```

5. `index.js` file will handle our root route means `/`, while `user.js` will handle our routes starting from `/users`.
6. Now coming inside the `index.js` file we can see that the we are importing the express router and configuring a `GET` method on `/` route.

```
router.get('/', function(req, res, next) {
	res.render('index', { title:  'Express' });
});
```
In the above code present in `routes/index.js` we are using a `get` method present in `router` object which is used to listen to `GET` requests on this route.

Now the first parameter passed in `get` method is the route name which in our case is the `/` route or the root route. The second parameter is a callback function which runs when someone will hit this route from  a browser or postman or anything else. Inside this function we have access to `request (req)` object, `response (res)` object and `next` which is a callback. We will talk about `next` later in this bootcamp.

The `request` object is used to get the data from frontend while the `response` object is used to send back the response to frontend. In the above piece of code we are not handling any data coming from frontend, but we are sending the response back. Here we are asking the response object to render the `index.jade` file when someone hits the `/` route. Please keep in mind
the .jade file name should match the string passed in the res.render() method. The other parameter which is `{title: 'Express'}` a payload/data which is sent to jade template to render which means the html page will be dynamic, whatever you will send here as payload will be rendered on the browser. Now let's see ho can we use this object in jade.

Navigate to `views/index.jade` and you will see the below code there:

```
block  content
	h1= title
	p Welcome to #{title}
```

Keep in mind the indentation here. As you can see there are two ways to use the `title` property here which is paased before.

1. `h1= title`
2. `p Welcome to #{title}`

If we want some string to be appended to our dynamic data we can use the second syntax otherwise we can use the first syntax.

Instead of send a webpage if you want to send a json object to the frontend we use the below syntax inside the callback function.

```
router.get('/', function(req, res, next) {
	res.status(200).json({data: "some data here"})
});
```

Also don't forget to initialize 'jade' template inside `app.js`. Express generator does it for you. Syntax for the same is:

```
app.set('view engine', 'jade');
```

Also we have to intialize our routes in `app.js` for them to work. Navigate to `app.js` where you will find the below code:

```
var indexRouter =  require('./routes/index');
var usersRouter =  require('./routes/users');
```

Here `indexRouter` will represent our  `/` router while `userRouter` will represent `/users` router.
 
:bulb: ****Pro Tip :**** For this import to work properly don't forget to export your router from `routes/index.js` and `routes/users.js`. Syntax for the same is `module.exports  = router;`

Now coming back to `app.js` file you will see the following code:

```
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

`app.use()` is a method we need to invoke middlewares. In first line we are telling our application to use routes in `indexRouter` wheenver someone hits the `/` route and in second we are telling the app to use `usersRouter` wheever someone hits the `/users` route.

Now let's create our own routes. Open `routes/users.js` and add the following code to it

```
router.get('/info', function(req, res, next) {
	res.status(200).json({data: "Welcome to Freight Deck!!"})
});
```
Restart the server by killing it with `Ctrl+C` and running `npm start` again.

Open Postman. On first launch you will see the following window:

![enter image description here](https://s3.ap-south-1.amazonaws.com/development.freightdeck.com/Postman1.png)

Just Cross this screen from the cross button on top right of this window. Now Click the `+`  button and type this url `http://localhost:3000/users/info`. You will see the response as in the below image.

![enter image description here](https://s3.ap-south-1.amazonaws.com/development.freightdeck.com/Postman_2.png)


