function course():{name: string, price : number}{
    return {name: "reactjs", price: 999}
}
console.log(course());

// destructuring in function parameter

function user( {name, age}: {name: string, age: number}) {
    console.log(name, age);
    
    // return { name: userObj.name, age: userObj.age };
}
let newuser = { name: "pritam", age: 22, email: "pp@gmail.com" };
user(newuser);

// mAking own type
type User ={
    name: string;
    age: number;
    isloged: true;
}

function profile(user: User):User{
    return {name:user.name, age: user.age, isloged: true}
}

console.log(profile({name :"pritam", age: 19, isloged: true}))

type customer ={
    readonly _id : string,
    name: string,
    email: string,
    isactive: boolean
    creditcard ?: number // optional
}

let mycustomer: customer={
    _id: "1245",
    name: "gp morgan",
    email: "kolkata@email.com",
    isactive: false
}

// mycustomer._id = "5478"  readonly
mycustomer.email = "lola@gmail.com"
console.log(mycustomer);


//inheritence

type cardate ={
    cardate: string
}
type carname ={
    carname: string
}
type cardetails = cardate & carname &{
    price: number,
    carno : number
}

let mycar: cardetails={
    cardate: "2020",
    carname: "bmw",
    price: 999999,
    carno: 1245
}
console.log(mycar);

export{}