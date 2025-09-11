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

function detectype(val: number | string){
    if(typeof val === "string"){
        
        console.log(val.toUpperCase());
        return
    }
    return val + 3;
}
detectype(5)

function printall(str : string | string[]| null){
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

console.log(printall("pritam"));

//instance
function logvalue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
        
    }
    else{
        console.log(x.toUpperCase());
        
    }
}

logvalue(new Date())



type Fish ={
    swim: ()=> void

};
type Bird= {
    fly: ()=> void
};

function isfish(pet: Fish | Bird):pet is Fish{
    // console.log("fish");
    return (pet as Fish).swim !== undefined
    
}

function getfood(pet: Fish | Bird){
        if (isfish(pet)){
            pet
            return "fish food"
        }else{
            pet 
            return "bird food"
        }
}


// interface rectangle{
//     kind : "rectangle",
//     length : number,
//     width: number
// }

// interface circle{
//     kind : "circle",
//     length : number,
//     // width: number
// }

// function gettrueshape(shape : rectangle | circle){
//     if (shape.kind=== "circle"){
//         return Math.PI *  shape.length **2
//     }
//     else{
//         return shape.length * shape.width
//     }
// }

//  console.log(

//      gettrueshape({
//        kind : "circle",
//        length: 5
//    })

//  );
// console.log(

//     gettrueshape({
//        kind : "rectangle",
//        length: 5,
//        width: 4
//     })
// );
