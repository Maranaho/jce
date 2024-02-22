import React from "react"

let initialNFLXState = {
  likelyhood:1,
  linkedinUrl:"https://www.linkedin.com/in/maranaho-n-guessan-b7a85511b/",
  watching: -1
}

const NFLXContext = React.createContext()

function ttReducer(state, action) {
  switch (action.type) {


    case 'SET_WATCHING': {
      let SET_WATCHING = {...state}
      SET_WATCHING.watching = action.payload
      return SET_WATCHING
    }

    case 'SET_LIKELYHOOD': {
      let SET_LIKELYHOOD = {...state}
      SET_LIKELYHOOD.likelyhood = action.payload
      return SET_LIKELYHOOD
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