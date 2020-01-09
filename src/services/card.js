import axios from 'axios'
import vueConfig from '../../vue.config'

export default {
    async getCard(id) {
        try {
            let result;
            // If no id is given, we're in the local development mode - return local example
            if(id)
                result = await axios.get(vueConfig.publicPath + "api/assignments/" + id);
            else
                result = await axios.get(vueConfig.publicPath + "card-example.json?" + id);
            
            return result.data;
        }
        catch(e) {
            alert("Beim  Abrufen der Karteikarte ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.")
        }
    }
}