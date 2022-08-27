class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send("NEWS DETAIL!!!");
  }
}

// init NewsController
module.exports = new NewsController();

// res.render('new'): trỏ vào thư mục file news
