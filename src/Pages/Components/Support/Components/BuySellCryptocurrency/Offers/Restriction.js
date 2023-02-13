import React from 'react'
import { Table } from 'react-bootstrap'

const Restriction = () => {
  return (
    <div>
      <p>
        Some payment methods are only available in certain countries in the
        Paxful marketplace. The current restrictions can be found below:
      </p>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Payment Method</th>
              <th>Restricted Countries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash App</td>
              <td>Cameroon, Ghana, India, Nigeria</td>
            </tr>
            <tr>
              <td>Chime </td>
              <td>Cameroon, China, Ghana, India, Nigeria</td>
            </tr>
            <tr>
              <td>GoBank </td>
              <td>China</td>
            </tr>
            <tr>
              <td>Green Dot </td>
              <td> Cameroon, China, Ghana, India, Nigeria</td>
            </tr>
            <tr>
              <td>Zelle</td>
              <td>Cameroon, China, Ghana, India, Nigeriaa</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Restriction
