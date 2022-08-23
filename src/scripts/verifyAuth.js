import { Api } from "../api/api";
const verifyAuth = ()=>{
    if(!Api.keyJwt){
        console.log('false');
        return true;
    }else{
        return true;
    }
};

export default verifyAuth;