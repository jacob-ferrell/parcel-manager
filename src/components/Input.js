
const Input = (props) => {

    const buttonText = props.currentStore ? 'Add To Main Table'
        : 'Include Entire Page To Add To Table';

    return (
        <div>
            <div className='form-group'>
                    <textarea className='form-control' rows='3'
                    onChange={props.handleChange}
                    placeholder="Paste Content Here">
                    </textarea>
                    
            </div>
            <button className="btn w-100 btn-primary" 
            disabled={!props.currentStore}
            onClick={props.handleClick}>{buttonText}</button>
        </div>
    )
}

export default Input;