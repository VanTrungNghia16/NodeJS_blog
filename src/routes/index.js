const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newRouter);

  app.use("/", siteRouter);
}

module.exports = route;

// middleware
// File new, site là thư mục con của file index.js
