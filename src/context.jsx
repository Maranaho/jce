import React from "react"

let initialNFLXState = {

}

const NFLXContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {


    case 'YO': {
      let YO = {...state}
      YO.pendingCopy = action.payload
      return YO
    }


    default: throw new Error("Unexpected action")
  }
}

const NFLXStateProvider = ({ children })=> {
  const [state, dispatch] = React.useReducer(
    ttReducer,
    initialNFLXState
  )
  const value = { state, dispatch }
  return (
    <NFLXContext.Provider value={value}>{children}</NFLXContext.Provider>
  )
}

const useNFLXState = ()=> {
  const context = React.useContext(NFLXContext)
  if (context === undefined) {
    throw new Error(
      "useNFLXState must be used within a NFLXStateProvider"
    )
  }
  return context
}

export { NFLXStateProvider, useNFLXState }