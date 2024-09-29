class searchFeatures { 
    constructor (query, queryString) { this.query
        this.query = query
        this.queryString = queryString 
    }

    search() {
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword, 
                $options: "1",
            }
        } : {};

        // console.log(keyword);

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryString }

        //fields to remove category 
        const removeFields = ["keyword", "page", "limit"];

        //console.log(queryCopy);
        removeFields.forEach(key => delete queryCopy[key]);
        //console.log(queryCopy);

        //price filter
        let queryString = JSON.stringify(queryCopy);
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        //console.log(JSON.parse(queryString));

        this.query = this.query.find(JSON.parse(queryString));
        return this; 
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryString.page) || 1;

        const skipProducts = resultsPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skipProducts);
        return this;
    }
};

module.exports = searchFeatures;