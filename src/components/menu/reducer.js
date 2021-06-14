

function reducer(state, action) {
  switch (action.type) {
    case 'пицца':
      return 'пицца'
    case "горячее":
      return "горячее"
    case 'закуски':
      return 'закуски'
    case 'напитки':
        return 'напитки'
    case 'соусы':
        return 'соусы'
    case 'десерты':
        return 'десерты'
    case 'комбо':
        return 'комбо'
   
    
    
    default:
      throw new Error();
  }
}

export default reducer