abstract class takephoto{
    constructor(
         public cameramode: string,
        public filter: string,
        public burst : number,
    ){
    }
   abstract getsepia():void
   getime():number{
    return 8
   }
}
class insta extends takephoto{
    constructor(
         public cameramode: string,
        public filter: string,
        public burst : number,
    ){ super(
        cameramode,
        filter,
        burst
    )
    }
    getsepia(): void {
        console.log("lllp");
        
    }

}
const ppp= new insta("potrait","blur",6)