import { useState, useEffect } from 'react';

const Fetch = (url) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.data && Array.isArray(data.data)) {
          setTableData(data.data);
          setFilteredData(data.data);
        } else {
          throw new Error('API response data is not in expected format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const filtered = tableData.filter((location) => {
      const matchesSearchText = location.name.toLowerCase().includes(searchText);
      const matchesLocationSearch = !selectedOptions || selectedOptions === 'all locations' || location.location.toLowerCase().includes(selectedOptions);
      const matchesActiveStatus = !isSwitchActive || location.active;
      return matchesSearchText && matchesLocationSearch && matchesActiveStatus;
    });

    setFilteredData(filtered);
  }, [searchText, isSwitchActive, selectedOptions, tableData]);

  return {
    filteredData,
    searchText,
    setSearchText,
    isSwitchActive,
    setIsSwitchActive,
    selectedOptions,
    setSelectedOptions,
    tableData,
    setFilteredData,
  };
};

export default Fetch;
