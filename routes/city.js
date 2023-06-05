const express = require("express");
const router = express.Router();

const {
    getCities,
    getAllStates,
    getAllDistrictsInState,
    getAllCitiesInDistrict
} = require("../controllers/city");

router.get("/", getCities);
router.get("/states", getAllStates);
router.get("/districts/:id", getAllDistrictsInState);
router.get("/cities/:id", getAllCitiesInDistrict);

module.exports = router;