import axios from 'axios'

export default {
    async getCard(id) {
        let result = await axios.get("/card-example.json?" + id);
        return result.data;
    }
}