
const FillButtons = props => {

    const store = props.name;

    return (
        <div>
            <button className='btn btn-sm btn-info' data-store={store}
            onClick={props.fillRow}
            data-fill='0'><i className='fa-solid fa-0'></i>
            
            </button>
            <button className='btn btn-sm btn-danger' data-store={store}
            data-fill='' onClick={props.fillRow}><i className=''></i></button>
        </div>
    )
}

export default FillButtons;