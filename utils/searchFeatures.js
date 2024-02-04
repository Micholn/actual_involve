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

        
    }
}