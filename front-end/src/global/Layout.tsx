import * as React from "react";

interface ILayout {
    children: React.ReactNode
}

class Layout extends React.Component<ILayout> {
  render(): React.ReactNode {
    return (
      <div className="main-layout">
        {this.props.children}
      </div>
    )
  }
}


export default Layout;