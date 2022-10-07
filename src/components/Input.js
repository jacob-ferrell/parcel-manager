
const Input = (props) => {

    return (
        <div>
            <input onChange={props.handleChange}
            placeholder="Paste Content Here"></input>
            <button>Count</button>
        </div>
    )
}

export default Input;