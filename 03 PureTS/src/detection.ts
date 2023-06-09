function detectType(val: number| string| ){
  if(typeof val=== 'string'){
     return val.toLowerCase()
  }
  return val+ 3
}


function proviteId(id: string | null){
  if(!id){
    console.log('please provide Id');
    return
  }
id.toLowerCase()
}

interface User{
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User| Admin){
  if ( 'isAdmin' in account){
    return account.isAdmin;
  }
}


function logValue( x:Date | string){
  if (x instanceof Date){
    console.log(x.toUTCString());

    
  }else{
    console.log(x.toUpperCase());
}
}

type Fish = {swim:() => void};
type Bird ={ fly: () => void};


function isFish (pet: Fish|Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
  if (isFish(pet)) {
    pet 
    return 'Fish food'
  } else{
    pet
    return 'Birds food'
  }
}


interface Circle{
  kind: 'circle',
  radious: number
}
interface Square{
  kind: 'square',
  side: number
}

interface Rectangle{
  kind: 'recteangle',
  length: number,
  width: number
}
type Shape = Circle | Square | Rectangle

function  getTrueShape( shape: Shape){
  if(shape.kind === 'circle'){
    return Math.PI* shape.radious**2
  } 
  // return shape.side * shape.side;
  
}

function getArea( shape: Shape){
  switch(shape.kind){
    case 'circle':
      return Math.PI* shape.radious**2
      case 'square':
        return shape.side * shape.side

        case 'recteangle':
          return shape.length* shape.width
        default:
        const _defaultforshape: never = shape
        return _defaultforshape
  }
}
