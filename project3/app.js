const express = require('express');
const path = require('path');
const app = express();
const port = 3003;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true }));

//current blogs array 
const blogPosts = [
    { id: 1, title: 'Recipes of The Week'},
];

// recipes array
const recipes = [
    {id: 1, title: 'Shakshuka'},
    {id: 2, title: 'Hummus'},
    {id: 3, title: 'Ta3meya'},
    {id: 4, title: 'Tabbouleh'},
    {id: 5, title: 'Konafa'},

];

let userRecipes = [];
let stories = [];

app.get('/', (_req, res) => {
    res.render('../views/pages/home', { blogPosts});

});

// main post 1 route 
app.get('/pages/:id', (req,res) => {
    const postId = req.params.id;
    const post = blogPosts.find((post) => post.id == postId);

    if(post) {
        const recipesToPass = post.id == 1 ? recipes: [];
        res.render(`pages/post${post.id}`, {post, recipes: recipesToPass}); 
    }else{
        res.status(404).render('pages/404');
    }
});

// routed for recipes of week page 
app.get('/pages/recipe/:id', (req, res) => {
    const recipeId = req.params.id;
    const recipe = recipes.find((r ) => r.id == recipeId );

    if (recipe){
        res.render(`pages/recipe${recipeId}`, {recipe});
    }else{
        res.setMaxListeners(404).render('pages/404');
    }
});

//route for abt page 
app.get('/about', (_req, res) => {
    console.log('Abt page requested');
    res.render('pages/about');
});

// route for contact page 
app.get('/contact', (_req,res) => {
    res.render('pages/contact');
});


app.get('/stories', (_req, res) => {
    res.render('pages/stories', {stories});
});

app.post('/stories', (req, res) => {
    const {title, content } = req.body;

    if (title && content){
        const newStory = { title, content};
        stories.push(newStory);
        console.log('New story added:', newStory );

    }else{
        console.log('Missing title or content');
    }
    res.redirect('/stories');
});

app.get('/user-recipes', (_req, res) => {
    res.render('pages/user-recipes', { userRecipes });
});

app.post('/user-recipes', (req, res) => {
    const { title, ingredients, instructions } = req.body;

    if (title && ingredients && instructions) {
        const newRecipe = { title, ingredients, instructions };
        userRecipes.push(newRecipe);
        console.log('New user recipe added:', newRecipe);
    } else {
        console.log('Missing title, ingredients, or instructions');
    }
    res.redirect('/user-recipes');
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});