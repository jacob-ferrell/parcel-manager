
const CopyTable = props => {
    const stores = props.stores;
    if (!props.tableIsFilled()) return;
    const rows = Object.keys(stores)
        .sort((a, b) => stores[a].i - stores[b].i)
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