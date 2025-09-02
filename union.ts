// type user={
//     name : string,
//     age: number
// }
// type admin ={
//     username: string,
//     caste: string,
// }

// let pritam : user | admin ={name: "tukun" ,age:5, caste : "genaral"} // union type
// pritam ={username: "pk", caste: "genaral", age: 16}

// console.log(pritam);

// function course(id : string | number){
//         if(typeof(id)=== "string"){
//         // console.log(`id is ${id}`);
//             console.log(id.toUpperCase());
            
//         }else{
//             console.log(id+2);
            
//         }
        
// }
// course(5)
// course("bmw")

let arr : (string | number| boolean)[] = [1,2,3,"pritam","tukun"]
arr.push("lolly")
console.log(arr);

let arr2 : Array<string | number | boolean> = [1,2,3,"pritam","tukun", true]

let seatallot : "sc" |"st"|"obc" 
seatallot="st" // only these 3 values are allowed

let tuple : [string ,number , boolean] 
tuple=["pritam",19,true]

type user=[string, number]
let newuser : user =["tukun",5]
// newuser.push()