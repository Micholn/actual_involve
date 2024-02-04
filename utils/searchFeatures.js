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

        this.query = this.query.find({ ...keyword})
    }
}