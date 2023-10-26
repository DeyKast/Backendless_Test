import React from 'react';

const DummyChart = ({ data }) => {
  const { order } = data;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Dummy</th>
            <th>Chart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orders</td>
            <td>{order}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DummyChart;
