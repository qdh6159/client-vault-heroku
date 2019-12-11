import React from 'react';
import { Table } from 'reactstrap';
const StockTable = (props) => {
  return (
    <div class="tableDiv">
    <Table size="sm" dark hover >
        
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Company</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">AAPL</th>
          <td>Apple</td>
          <td>$241.58</td>
          <td>200</td>
        </tr>
        <tr>
          <th scope="row">YUM</th>
          <td>YUM! Brands</td>
          <td>$89.50</td>
          <td>100</td>
        </tr>
        <tr>
          <th scope="row">LMD</th>
          <td>Lockheed Martin</td>
          <td>$376.74</td>
          <td>230</td>
        </tr>
        <tr>
          <th scope="row">GOOG</th>
          <td>Alphebet Inc.</td>
          <td>$1,259.46</td>
          <td>200</td>
        </tr>
        <tr>
          <th scope="row">TSLA</th>
          <td>Tesla Inc.</td>
          <td>$312.50</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">NFLX</th>
          <td>Netflix</td>
          <td>$291.30</td>
          <td>300</td>
        </tr>
      </tbody>
      
    </Table>
    </div>
  );
}

export default StockTable;