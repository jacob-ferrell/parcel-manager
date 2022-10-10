
const CopyTable = props => {
    const stores = props.stores;
    if (!props.tableIsFilled()) return;
    const rows = Object.keys(stores)
        .map(name => stores[name].counts.slice(1))
        .map(row => {
            const data = row.map(d => {
                return (
                    <td>{d}</td>
                )
            })
            return (
                <tr>{data}</tr>
            )
        })
    return (
        <table id='copy-table'>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default CopyTable;