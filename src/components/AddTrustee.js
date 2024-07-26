/*
import React, { useState, useEffect } from 'react';
//import './AddTrustee.css'; // Ensure to import styles if using separate CSS

const AddTrustee = ({ trustees, setTrustees }) => {
  const [trusteeName, setTrusteeName] = useState('');
  const [trusteeAccountNo, setTrusteeAccountNo] = useState('');
  const [trusteeRelation, setTrusteeRelation] = useState('');
  const [trusteeContactNo, setTrusteeContactNo] = useState('');

  const fetchTrustees = async () => {
    const response = await fetch('/api/trustees');
    const data = await response.json();
    setTrustees(data);
  };

  useEffect(() => {
    fetchTrustees();
  }, []);

  const handleAddTrustee = async () => {
    if (!trusteeName || !trusteeAccountNo || !trusteeRelation || !trusteeContactNo) {
      alert('All fields are required');
      return;
    }

    const newTrustee = {
      name: trusteeName,
      account_no: trusteeAccountNo,
      relation: trusteeRelation,
      contact_no: trusteeContactNo,
    };

    const response = await fetch('/api/trustees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrustee),
    });

    if (response.ok) {
      const addedTrustee = await response.json();
      setTrustees((prevTrustees) => [...prevTrustees, addedTrustee]);
      setTrusteeName('');
      setTrusteeAccountNo('');
      setTrusteeRelation('');
      setTrusteeContactNo('');
    } else {
      alert('Failed to add trustee');
    }
  };

  return (
    <div>
      <h2>Add Trustee</h2>
      <input
        className="input"
        value={trusteeName}
        onChange={(e) => setTrusteeName(e.target.value)}
        placeholder="Trustee Name"
      />
      <input
        className="input"
        value={trusteeAccountNo}
        onChange={(e) => setTrusteeAccountNo(e.target.value)}
        placeholder="Account Number"
      />
      <select
        className="input"
        value={trusteeRelation}
        onChange={(e) => setTrusteeRelation(e.target.value)}
      >
        <option value="">Select Relation</option>
        <option value="Husband">Husband</option>
        <option value="Wife">Wife</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Other">Other</option>
      </select>
      <input
        className="input"
        value={trusteeContactNo}
        onChange={(e) => setTrusteeContactNo(e.target.value)}
        placeholder="Contact Number"
      />
      <button onClick={handleAddTrustee}>Add Trustee</button>
      <ul>
        {trustees.map((trustee) => (
          <li key={trustee.id}>{trustee.name} - {trustee.relation}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTrustee;
*/
// src/components/AddTrustee.js
import React, { useState } from 'react';

const AddTrustee = ({ trustees, setTrustees }) => {
  const [trusteeName, setTrusteeName] = useState('');
  const [trusteeAccountNo, setTrusteeAccountNo] = useState('');
  const [trusteeRelation, setTrusteeRelation] = useState('');
  const [trusteeContactNo, setTrusteeContactNo] = useState('');

  const handleAddTrustee = () => {
    if (!trusteeName || !trusteeAccountNo || !trusteeRelation || !trusteeContactNo) {
      alert('All fields are required');
      return;
    }

    const newTrustee = {
      id: trustees.length + 1,
      name: trusteeName,
      account_no: trusteeAccountNo,
      relation: trusteeRelation,
      contact_no: trusteeContactNo,
      max_amount: 0,
    };
    setTrustees([...trustees, newTrustee]);
    setTrusteeName('');
    setTrusteeAccountNo('');
    setTrusteeRelation('');
    setTrusteeContactNo('');
  };

  return (
    <div>
      <h2>Add Trustee</h2>
      
  <div className="form-container">
  <label>Name*</label><input
        value={trusteeName}
        onChange={(e) => setTrusteeName(e.target.value)}
        placeholder="Trustee Name"
      />
      </div>

      <div  className="form-container">
        <label>Account No.*</label>
      <input
        value={trusteeAccountNo}
        onChange={(e) => setTrusteeAccountNo(e.target.value)}
        placeholder="Account Number"
      />
      </div>
      <div className="form-container">
        <label>Relation*</label>
      
      <select
        value={trusteeRelation}
        onChange={(e) => setTrusteeRelation(e.target.value)}
      >
        <option value="">Select Relation</option>
        <option value="Husband">Husband</option>
        <option value="Wife">Wife</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Other">Other</option>
      </select>
      </div>
      <div  className="form-container">
        <label>Contact No.</label>
      
      <input
        value={trusteeContactNo}
        onChange={(e) => setTrusteeContactNo(e.target.value)}
        placeholder="Contact Number"
      />
      </div>
      <div  className="form-container">
        <label>Upload E-Signature</label>
        <input type="file" name="eSignature" />
      </div>
     <div className="form-container">
      <button onClick={handleAddTrustee}>Add Trustee</button>
      </div>
      <ul>
        {trustees.map((trustee) => (
          <li key={trustee.id}>{trustee.name} - {trustee.relation}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTrustee;
