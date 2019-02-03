var express    = require("express");
var methodOverride = require("method-override");
var app        = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressSanitizer = require("express-sanitizer");


// ======================== APP CONFIG ========================= 
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
mongoose.set("useFindAndModify", false);


// ======================== MONGOOSE/MODEL CONFIG ========================= 

    var blogSchema = new mongoose.Schema({
        title:  String,
        image:  String,
        body:   String,
      
// ========  Data cand a fost creat post-ul ! ========       
        created:{type : Date , default: Date.now}
    });
    
// ====== Model =====

    var Blog = mongoose.model("Blog", blogSchema);
    
    // Blog.create({
    //     title: " Autumn is here",
    //     image: "https://images.unsplash.com/photo-1522841147685-ec3230fd52f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=259d863c805a386231adc867c4f4ef51&auto=format&fit=crop&w=2134&q=80",
    //     body : "This is what i see from my window almost all the time just because my landowner won't change my window",
        
    // });
    
// =============  ROUTES ========


/// ===== INDEX PAGE === 

app.get("/",function(req,res){
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    Blog.find({}, function(err, blogs){
        if (err) {
            console.log(err);
        } else   {
            res.render("index" , {blogs:blogs});
        }
    });
});

/// ===== NEW Route ! 
app.get("/blogs/new", function(req,res){
    res.render("new")
});


/// ==== Create Route!

app.post("/blogs", function(req,res){
    Blog.create(req.body.blog, function(err,newBlog){
        req.body.blog.body = req.sanitize(req.body.blog.body);
          if(err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

/// =======Show Route

app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog:foundBlog});
        }
    });
});

/// ======= Edit Route!

app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else {
            res.render("edit" , {blog:foundBlog});
        }
    });  
});


/// ======== Update Route

app.put("/blogs/:id" , function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err , updatedBlog){
        if (err) {
            res.redirect("/blogs");
            console.log(err);
        } else {
            var showUrl = "/blogs/" + req.params.id;
         res.redirect(showUrl);         
        }
    });
});

// ================= Destroy Route ========

app.delete("/blogs/:id", function(req,res){
   // destroy blog
   Blog.findByIdAndRemove(req.params.id , function(err, deletedBlog){
      if (err) {
          console.log("err");
          res.redirect("/blogs");
      } else {
          res.redirect("/blogs");
      }
   });
   //redirect somewhere
});


    













app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});