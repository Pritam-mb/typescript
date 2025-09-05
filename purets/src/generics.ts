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
