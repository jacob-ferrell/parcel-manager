
const Input = (props) => {

    return (
        <div>
            <div className='form-group'>
                    <textarea className='form-control' rows='3'
                    onChange={props.handleChange}
                    placeholder="Paste Content Here">
                    </textarea>
                    
            </div>
            <button className="btn w-100 btn-primary" onClick={props.handleClick}>Add To Main Table</button>
        </div>
    )
}

export default Input;