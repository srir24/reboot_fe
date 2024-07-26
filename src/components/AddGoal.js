
import React, { useState } from 'react';

const AddGoal = ({ masters, trustees, goals, setGoals }) => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [goalMasterId, setGoalMasterId] = useState('');
  const [goalTrusteeId, setGoalTrusteeId] = useState('');
  const [goalPaymentFrequency, setGoalPaymentFrequency] = useState('');
  const [goalFrequencyCount, setGoalFrequencyCount] = useState(1);
  const [equatedAmount, setEquatedAmount] = useState('');

  const handleAddGoal = () => {
    if (!goalName || !goalAmount || !goalTrusteeId || !goalPaymentFrequency) {
      alert('All fields are required');
      return;
    }

    const selectedTrustee = trustees.find(trustee => trustee.id === parseInt(goalTrusteeId));

    const newGoal = {
      id: goals.length + 1,
      name: goalName,
      amount: parseFloat(goalAmount),
      master_id: parseInt(goalMasterId),
      trustee_id: parseInt(goalTrusteeId),
      payment_frequency: goalPaymentFrequency,
      payment_limit: parseFloat(equatedAmount),
      trustee_name: selectedTrustee ? selectedTrustee.name : '',
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setGoalAmount('');
    setGoalMasterId('');
    setGoalTrusteeId('');
    setGoalPaymentFrequency('');
    setGoalFrequencyCount(1);
    setEquatedAmount('');
  };

  const handleFrequencyChange = (e) => {
    const count = parseInt(e.target.value);
    setGoalFrequencyCount(count);
    if (goalAmount) {
      setEquatedAmount((parseFloat(goalAmount) / count).toFixed(2));
    }
  };

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setGoalAmount(amount);
    if (goalFrequencyCount) {
      setEquatedAmount((amount / goalFrequencyCount).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Add Goals</h2>
      <input
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        placeholder="Goal Name"
      />
      <input
        value={goalAmount}
        onChange={handleAmountChange}
        placeholder="Goal Amount"
        type="number"
        min="0"
      />
      
      <select
        value={goalTrusteeId}
        onChange={(e) => setGoalTrusteeId(e.target.value)}
      >
        <option>Select Trustee</option>
        {trustees.map((trustee) => (
          <option key={trustee.id} value={trustee.id}>
            {trustee.name}
          </option>
        ))}
      </select>
      <select
        value={goalPaymentFrequency}
        onChange={(e) => setGoalPaymentFrequency(e.target.value)}
      >
        <option value="">Select Payment Frequency</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="term">Term</option>
        <option value="annually">Annually</option>
      </select>
      <input
        type="number"
        value={goalFrequencyCount}
        onChange={handleFrequencyChange}
        min="1"
        placeholder="Number of Frequencies"
      />
      <div>
        <strong>Equated Amount per Frequency:</strong> {equatedAmount}
      </div>
      <button onClick={handleAddGoal}>Add Goal</button>
    </div>
  );
};

export default AddGoal;
