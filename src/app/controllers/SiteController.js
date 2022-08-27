class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

// init SiteController
module.exports = new SiteController();

// res.render('new'): trỏ vào thư mục file news
