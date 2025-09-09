const arrey :Array<number> =[]
const names: Array<string>=[]

function identify(val: boolean | number): boolean| number{
    return val
}

function identifytwo(val:any):any{
    return val
}
function identifythree<Type>(val: Type):Type{
    return val
}

identifythree(3)

interface bootle {
    type: string
    size: string
    capacity: number
}
function identifyfour<bootle>(user : bootle):bootle{
  return user
}

identifyfour<bootle>({
    type: "pritam",
    size: "big",
    capacity: 50
})

// function searchproducts<Type>(user:Type[] ):Type|undefined{
//     let index=3
//     return user[index]

// }
// searchproducts(["pritam","kolu","sonu"])

// const serachuser =<T>(Products: Array<T>):T|undefined=>{
//     return Products[2]
// }

// serachuser([1,2,3])

interface database{
    name: String,
    email: String,
    no : Number
}
function manush<T, U extends database>(valone : T , valtwo : U):object{
    return{
        valone,
        valtwo
    }
    
}

manush(3,{name:"pritam", email: "pp@gmail.com",no:5})

interface quiz{name: string,
    author : string,
    subject: string

}
class sellable<T>{
    public cart:T[] =[];
    addtocart(product: T){
        this.cart.push(product)
    }
}

