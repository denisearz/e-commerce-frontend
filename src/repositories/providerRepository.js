import Axios from  'axios';
const BASEURL = process.env.VUE_APP_BASEURL;
export default {

 /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
  getProviderByUserId: async (userId) => {
    try {
    
        let url = 'http://localhost/provider/user/' + userId;

        let response = await Axios.get(url);
      

        return response.data[0];

    } catch (error) {
        console.log(error.response);
        throw error;
    }
  },
  /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
   getCategoryProvider: async (providerId) => {
    try {
    
        let url = 'http://localhost/providersCategories/showbyProviderId/' + providerId;

        let response = await Axios.get(url);
      

        return response.data;

    } catch (error) {
        console.log(error.response);
        throw error;
    }
  },
  /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
   getSpeciaityProvider: async (providerId) => {
    try {
    
        let url = 'http://localhost/specialityCategories/showbyProviderId/' + providerId;

        let response = await Axios.get(url);
      

        return response.data;

    } catch (error) {
        console.log(error.response);
        throw error;
    }
  },


};
