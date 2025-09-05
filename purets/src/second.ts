interface takephoto{
    cameramode : string,
    filter : string,
    burst: number
}
interface story {
    createstory?: (name: string) => string;
    create?(
        name: string,
        val: number
    ):void
}
class instagram implements takephoto{
    constructor(
        public cameramode: string,
        public filter: string,
        public burst : number,
        public short : string    // you can add ur self a new one
    ){

    }
}
class youtube implements takephoto , story{
    constructor(
        public cameramode: string,
        public filter: string,
        public burst : number,
        public short : string    // you can add ur self a new one
    ){
    }

    createstory(name: string ="pritam"): string {
        console.log(`${name}`);
        
        return `Story created by ${name}`;
    }
}

const pp = new youtube("potrait","blur",500,"short")