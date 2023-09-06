import './Table.css';

export default function Table(props) {
    const {getList, onDelete, onEdit} = props
    return(
        <div className="table-wrapper">
            <div className="heading">
            <h1>User List</h1>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className='expand'>Email</th>
                        <th className='expand1'>Phone No.</th>
                        <th className='expand2'>Edit</th>
                        <th className='expand3'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {getList.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><button className='edit-btn' onClick={()=>onEdit(index)}>Edit</button></td>
                                <td><button className='delete-btn' onClick={()=>onDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
