import * as React from "react";

// componets 
import Layout from "../../../global/Layout";

// style
import './userStyles.scss'

interface IUserLayout {
    children: React.ReactNode;
    tabName: string;
}

class UserLayout extends React.Component<IUserLayout> {
    render(): React.ReactNode {
        console.log(this.props)
        return (
            <Layout>
                <div className="user-layout">
                    <div className="user-title">Account: <span>{this.props.tabName}</span></div>
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}



export default UserLayout;