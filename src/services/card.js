import axios from "axios";

export default {
  async getCard(id) {
    try {
      let result;
      // If no id is given, we're in the local development mode - return local example
      if (id) result = await axios.get("/api/assignments/" + id);
      else result = await axios.get("/card-example.json?" + id);

      if (typeof result.data.card.is_linked === "undefined")
        result.data.card.is_linked = false;
      if (typeof result.data.card.date_linked === "undefined")
        result.data.card.date_linked = {};

      return result.data;
    } catch (e) {
      return { error: e };
    }
  },
  async saveCard(id, card) {
    try {
      let result = await axios.post("/api/assignments/" + id, card);
      return result.data;
    } catch (e) {
      return { error: e };
    }
  },
};
