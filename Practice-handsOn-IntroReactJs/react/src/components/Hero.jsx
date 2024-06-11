import '../styles/components/Hero.css'

const Hero = (props) => {
     //console.log(props);
    
     const item1 = {
        color: "green",
        fontSize: "3rem"
    }

    const handleClick = () => {
        alert('Button Clicked');
    }

    return (
        <div>
            {/* <h1 style={{color: "blue", fontSize: "3rem"}}>{props.navbar}</h1>
            <p style={item1}>{props.items}</p>
            <h2 className='hero-text'>This is another heading</h2>
            <button onClick={handleClick}>Click Me</button> */}
        </div>
          
    )
}

export default Hero