import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "./Action";

function App({ loading, data, error, fetchUser }) {
  return (
    <div>
      <h1>Redux Thunk Example</h1>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>User List</h2>
          <div>
            {data.users &&
              data.users.map((user) => <p key={user.id}>{user.name}</p>)}
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
