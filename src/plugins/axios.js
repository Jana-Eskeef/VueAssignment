import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://beehive-mirror-api.beetronix.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});


export default {
  
  getSections() {
    return apiClient.get('/api/sections');
  },

  
  getDescendantSections() {
    return apiClient.get('/api/sections/descendant');
  },

 
  getSectionEmployees(sectionId) {
    return apiClient.get('/api/employee/briefs', {
      params: { sectionId }, 
    });
  },
  

};
