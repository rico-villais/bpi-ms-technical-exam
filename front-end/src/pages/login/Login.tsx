import * as React from "react";

// componets 
import Layout from "../../global/Layout";

// style
import './loginStyles.scss';

class ProfileOverview extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout>
        <div>
            <div className="wrapper">
                <div className="form-content">
                    <h2 className="form-head"> Sign In </h2>
                    <div className="form-body">
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </div>
                </div>
            </div>
        </div>  
      </Layout>
    )
  }
}



export default ProfileOverview;