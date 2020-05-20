import React from 'react'
import Router from './router'
import HeaderArea from './components/layout/Header'
import FooterArea from './components/layout/Footer'

const App = () =>{
  return (
      <div>
        <HeaderArea/>
          <Router/>
        <FooterArea/>
      </div>
  )
}
export default App