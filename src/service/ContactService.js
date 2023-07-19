import axios from "axios";
export class UserService {
    static serverUrl = `http://localhost:8083`;

    static createContact(contact) {
        let dataUrl = `${this.serverUrl}/contact/create`;
        console.log('Create Contact.');
        return axios.post(dataUrl, contact);
    }

    static findAllContact() {
        let dataUrl = `${this.serverUrl}/contact/findAll`;
        return axios.get(dataUrl);
    }

}