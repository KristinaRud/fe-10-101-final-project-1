const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
        id: {
            type: Number
        },
        uuid: {
            type: String
        },
        created_at: {
            type: Date
        },
        updated_at: {
            type: Date
        },
        meta: {
            osm_id: {
                type: Number
            },
            google_maps_place_id: {
                type: String
            },
        },
        type: {
            type: String
        },
        name: {
            en: {
                type: String
            },
            ru: {
                type: String
            },
            uk: {
                type: String
            },
        },
        public_name: {
            en: {
                type: String
            },
            ru: {
                type: String
            },
            uk: {
                type: String
            },
        },
        post_code: {
            type: Array
        },
        katottg: {
            type: String
        },
        koatuu: {
            type: String
        },
        lng: {
            type: Number
        },
        lat: {
            type: Number
        },
        parent_id: {
            type: Number
        }
    }
);

module.exports = Link = mongoose.model("cities", CitySchema);
