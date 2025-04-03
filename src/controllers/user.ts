import UserService from "../db/user";

class UserController{
    service: UserService; 
    constructor(service: UserService){
        this.service = service;
    }

    async getAllTweets(){

        return [1,2,3,4,5,6,7,8,9,10]; 
    }
}

export default UserController;