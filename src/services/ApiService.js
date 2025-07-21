import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, img) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', img);

    return axios.post("api/v1/participant", form)
}

const postUpdateUser = (id, username, role, img) => {
    const form = new FormData();
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', img);
    form.append('id', id)

    return axios.put("api/v1/participant", form)
}

const postLogin = (email, password) => {
    return axios.post("api/v1/login", {email, password})
}

const postRegister = (email, password, username) => {
    return axios.post("api/v1/register", {email, password, username})
}

const getAllUser = () => {
    return axios.get("api/v1/participant/all")
}

const deleteUser = (userId) => {
    return axios.delete("api/v1/participant", {data: {id: userId}})
}

const getUserPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

export { postCreateNewUser,  getAllUser, postUpdateUser, deleteUser, getUserPaginate, postLogin, postRegister}