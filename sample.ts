function searchproducts<Type>(user:Type[] ):Type|undefined{
    let index=3
    return user[index]

}
searchproducts(["pritam","kolu","sonu"])

const serachuser =<T>(Products: Array<T>):T|undefined=>{
    return Products[2]
}
console.log(
serachuser([1,2,3]));

interface database{
    name: String,
    email: String,
    no : Number
}
// function manush<T, U extends database>(valone : T , valtwo : U):object{
//     return{
//         valone,
//         email: valtwo.email
//     }
    
// }
// console.log(manush(3,{name:"pritam", email: "pp@gmail.com",no:5})
// );

function detectype2(val: number | string){
    if(typeof val === "string"){
        console.log(val.toUpperCase());
        return
    }
    return val + 3;
}
  console.log(    detectype2("pritam"));
// serachuser([1,2,3])

function printall1(str : string | string[]| null){
    if(str){
        if(typeof str === "object"){
            for(const s of str){
                console.log(s);
                
            }
        }else if(typeof  str === "string"){
            console.log(str);
            
        }
    }
}

console.log(printall1("pritam")
);
