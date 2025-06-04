import * as React from "react";

// componets 
import UserLayout from "./UserLayout";

class UserUpdate extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Update Record">
        <div>
          <p>Account Add</p>
        </div>  
      </UserLayout>
    )
  }
}


export default UserUpdate;