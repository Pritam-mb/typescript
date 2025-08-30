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
export{}