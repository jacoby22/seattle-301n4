(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // RESPONSE: First, a variable is declared (articleData), which stores an anonymous function reference. The anonymous function takes one parameter called article, stores that article parameter value as an array of articles through the ctx.articles property. The next() method call will call the "next" function chained, whatever that function may be, in the page() call in routes.js. The Article.findWhere method call takes the 'id' value sought from the HTML5 database and compares it to the ctx.params.id parameter, which is the comparison for matching with 'id'. The articleData function is called as a callback once the webDB execute request is sent. Overall, the method filters articles by id.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // RESPONSE: Similar to the articlesController.loadById method, this method filters the articles by author name and passes that to the initIndex method call to render the filtered author names on the DOM. The .replace() method replaces the '+' with empty spaces due to the fact that the keys needed the concatenated '+' to be permissible and now, we need to match the exact author name with what is compared in our filter.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // RESPONSE: Again, this method call is similar to both the articlesController.loadById method and the articlesController.loadByAuthor method. Instead, this method filters article content by category. It waits for when a route is fired (change on the category filter) and runs the chain of methods via the routes.js file.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // RESPONSE: This method again, utilizes the context object passed in from page.js. It also, has a similar variable-anonymous function pair for populating the context object's .articles property full, in this case, of all the article data. First, though, we check to see if the Article.all array has any values in it (aka has been populated). If it does, we set those values equal to Article.all, otherwise, we fetch all the articles with Article.fetchAll and store them in ctx.articles using articleData as our callback. Overall, this method populates our context object with all the articles in the database.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
