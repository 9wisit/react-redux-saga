import axios from 'axios'

export const userServices = {
    getUsers: async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        return result.data
    }
}