
import './App.css'
import Banner from './components/Banner'
import ControlledInput from './components/ControlledInput'
import Effect from './components/Effect'
import FatchData from './components/FatchData'
import Handler from './components/Handler'
import Hero from './components/Hero'
import List from './components/List'
import State from './components/State'



function App() {
  

  return (
    <>
       <div>
        <h1>This is Heading</h1>
        <Banner title = "This is my first title1" decription = "This is my description1"></Banner>
        <Banner title = "This is my first title2" decription = "This is my description2"></Banner>
       </div>

       <div>
        <h1>heading</h1>
       <Hero navbar= "This is navbar" items= "This is another items"></Hero>
       </div>
       
       <Handler></Handler>
         
         <br/>
         <br/>
       
        <State></State>
        <br />
        <List></List>
        <br />
        <ControlledInput></ControlledInput>
        <Effect></Effect>
        <br />
        <FatchData></FatchData>
        
       
      
    </>
  )
}

export default App
