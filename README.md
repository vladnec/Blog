# RESTful Blog App

**RESTful Blog App** is a web application developed with best applications of RESTful Routing using Node.JS, Express.JS, Embedded JavaScript (EJS) and more. It is made while pursuing [The Web Developer Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/) course on [Udemy](https://www.udemy.com/). This 40+ hour course covers HTML, CSS, Javascript, Node, Express, MongoDB, Git, and a bunch of other smaller topics along the way.

### Course Instructor: [Colt Steele](https://www.linkedin.com/in/coltsteele/)

### RESTful Routes:

| Name    | Path            | HTTP Verb | Purpose                                           | Mongoose Method          |
| ------- | --------------- | --------- | ------------------------------------------------- | ------------------------ |
| Index   | /blogs          | GET       | List all blogs                                    | Blog.find()              |
| New     | /blogs/new      | GET       | Show new blog form                                | N/A                      |
| Create  | /blogs          | POST      | Create a new blog, then redirect somewhere        | Blog.create()            |
| Show    | /blogs/:id      | GET       | Show info about one specific blog                 | Blog.findById()          |
| Edit    | /blogs/:id/edit | GET       | Show edit form for one blog                       | Blog.findById()          |
| Update  | /blogs/:id      | PUT       | Update a particular blog, then redirect somewhere | Blog.findByIdAndUpdate() |
| Destroy | /blogs/:id      | DELETE    | Delete a particular blog, then redirect somewhere | Blog.findByIdAndRemove() |

### Description:

* **app.js** is the main file that is the heart of our NodeJS web application and contains the RESTful Routes defined for each event.
* **views** directory contains the relevant files, the EJS templates, that render on each event.
* **public/css** directory contains CSS to create better interface.
* **package.json** file contains the information towards the various frameworks that were installed within the course of this project.

### Frameworks & Middlewares:

* **[ExpressJS](https://expressjs.com/)** is used for Server Side Routing applications.
* **[MongooseJS](http://mongoosejs.com/)** is used for Back-End Database operations with MongoDB NoSQL Database.
* **[Body-Parser](https://github.com/expressjs/body-parser/)** is used to Parse the data that was received as a result of HTTP POST request.
* **[Method-Override](https://github.com/expressjs/method-override)** is used to override the HTTP verb to implement PUT and DELETE methods.
* **[Express.Static()](https://expressjs.com/en/starter/static-files.html)** is used to serve the Static files CSS, JS, etc. in the directory as specified.
* **Sanitizer** is used to sanitize the contents of HTML inputs and keeps the Database Safe.

### Note:

The application is hosted on [Cloud9 IDE](https://aws.amazon.com/cloud9/), an open-source Cloud Service provided by Amazon Web Services (AWS) for developing web applications.
