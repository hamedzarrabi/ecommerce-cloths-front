import axios from 'axios';
import { mapState } from 'vuex';
import {data} from "autoprefixer";
export class UserService {
    static serverUrl = `http://localhost:8083`;

    static login(user) {
        let dataUrl = `${this.serverUrl}/user/login`;
        // console.log(this.$state.$store.isLoggedIn);
        return axios.post(dataUrl, user, {
            withCredentials: true
        });
    }
    static logout() {
        localStorage.clear();
        console.log("Log out Successfully!")
        const dataUrl = `${this.serverUrl}/user/logout`;
        return axios.get(dataUrl);
    }
    static register(user) {
        let dataUrl = `${this.serverUrl}/user/register`;
        return axios.post(dataUrl, user);
    }
}