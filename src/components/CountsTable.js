
const CountsTable = (props) => {
    const counts = props.counts

    return (
        <table className="table table-sm table-striped counts">
            <tbody>
                <tr>
                    <th>Past Due</th>
                    <td>{counts[1]}</td>
                </tr>
                <tr>
                    <th>Today</th>
                    <td>{counts[2]}</td>
                </tr>
                <tr>
                    <th>Future</th>
                    <td>{counts[3]}</td>
                </tr>
                <tr>
                    <th>No In-Hand</th>
                    <td>{counts[4]}</td>
                </tr>
                <tr>
                    <th>Update Required</th>
                    <td>{counts[5]}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default CountsTable;