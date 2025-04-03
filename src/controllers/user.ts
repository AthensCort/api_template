


import UserService from "../db/user";

class UserController{
    service: typeof UserService; 
    constructor(service: typeof UserService){
        this.service = service;
    }

    async getAllUsers() {
        const users = this.service.getEverythingUsers(); 
        return users.filter(user => user % 2 === 0); // Filtrar solo los pares
    }
}

export default UserController;