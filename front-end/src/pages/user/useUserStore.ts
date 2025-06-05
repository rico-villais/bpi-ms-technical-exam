
import { create } from 'zustand'
import { default as axios } from 'axios';
const baseUrl = 'localhost:3001';

interface IUSER {
    id?: number;
    photo?: string | null;
    firstname: string;
    lastname: string;
    username: string;
    country: string;
    email: string;
    accounttype: string;
}

const defaultState: any = {
    photo: null,
    name: "",
    username: "",
    country: "",
    email: "",
    accounttype: ""
}

type Store = {
    loggedInUser: boolean;
    user: IUSER,
    list: IUSER[],
    loading: boolean;
    lastUpdated: number | null;
    didInvalidate: boolean;
    login: () => void;
    fetchListIfNeeded: () => void;
    fetchList: () => void;
    invalidateList: () => void;
    create: (newUser:IUSER) => void;
    getUserById: (id:number) => void;
    update: (updateUser:IUSER) => void;
    delete: (id:number) => void;
}

const shouldFetchList = (state: Store) => {
    if (!state || !state.list) return true; // yes, the list we're looking for wasn't found
    else if (state.loading) return false; // no, this list is already fetching
    else if (!state.lastUpdated || new Date().getTime() - state.lastUpdated > (1000 * 60 * 5)) return true // yes, it's been longer than 5 minutes since the last fetch
    else return state.didInvalidate;
}

const userStore = create<Store>((set, get) => ({
    loggedInUser: true,
    user: defaultState,
    list: [],
    loading: false,
    lastUpdated: null,
    didInvalidate: false,
    login: () => {
        axios.post(`http://${baseUrl}/api/login`, { email: "rc.bilyaiz@gmail.com", password: "admin" })
        .then(json => {
            if (json.data && json.data.success) {
                set({ loggedInUser: true })
                window.location.replace('/user');
            }
        })
        .catch(error => console.log('login err', error));
    },
    fetchListIfNeeded: () => {
        if (shouldFetchList(get())) {
            set({ loading: true });
            get().fetchList();
        }
    },
    fetchList: async () => {
        const response = await axios.get(`http://${baseUrl}/api/users`);
        console.log("response", response)
        console.log('eyy res', response.data.users)
        if (response.status === 200 && response.data) {
            set({
                list: response.data.users,
            });
        }
    },
    invalidateList: () => set({ didInvalidate: true }),
    create: (newUser) => {
        axios.post(`http://${baseUrl}/api/create`, newUser)
        .then(json => {
            console.log('eyy', json)
            if (json.data && json.data.success) {
                const currentList:IUSER[] = get().list;
                if (json.data.user) {
                    currentList.push(json.data.user);
                }
                set({ list: currentList });
                window.location.replace('/user');
            }
        })
        .catch(error => console.log('login err', error));
    },
    getUserById: async (id) => {
        const response = await axios.get(`http://${baseUrl}/api/user/${id}`);
        return response.data.user;
    },
    update: (updateUser) => {
        console.log('ey', updateUser)
        axios.put(`http://${baseUrl}/api/update/${updateUser.id}`, updateUser)
        .then(json => {
            if (json.data.user) {            
                const currentList:IUSER[] = get().list.map(item => {
                    if (item.id == json.data.user.id) return json.data.user;
                    else return item;
                });
                set({ list: currentList });
                window.location.replace('/user');
            }
        })
        .catch(error => console.log('login err', error));
    },
    delete: async (id) => {
        const response = await axios.delete(`http://${baseUrl}/api/delete/${id}`);
        if (response.data.success) {
            const currentList:IUSER[] = get().list.filter(item => {
                if (item.id != id) return item
                else return false;
            });
            set({ list: currentList });
        }
    }
}));

export default userStore;