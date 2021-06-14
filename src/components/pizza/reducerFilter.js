
function reducerFilter(state, action) {
    switch (action.type) {
      case 'все':
        return 'все'
      case "с мясом":
        return "с мясом"
      case 'без мяса':
        return 'без мяса'
      case 'с грибами':
          return 'с грибами'
      case 'острая':
          return 'острая'
    //   case 'десерты':
    //       return 'десерты'
    //   case 'комбо':
    //       return 'комбо'
     
      
      
      default:
        throw new Error();
    }
  }
  
  export default reducerFilter