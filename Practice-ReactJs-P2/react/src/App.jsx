
import './App.css'
import Banner from './components/Banner'
import ControlledInput from './components/ControlledInput'
import Effect from './components/Effect'
import FatchData from './components/FatchData'
import Handler from './components/Handler'
import List from './components/List'
import State from './components/State'

function App() {

  return (
    <>
      <div>
         <h1>This is parent component</h1>
         <Banner title= 'This is banner title' description= 'This is banner description'></Banner>
         <Handler></Handler>
         <List></List>
         <ControlledInput></ControlledInput>
         <State></State>
         <br />
         <FatchData></FatchData>
         <Effect></Effect>
      </div>
    </>
  )
}

export default App
