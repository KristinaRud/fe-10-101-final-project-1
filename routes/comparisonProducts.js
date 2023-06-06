const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    createComparisonProducts,
    deleteComparisonProducts,
    deleteProductFromComparisonProducts,
    addProductToComparisonProducts,
    updateComparisonProducts,
    getComparisonProducts
} = require("../controllers/comparisonProducts");

// @route   POST /comparison-products
// @desc    Create comparisonProducts
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt", {session: false}),
    createComparisonProducts
);

// @route   PUT /comparison-products
// @desc    Update comparisonProducts when adding / deleting products in comparisonProducts
// @access  Private
router.put(
    "/",
    passport.authenticate("jwt", {session: false}),
    updateComparisonProducts
);

// @route   PUT /comparison-products/:productId
// @desc    Add one product to comparisonProducts
// @access  Private
router.put(
    "/:productId",
    passport.authenticate("jwt", {session: false}),
    addProductToComparisonProducts
);

// @route   DELETE /comparison-products
// @desc    Delete comparisonProducts
// @access  Private
router.delete(
    "/",
    passport.authenticate("jwt", {session: false}),
    deleteComparisonProducts
);

// @route   DELETE /comparison-products/:productId
// @desc    Delete one product from comparisonProducts
// @access  Private
router.delete(
    "/:productId",
    passport.authenticate("jwt", {session: false}),
    deleteProductFromComparisonProducts
);

// @route   GET /comparison-products
// @desc    Get comparisonProducts for customer
// @access  Private
router.get("/", passport.authenticate("jwt", {session: false}), getComparisonProducts);

module.exports = router;
