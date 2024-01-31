class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            } : {};

            this.query = this.query.find({ ...keyword });
            return this;
    }

    filter() {
        const queryCopy = {...this.queryStr };

        // Removing fileds from the query
        const removeFields = ["keyword", "limit"]
    }
}