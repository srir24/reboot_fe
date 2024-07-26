import React, { useEffect, useState } from 'react';

const ViewGoals = () => {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const response = await fetch('/api/goals');
    const data = await response.json();
    setGoals(data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div>
      <h2>View Goals</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Goal Name</th>
              <th>Max Amount</th>
              <th>Payment Term</th>
              <th>Payment Frequencies</th>
              <th>Payment per Txn</th>
              <th>Trustee Name</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.goal_name}</td>
                <td>{goal.Amount}</td>
                <td>{goal.Payment_Frequency}</td>
                <td>{goal.frequency}</td>
                <td>{goal.Payment_Limit}</td>
                <td>{goal.trustee_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewGoals;

/*// src/components/ViewGoals.js
import React from 'react';

const ViewGoals = ({ goals }) => {
  return (
    <div>
      <h2>View Goals</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Goal Name</th>
              <th>Trustee Name</th>
              <th>Amount</th>
              <th>Payment Frequency</th>
              <th>Payment Limit</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td>{goal.name}</td>
                <td>{goal.trustee_name}</td>
                <td>{goal.amount}</td>
                <td>{goal.payment_frequency}</td>
                <td>{goal.payment_limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewGoals;
*/