import Axios from  'axios';
const BASEURL = process.env.VUE_APP_BASEURL;
export default {

 /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
  getProvider: async (id) => {
    try {
    
        let url = 'http://localhost/provider/' + id;

        let response = await Axios.get(url);
      
        return response.data;

    } catch (error) {
        console.log(error.response);
        throw error;
    }
  },


};
