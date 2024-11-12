import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users.filter((user) =>
        user.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropdown(filteredData.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) => {
    const selectedUser = event.target.innerText;
    setSearchParam(selectedUser);
    setFilteredUsers([]);
    setShowDropdown(false);
  };

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const userNames = data.users.map((user) => user.firstName);
      setUsers(userNames);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading! Please wait...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search users here..."
          onChange={handleChange}
        />
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
