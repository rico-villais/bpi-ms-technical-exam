import * as React from "react";

// componets 
import Layout from "../../../global/Layout";

// style
import './userStyles.scss'

// store
import useUserStore from "../useUserStore";

interface IUserLayout {
    children: React.ReactNode;
    tabName: string;
}

class UserLayout extends React.Component<IUserLayout> {
    constructor(props:any) {
        super(props);
    }

    componentDidMount(): void {
        useUserStore.getState().fetchListIfNeeded();
    }

    render(): React.ReactNode {
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