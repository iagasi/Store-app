import { makeAutoObservable } from "mobx"

 export default   class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._allUsers=[{name:" mock gev"},{name:" mock alex"}]
        this._isAdmin=false

        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setAllUsers(users){
      
        this._allUsers=users
    }

    get isAdmin(){
return this._isAdmin
    }
    setIsAdmin(status){
this._isAdmin=status
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        
        return this._user
    }

    get allUsers(){
        return this._allUsers
    }
}




