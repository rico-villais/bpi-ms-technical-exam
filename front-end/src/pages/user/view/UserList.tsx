import * as React from "react";

// componets 
import UserLayout from "./UserLayout";

class UserList extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Records">
        <div>
          <p>Account Lists</p>
        </div>  
      </UserLayout>
    )
  }
}


export default UserList;