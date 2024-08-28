import React, { useState, useEffect } from 'react';

const ContractAddressesTable = () => {
  const [networkData, setNetworkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://raw.githubusercontent.com/superfluid-finance/protocol-monorepo/dev/packages/metadata/main/networks/list.cjs');
      const text = await response.text();
      
      const startIndex = text.indexOf('[');
      if (startIndex === -1) {
        throw new Error('Could not find the start of the JSON array');
      }
      
      const jsonStr = text.slice(startIndex);
      const data = JSON.parse(jsonStr);
      
      setNetworkData(data);
    } catch (err) {
      setError('Failed to fetch or parse data: ' + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContractAddresses = (contracts, depth = 0) => {
    if (!contracts || typeof contracts !== 'object') return String(contracts);
    return Object.entries(contracts).map(([key, value]) => (
      <div key={key} style={{ marginBottom: '4px', marginLeft: `${depth * 20}px` }}>
        <strong>{key}:</strong> {
          typeof value === 'object' 
            ? renderContractAddresses(value, depth + 1)
            : String(value)
        }
      </div>
    ));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left', color:'black' }}>Chain Name</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left', color:'black' }}>Contract Addresses</th>
          </tr>
        </thead>
        <tbody>
          {networkData.map((network) => (
            <tr key={network.name}>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{network.humanReadableName}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px' }}>{renderContractAddresses(network.contractsV1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractAddressesTable;