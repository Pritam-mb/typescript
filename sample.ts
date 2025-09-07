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
function manush<T, U extends database>(valone : T , valtwo : U):object{
    return{
        valone,
        email: valtwo.email
    }
    
}
console.log(manush(3,{name:"pritam", email: "pp@gmail.com",no:5})
);


// serachuser([1,2,3])