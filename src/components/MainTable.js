import '../styles/MainTable.css';
import FillButtons from './FillButtons';

const MainTable = (props) => {

    const sortBy = props.sortBy;

    const storeRows = props.order.map(name => {
        const stores = props.stores;
        let counts = stores[name].counts || Array(6).fill('');

        return (
                <tr key={name}>
                    <td className='store'>{stores[name].number}</td>
                    <td className='city'>{name}
                    <FillButtons name={name} fillRow={props.fillRow}/>
                    </td>
                    <td>{counts[0]}</td>
                    <td>{counts[1]}</td>
                    <td>{counts[2]}</td>
                    <td>{counts[3]}</td>
                    <td>{counts[4]}</td>
                    <td>{counts[5]}</td> 
                </tr>
        )
    })
    return (
        <table className="table table-dark table-sm table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th onClick={sortBy} data-i=''className='store th-hover'>Store</th>
                    <th className='city'>City</th>
                    <th onClick={sortBy} data-i={0}>Awaiting Pickup</th>
                    <th onClick={sortBy} data-i={1}>Past Due</th>
                    <th onClick={sortBy} data-i={2}>Today</th>
                    <th onClick={sortBy} data-i={3}>Future</th>
                    <th onClick={sortBy} data-i={4}>No Date</th>
                    <th onClick={sortBy} data-i={5}>Update Required</th>
                </tr>
            </thead>
            <tbody>{storeRows}</tbody>
        
    </table>
    )
}
export default MainTable;