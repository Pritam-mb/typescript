

function add(num: number):number{
    return num+1;
}
console.log(add(5));

function name(val:string){
    return val.toUpperCase();
}
console.log(name("pritamxculer"));


let login =(name:string ,email : string, islog: boolean= false )=>{

}
login("pritam","chillculer@gmail.com")

let sum =(num:number):string /*: string*/=>{
         // input       output type
         console.log("hello");
         return "pk"
         
   // if(num>5) return 9
    //else return "i i e"
}
sum(6)
console.log(sum(7));

const marvel =["iron","captain","thor"]
marvel.map((hero): void => //void means no return type
    console.log(hero)
    // ${hero}
)

function error(val:string = 'kola'):never{
    throw new Error(val);
}
// error('')

export{}