import Axios from  'axios';
const BASEURL = process.env.VUE_APP_BASEURL;
export default {

  /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
  pruebaAPI: async() => {
    try{
      
      let response = await Axios.get(`${BASEURL}`);

      console.log(response);
      
      return response.results;

    }catch (eror){
      console.log(error)
    }
  },
 /**
   * user a new resource.
   * @param userData
   */
  createUser: async (userData) => {
    try {
      let response = await Axios.post(
        '',
        userData
      );
      let user = response.data.data;
      return user;
    } catch (error) {
      throw error;
    }
  },

   /**
   * show a list of resources.
   *
   * @returns {Promise<void>}
   */
    getListUser: async () => {
        try {
          let response = await Axios.get('');
          let user = response.data.data;
          return consortium;
        } catch (error) {
          console.log(error.response);
          throw error;
        }
      },

};