
const DuplicatesTable = (props) => {

    const duplicates = props.duplicates.map(dup => {
        return (
            <tr key={dup[0]}>
                <td>{dup[0]}</td>
                <td>{dup[1]}</td>
            </tr>
        )
    })

    return (
        <table className="table table-sm table-striped 
        table-bordered duplicates">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th># Packages</th>
                </tr>
            </thead>
            <tbody>
                {duplicates}
            </tbody>
        </table>
    )
}

export default DuplicatesTable;