import { UserDto } from "dist/core/lib/user/userDto";
const key = "user";

class UserStorage{
    private userDTO: UserDto|any ={};
    addUser(userDTO: UserDto){
        this.userDTO = userDTO;
        return new Promise((resolve, reject)=>{
            resolve('');
        })
    }
    //TODO generic TypeScript
    getUser():Promise<UserDto | any>{
        return new Promise((resolve, reject)=>{
            //TODO meter token
            resolve(this.userDTO);
        })
    }
}
export default new UserStorage();