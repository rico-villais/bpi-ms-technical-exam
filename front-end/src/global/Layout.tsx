import * as React from "react";

// store
import useUserStore from "../pages/user/useUserStore";

interface ILayout {
    children: React.ReactNode
}

class Layout extends React.Component<ILayout> {
  componentDidMount(): void {
        useUserStore.getState().fetchListIfNeeded();

        if (useUserStore.getState().loggedInUser && window.location.pathname === "/login") {
            window.location.replace('/user');
        } else if (!useUserStore.getState().loggedInUser) {
            window.location.replace('/login');
        }
  }

  render(): React.ReactNode {
    return (
      <div className="main-layout">
        {this.props.children}
      </div>
    )
  }
}


export default Layout;