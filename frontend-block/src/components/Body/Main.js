import React from "react";

class MainPage extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div style={{ textAlign: 'center', marginTop: '150px' }}>
            <h1>My test project for <span style={{ color: 'red' }}>Scandiweb</span></h1>
         </div>
      )
   }
}

export default MainPage