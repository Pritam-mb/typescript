interface user {
    readonly dbid : number,
    email: string,
    userid: number,
    emailid?: number
    // stratrail ?:()  => string
    stratrail(): string,
    getcoupun?( name: string, val: number):string
}
interface user {  // merging interface
    token: string
}

interface admin extends user { // interface inheritance
    role: "admin"|"user"| "anyone"  // only these 3 values are allowed
}
const prathamesh: admin ={
    dbid: 1234,
    role: "user",
    email: "pop@gmail.com",
    userid: 1,
    emailid : 5847,
    token: "abcd",
    stratrail : ()=>{
        return "kalua"
    },
    getcoupun :(name: " pritam", val :5)=>{
        return `${name}`
    }
}

console.log(prathamesh.userid);

// console.log(prathamesh.dbid);


