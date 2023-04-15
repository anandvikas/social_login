const express = require('express');
const router = express.Router();

const controllers = require("../controllers/github")

router.post("/verify-code", controllers.verifyGithubCode);

// --------------------------------------------------------------------------------------
module.exports = router;