# Your Blog

For this project, you must develop your own blog. It is important that you focus on developing the Blog as asked on the image. If you want to add more functionalities and visual changes, do it on a new `branch`. On the `master branch`
the project must be the same as the specifications asked here, so that your project gets evaluated automatically. 

1. Fork and clone the repository
2. Open the design and analyse it
3. Write the code
4. Handing the project


## 1. Fork and clone the repository

**Fork** the repository for your user. You have to locally clone the repository. On the terminal you must write the following code:

```
git clone https://github.com/cognits/frontend-blog.git
```
Change *cognits* for your user name.

## 2. Open the design and analyse it

An image or a photoshop file from a designer is going to be your only guide when you work with a development team. This image is going to give you the guidelines you need to follow for the software. Open the image [blog-sketch](blog-sketch.png)
to see how your webpage is going to look like.


## 3. Write the code

Make sure you write all of your HTML code at [index.html](index.html) and all of you CSS code at  [styles.css](css/styles.css). Through code, you have to make the closest webpage possible to the blog-sketch image [blog-sketch](blog-sketch.png). 

### Write 3 posts
Now you have to write at least 3 posts. Each individual post must be inside the “post.json” file, inside the *_posts*. Para cada posts agrega titulo, fecha, contenido y autor. Add a title for each post, the content and the author for each post. You have to read it through Javascritp/JQuery and show them in the blog from the newest to the oldest.

### Comments
After you make sure your blog is functional, you have to let your users be able to comment! Add an area at the bottom of each blog where the users can comment, and it should be shown on the screen.

### Advanced
Only when you finish the main page of the blog, you can continue with the advanced topics. Now make a search option using Javascript and JQuery that looks for the posts by the *query* and that returns the posts that contains the used words.

### Running the tests locally 

To make sure your code passes, you have to run tests on your computer. For this we are going to use a tool known as  [Gulp](http://www.gulpjs.com) that runs on [Node.JS](http://www.nodejs.org).

If you followed all the detailed steps in the [Pre-requisitos](1. Pre-requisitos), using the terminal go into the project folder and write the following commands:

```
npm -d install
```
After installing the modules run this command: 
```
gulp
```

## 4. Handing the project

To hand this project you must commit the changes and then push the project to your remote repository in Github.

### Commit and Push 

```
git add .
git commit -m 'The search option of the blog is working!'
```
Then we have to send the code to your Github repository

```
git push origin master
```

### Pull Requests

After making the changes in Github, you have to click on the **Pull Requests**
link that can be found on the Github page of your project. Follow the instructions that they give you there.

## 6. Retroalimentation 

Now you have to look at your buddies code and leave your comments. Get on one of your buddies project and make 3 suggestions to they code using **Issues**.

##You can see my page here

http://danielsandoval.github.io/frontend-blog.
