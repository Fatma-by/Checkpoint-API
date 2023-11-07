import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "./Action";

function App({ loading, data, error, fetchUser }) {

console.log("Loading", loading);
console.log("Data", data);


const fakeDataStructure = {
  users: data
}



console.log("fake", fakeDataStructure);







  return (
    <div>
      <h1>Redux Thunk Example</h1>
      <button onClick={fetchUser} >
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>User List</h2>
          <div>
            {data &&
              data.map((user) => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
});

console.log (mapStateToProps)

const mapDispatchToProps = {
  fetchUser,
};
console.log (mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
