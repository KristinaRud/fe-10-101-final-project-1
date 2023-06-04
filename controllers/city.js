const City = require('../models/City');

exports.getCities = (req, res, next) => {
    City.find()
        .then(links => res.json(links))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.getAllStates = async (req, res, next) => {
    let states = await City.find({type: "STATE"})
    res.send(states)
}

exports.getAllDistrictsInState = async (req, res, next) => {
    let districts = await City.find({type: "DISTRICT", parent_id: req.params.id})
    res.send(districts)
}

exports.getAllCitiesInDistrict = async (req, res, next) => {
    try {
        let communities = await City.find({type: "COMMUNITY", parent_id: req.params.id});
        let cities = [];
        for (let community of communities) {
            let communityCities = await City.find({parent_id: community.id});
            cities = cities.concat(communityCities);
        }

        res.send(cities);
    } catch (error) {
        next(error);
    }
}