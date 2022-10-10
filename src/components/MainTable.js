import '../styles/MainTable.css';
import { useEffect } from 'react';
import FillButtons from './FillButtons';

const MainTable = (props) => {

    const storeRows = Object.keys(props.stores).map(name => {
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
                    <th className='store'>Store</th>
                    <th className='city'>City</th>
                    <th>Awaiting Pickup</th>
                    <th>Past Due</th>
                    <th>Today</th>
                    <th>Future</th>
                    <th>No In-Hand</th>
                    <th>Update Required</th>
                </tr>
            </thead>
            <tbody>{storeRows}</tbody>
        
    </table>
    )
}
export default MainTable;