// store
import useUserStore from "../pages/user/useUserStore";

const Layout = (props:any) => {
  const userStore = useUserStore();
  userStore.fetchListIfNeeded();
  console.log("userStore.loggedInUser", userStore.loggedInUser)
  if (!userStore.loggedInUser) {
      window.location.replace('/login');
  }

  return (
    <div className="main-layout">
      {props.children}  
    </div>
  );
}

export default Layout;