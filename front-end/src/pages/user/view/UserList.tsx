import * as React from "react";
import { Link } from "react-router-dom";

// componets 
import UserLayout from "./UserLayout";

// libraries
import { Table, Image } from 'antd';
import type { TableColumnsType } from 'antd';
import { createStyles } from 'antd-style';

// store
import useUserStore from "../useUserStore";

const useStyle = createStyles(({ css, token }) => {
  console.log("token", token)
  return {
    customTable: css`
      ant-table {
        ant-table-container {
          ant-table-body,
          ant-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

interface DataType {
  key: React.Key;
  photo: React.ReactNode | string | null;
  name: string;
  username: string;
  country: string;
  email: string;
  accountType: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'PHOTO',
    width: 80,
    dataIndex: 'photo',
    key: 'photo',
    fixed: 'left',
  },
  {
    title: 'NAME',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'USERNAME',
    dataIndex: 'username',
    key: 'username',
    width: 150,
  },
  {
    title: 'COUNTRY',
    dataIndex: 'country',
    key: 'country',
    width: 150,
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 150,
  },
  {
    title: 'ACCOUNT TYPE',
    dataIndex: 'accountType',
    key: 'accountType',
    width: 150,
  },
  {
    title: 'ACTION',
    dataIndex: 'action',
    key: 'action',
    width: 150
  },
];


const UserList: React.FC = () => {
  const { styles } = useStyle();
  const userStore = useUserStore();

  const dataSource = userStore.list.map<DataType>((_, i) => ({
    key: i,
    photo: (
    <div className="user-image">
      <Image src="/gallery.png" />
    </div>),
    name: _.firstname + ' ' + _.lastname,
    username: _.username,
    country: _.country,
    email: _.email,
    accountType: _.accounttype,
    action: (<div><Link to={`/user/update/${i}`} style={{color:"orange"}}>Update</Link> <Link to="/user/delete" style={{color:"red"}}>Delete</Link></div>)
  }));


  return (
    <UserLayout tabName="Records">
      <div className="user-list-option-menu">
        <Link to="/user/add" className="add-button"> ADD ACCOUNT </Link>
      </div>
      <Table<DataType>
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        bordered
        size="middle"
        scroll={{ x: 'calc(700px + 50%)', y: 47 * 5 }}
      />
    </UserLayout>
  );
};
 
export default UserList;