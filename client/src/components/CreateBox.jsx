import React, { useState }  from 'react'

const CreateBox = (props) => {
    const [ box, setBox ] = useState("")
    const [ allBoxes, setAllBoxes ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted:" , box)
        let boxObj = {box}
        setAllBoxes([...allBoxes, boxObj])
    }
    const handleChange = (e) => {
        setBox(
        <div style={{
            backgroundColor: e.target.value,
            height: "200px",
            width: "200px"
        }}>
        </div>
        )}
    return (
    <div>
        <form className='d-flex gap-3 p-2' onSubmit={ handleSubmit }>
            <label htmlFor="color">Color</label>
            <input type="text" className='form-control w-25' onChange={ handleChange } name={box}/>
            <input type="submit" className='btn btn-outline-dark' />
        </form>
        <div className="all-boxes d-flex flex-wrap w-50 gap-3 m-3">
            {
                allBoxes.map((box, index) => {
                    return(
                        <div key={index}>
                            {box.box}
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default CreateBox
