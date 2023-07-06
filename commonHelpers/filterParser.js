const excludedParams = ["perPage", "startPage", "minPrice", "maxPrice", "sort", "startDate", "endDate"];

module.exports = function filterParser(filtersQueryString) {
    const mongooseQuery = {};

    if (filtersQueryString.minPrice || filtersQueryString.maxPrice) {
        mongooseQuery.currentPrice = {
            $gte: Number(filtersQueryString.minPrice),
            $lte: Number(filtersQueryString.maxPrice)
        };
    }

    if (filtersQueryString.startDate || filtersQueryString.endDate) {
        const startDate = new Date(filtersQueryString.startDate);
        const endDate = new Date(filtersQueryString.endDate);
        startDate.setUTCHours(0, 0, 0, 0);
        endDate.setUTCHours(23, 59, 59, 999);
        mongooseQuery.date = {
            $gte: startDate,
            $lte: endDate
        };
    }

    return Object.keys(filtersQueryString).reduce(
        (mongooseQuery, filterParam) => {
            if (filtersQueryString[filterParam].includes(",")) {
                mongooseQuery[filterParam] = {
                    $in: filtersQueryString[filterParam]
                        .split(",")
                        .map(item => decodeURI(item))
                };
            } else if (!excludedParams.includes(filterParam)) {
                mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam]);
            } else if (filtersQueryString.categories) {
                if (filtersQueryString.categories.includes("-")) {
                    mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam].replace(/-/g, ' '))
                }
            }

            return mongooseQuery;
        },
        mongooseQuery
    );
};
