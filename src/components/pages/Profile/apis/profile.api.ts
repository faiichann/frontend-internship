import axios from 'axios';

export async function ApiGetUserData() {
    const token = localStorage.getItem('token');
    if (token) {
        return await axios
            .get('/user/find', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            // เปลี่ยนเป็น try catch
            .then((response) => {
                console.log('[Function API_USER_Data] :', response.data);
                return response.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export async function ApiPutUserData(data: object) {
    const token = localStorage.getItem('token');
    console.log('[Edited data] :', data);
    try {
        await axios.put('/user', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
