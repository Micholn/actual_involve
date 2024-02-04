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
        } : {}
    }
}