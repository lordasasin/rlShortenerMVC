const express = require("express");
const router = express.Router();
const { getMyUrls, listUrls } = require("../controllers/user");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/myurls", authMiddleware, getMyUrls);
router.get("/list", listUrls);

module.exports = router;
