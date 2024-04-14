import React from "react";
import { Table } from "react-bootstrap";
import style from './CurrentStats.module.css';
const CurrentStats = (props) => {
  const {timeTaken, comparisons, movements, timeComplexity , spaceComplexity } = props.currStats;
  return (
    <>
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Comparisons</th>
            <th>Movements</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{comparisons}</td>
            <td>{movements}</td>
            <td>{timeComplexity}</td>
            <td>{spaceComplexity}</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default CurrentStats;
