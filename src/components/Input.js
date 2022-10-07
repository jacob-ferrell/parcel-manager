
const Input = (props) => {

    return (
        <div>
            <input onChange={props.handleChange}
            placeholder="Paste Content Here"></input>
            <button onClick={props.handleClick}>Count</button>
            <div>{props.counts}</div>
        </div>
    )
}

export default Input;