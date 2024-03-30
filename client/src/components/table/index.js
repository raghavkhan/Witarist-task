import React from "react";

const Table = ({ headers, data, onDelete, onUpdate }) => {
  return (
    <table className='custom-table'>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th style={{textAlign:"start"}} key={index}>{header}</th>
          ))}
          <th style={{textAlign:"start"}}>Action</th>
          <th style={{textAlign:"start"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((rowData) => (
            <tr key={rowData?.id}>
              <td>{rowData?.taskName}</td>
              <td>{rowData?.priority}</td>
              {/* <td>{rowData?.city}</td> */}
              <td>
                <button onClick={() => onDelete(rowData?.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => onUpdate(rowData?.id)}>Update</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
