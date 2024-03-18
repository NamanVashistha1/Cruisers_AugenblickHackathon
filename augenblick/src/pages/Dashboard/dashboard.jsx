import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

export class Dashboard extends Component {
  render() {
    // Sample data for the Piechart
    const piechartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4
      }]
    };

    return (
      <div>
        <div className="row" style={{marginTop:"85px", padding:"3px"}} >
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card shadow rounded">
              <div className="card-body">
                <h5 className="card-title">Pie Chart</h5>
                <Doughnut data={piechartData} style={{ maxHeight: '400px', overflow: 'hidden' }} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card shadow rounded">
              <div className="card-body">
                <h5 className="card-title">Table</h5>
                {/* Insert your table component here */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Header 1</th>
                      <th scope="col">Header 2</th>
                      <th scope="col">Header 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    <tr>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
