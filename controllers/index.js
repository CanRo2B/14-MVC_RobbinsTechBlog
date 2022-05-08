const router = require("express").Router();

// finish the required routes
// const apiRoutes =
const apiRoutes = require("./api");
// const homeRoutes =
const homeRoutes = require("./homeRoutes")
// const dashboardRoutes =
const dashboardRoutes = require("./dashboardRoutes");

// router.use("/", homeRoutes);
router.use("/", homeRoutes);
// finish the other needed routes with router.use()
router.use("/api", apiRoutes);

module.exports = router;