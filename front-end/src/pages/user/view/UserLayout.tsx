import * as React from "react";

// componets 
import Layout from "../../../global/Layout";

interface IUserLayout {
    children: React.ReactNode;
    tabName: string;
}

class UserLayout extends React.Component<IUserLayout> {
    render(): React.ReactNode {
        console.log(this.props)
        return (
            <Layout>
                <div>Account: {this.props.tabName}</div>
                {this.props.children}
            </Layout>
        )
    }
}



export default UserLayout;