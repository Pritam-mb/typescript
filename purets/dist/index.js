"use strict";
console.log("heelo world");
console.log("lopo");
const val = [];
// class user{
//     name : string
//     email: string
//     city : string = ""
//     constructor(name: string,  email: string){
//         this.name=name;
//         this.email= email;
//     }
// }
// const pritam= new user ( "pritam","paglu@gmail.com")
// pritam.city="kolkata"
// class user{
//    public name : string  //we can use public from anywhere
//     private email: string // only inside the class
//     #city : string = "" // javascript  format
//     constructor(name: string,  email: string){
//         this.name=name;
//         this.email= email;
//     }
// }
class user {
    name;
    email;
    //    private coursecontent = 1
    coursecontent = 1; // protected means u can use private in any class which inherite this class
    city = "jaipur";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get privataccess() {
        return `apple${this.email}`; //accessing the private value
    }
    get course() {
        return this.coursecontent;
    }
    set course(e) {
        if (this.coursecontent <= 1)
            throw new Error("your accesing time is over");
        else
            this.coursecontent = e + 1;
    }
}
class subuser extends user {
    changecoursecount() {
        // isfamily: boolean = true
        this.coursecontent = 4;
    }
}
const pritam = new user("pritam", "paglu@gmail.com");
// pritam.city="kolkata" // cannot access bec it is private
//# sourceMappingURL=index.js.map