const Handler = () => {
     
    const handleSubmit = (event) => {
        console.log(event);
    }

    const handleChanger = (e) => {
        console.log(e.target.value);
    }

    return(
      <div>
        <button onClick={handleSubmit}>Submit</button>

        <input type="text" name="" id="" onChange={handleChanger} />
      </div>  
    )
}

export default Handler