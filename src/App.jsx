import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "./Action";
import { useEffect } from 'react';

function App({ loading, data, error, fetchUser }) {



const fakeDataStructure = {
  users: data
}





useEffect (()=>{

  fetchUser()
},[])




  return (
    <div>
      <h1>Redux Thunk Example</h1>
      
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


const mapDispatchToProps = {
  fetchUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
