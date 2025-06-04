import * as React from "react";

// componets 
import UserLayout from "./UserLayout";

class UserAdd extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Add Record">
        <div>
          <p>Account Add</p>
        </div>  
      </UserLayout>
    )
  }
}


export default UserAdd;