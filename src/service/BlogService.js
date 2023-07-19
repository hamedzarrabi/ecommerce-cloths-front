import axios from "axios";
import {useToast} from "vue-toastification";
export class BlogService {

    static serverUrl = `http://localhost:8083`;


    static createBlog(blog, userId) {
        const toast = useToast();
        let dataUrl = `${this.serverUrl}/blog/create/${userId}`;
        return axios.post(dataUrl, blog)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                // console.error(error);
                toast.error('Title is repeat!');

            });
    }

    static findAllBlogs() {
        const dataUrl = `${this.serverUrl}/blog/findAll`;
        return axios.get(dataUrl);
    }

    static findBlogById(id) {
        const dataUrl = `${this.serverUrl}/blog/findById/${id}`;
        return axios.get(dataUrl)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
    static editBlog(userId, blogId, blog) {
        try {

        const dataUrl = `${this.serverUrl}/blog/edit/${userId}/${blogId}`;
        return axios.put(dataUrl, blog);
        } catch (error) {
            console.error(error);
            throw new Error('An error occurred while editing the blog.')
        }
    }

    static deleteBlog(blogId) {
        const  dataUrl = `${this.serverUrl}/blog/deleteBlog/${blogId}`;
        return axios.delete(dataUrl);
    }
}