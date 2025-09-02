type user={
    name : string,
    age: number
}
type admin ={
    username: string,
    caste: string,
}

let pritam : user | admin ={name: "tukun" ,age:5, caste : "genaral"} // union type
pritam ={username: "pk", caste: "genaral", age: 16}

console.log(pritam);

function course(id : string | number){
    
}