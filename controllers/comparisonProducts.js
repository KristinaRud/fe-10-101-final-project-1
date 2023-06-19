const ComparisonProducts = require('../models/СomparisonProducts');
const Product = require('../models/Product');
const queryCreator = require('../commonHelpers/queryCreator');
const _ = require('lodash');

exports.createComparisonProducts = (req, res, next) => {
    ComparisonProducts.findOne({customerId: req.user.id}).then((comparisonProducts) => {
        if (comparisonProducts) {
            return res
                .status(400)
                .json({message: `Comparison products for this customer is already exists`});
        } else {
            const comparisonProductsData = _.cloneDeep(req.body);
            comparisonProductsData.customerId = req.user.id;

            const newComparisonProducts = new ComparisonProducts(queryCreator(comparisonProductsData));

            newComparisonProducts.populate('products').populate('customerId').execPopulate();

            newComparisonProducts
                .save()
                .then((comparisonProducts) => res.json(comparisonProducts))
                .catch((err) =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `,
                    })
                );
        }
    });
};

exports.updateComparisonProducts = (req, res, next) => {
    ComparisonProducts.findOne({customerId: req.user.id})
        .then((comparisonProducts) => {
            if (!comparisonProducts) {
                const comparisonProductsData = _.cloneDeep(req.body);
                comparisonProductsData.customerId = req.user.id;

                const newComparisonProducts = new ComparisonProducts(queryCreator(comparisonProductsData));

                newComparisonProducts.populate('products').populate('customerId').execPopulate();

                newComparisonProducts
                    .save()
                    .then((comparisonProducts) => res.json(comparisonProducts))
                    .catch((err) =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `,
                        })
                    );
            } else {
                const comparisonProductsData = _.cloneDeep(req.body);
                const updatedComparisonProducts = queryCreator(comparisonProductsData);

                ComparisonProducts.findOneAndUpdate(
                    {customerId: req.user.id},
                    {$set: updatedComparisonProducts},
                    {new: true}
                )
                    .populate('products')
                    .populate('customerId')
                    .then((comparisonProducts) => res.json(comparisonProducts))
                    .catch((err) =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `,
                        })
                    );
            }
        })
        .catch((err) =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `,
            })
        );
};

exports.addProductToComparisonProducts = async (req, res, next) => {
    let productToAdd;

    try {
        productToAdd = await Product.findOne({_id: req.params.productId});
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `,
        });
    }

    if (!productToAdd) {
        res.status(400).json({
            message: `Product with _id (ObjectId) "${req.params.productId}" does not exist`,
        });
    } else {
        ComparisonProducts.findOne({customerId: req.user.id})
            .then((comparisonProducts) => {
                if (!comparisonProducts) {
                    const comparisonProductsData = {};
                    comparisonProductsData.customerId = req.user.id;
                    comparisonProductsData.products = [].concat(req.params.productId);
                    const newComparisonProducts = new ComparisonProducts(queryCreator(comparisonProductsData));

                    newComparisonProducts
                        .populate('products')
                        .populate('customerId')
                        .execPopulate();

                    newComparisonProducts
                        .save()
                        .then((comparisonProducts) => res.json(comparisonProducts))
                        .catch((err) =>
                            res.status(400).json({
                                message: `Error happened on server: "${err}" `,
                            })
                        );
                } else {
                    const comparisonProductsData = {};
                    comparisonProductsData.products = comparisonProducts.products.concat(
                        req.params.productId
                    );
                    const updatedComparisonProducts = queryCreator(comparisonProductsData);

                    ComparisonProducts.findOneAndUpdate(
                        {customerId: req.user.id},
                        {$set: updatedComparisonProducts},
                        {new: true}
                    )
                        .populate('products')
                        .populate('customerId')
                        .then((comparisonProducts) => res.json(comparisonProducts))
                        .catch((err) =>
                            res.status(400).json({
                                message: `Error happened on server: "${err}" `,
                            })
                        );
                }
            })
            .catch((err) =>
                res.status(400).json({
                    message: `Error happened on server: "${err}" `,
                })
            );
    }
};

exports.deleteProductFromComparisonProducts = async (req, res, next) => {
    ComparisonProducts.findOne({customerId: req.user.id})
        .then((comparisonProducts) => {
            if (!comparisonProducts) {
                res.status(400).json({message: `comparison products does not exist`});
            } else {
                if (!comparisonProducts.products.includes(req.params.productId)) {
                    res.status(400).json({
                        message: `Product with _id "${req.params.productId}" is absent in comparison products.`,
                    });

                    return;
                }

                const comparisonProductsData = {};
                comparisonProductsData.products = comparisonProducts.products.filter(
                    (elem) => elem.toString() !== req.params.productId
                );

                const updatedComparisonProducts = queryCreator(comparisonProductsData);

                if (comparisonProductsData.products.length === 0) {
                    return ComparisonProducts.deleteOne({customerId: req.user.id})
                        .then((deletedCount) =>
                            res.status(200).json({
                                products: [],
                            })
                        )
                        .catch((err) =>
                            res.status(400).json({
                                message: `Error happened on server: "${err}" `,
                            })
                        );
                }

                ComparisonProducts.findOneAndUpdate(
                    {customerId: req.user.id},
                    {$set: updatedComparisonProducts},
                    {new: true}
                )
                    .populate('products')
                    .populate('customerId')
                    .then((comparisonProducts) => res.json(comparisonProducts))
                    .catch((err) =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `,
                        })
                    );
            }
        })
        .catch((err) =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `,
            })
        );
};

exports.deleteComparisonProducts = (req, res, next) => {
    ComparisonProducts.findOne({customerId: req.user.id}).then(async (comparisonProducts) => {
        if (!comparisonProducts) {
            return res
                .status(400)
                .json({message: `Comparison products for this customer is not found.`});
        } else {
            const comparisonProductsToDelete = await ComparisonProducts.findOne({
                customerId: req.user.id,
            });

            ComparisonProducts.deleteOne({customerId: req.user.id})
                .then((deletedCount) =>
                    res.status(200).json({
                        message: `Comparison Products witn id "${comparisonProductsToDelete._id}" is successfully deletes from DB `,
                    })
                )
                .catch((err) =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `,
                    })
                );
        }
    });
};

exports.getComparisonProducts = (req, res, next) => {
    ComparisonProducts.findOne({customerId: req.user.id})
        .populate('products')
        .populate('customerId')
        .then((comparisonProducts) => {
            const productsByCategory = {};
            comparisonProducts.products.forEach((product) => {
                const {categories} = product;
                if (!productsByCategory[categories]) {
                    productsByCategory[categories] = [];
                }
                productsByCategory[categories].push(product);
            });
            const comparisonProductsData = {
                ...comparisonProducts._doc,
                products: productsByCategory,
                count: comparisonProducts.products.length,
            };
            res.json(comparisonProductsData)
        })
        .catch((err) =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `,
            })
        );
};
