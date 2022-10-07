import '../styles/MainTable.css';

const MainTable = (props) => {

    const storeRows = Object.keys(props.stores).map(name => {
        const stores = props.stores;
        let counts = [];
        if (stores[name].hasOwnProperty('counts')) {
            counts = stores[name].counts;
        }
        return (
            <tr>
                <td>{stores[name].number}</td>
                <td>{name}</td>
                 <td>{counts[0] || 0}</td>
                 <td>{counts[1] || ''}</td>
                 <td>{counts[2] || ''}</td>
                 <td>{counts[3] || ''}</td>
                 <td>{counts[4] || ''}</td>
                 <td>{counts[5] || ''}</td>
                 
                    
                
                
            </tr>
        )
    })
    return (
        <table>
        <tr>
            <th>Store</th>
            <th>City</th>
            <th>Awaiting Pickup</th>
            <th>Past Due</th>
            <th>Today</th>
            <th>Future</th>
            <th>No In-Hand</th>
            <th>Update Required</th>
        </tr>
        {storeRows}
    </table>
    )
}
export default MainTable;