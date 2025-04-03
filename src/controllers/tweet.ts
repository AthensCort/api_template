import TweetService from "../db/tweet";

class TweetController{

    //agregando tye of pq marcaba error
    service: typeof TweetService; 
    constructor(service: typeof TweetService){
        this.service = service;
    }

    async getAllTweets(){

        return [1,2,3,4,5,6,7,8,9,10]; 
    }
}

export default TweetController;