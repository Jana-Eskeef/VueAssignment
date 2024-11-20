import Vue from 'vue';
import Vuex from 'vuex';
import apiClient from '@/plugins/axios';

Vue.use(Vuex); 

export default new Vuex.Store({
  state: {
    sections: [],
    selectedSection: null,
    employees: [],
    searchQuery: "",
  },
  mutations: {
    SET_SECTIONS(state, sections) {
      state.sections = sections;
    },
    SET_SELECTED_SECTION(state, section) {
      state.selectedSection = section;
    },
    SET_EMPLOYEES(state, employees) {
      state.employees = employees;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    async fetchSections({ commit }) {
      try {
        const response = await apiClient.getSections('/sections');
        commit("SET_SECTIONS", response.data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    },
    selectSection({ commit }, section) {
      commit("SET_SELECTED_SECTION", section);
    },
    async fetchSectionEmployees({ commit, state }) {
      try {
        // Ensure selectedSection is defined
        if (!state.selectedSection) {
          console.error('No section selected.');
          return;
        }

        // Fetch employees for the selected section
        const response = await apiClient.getSectionEmployees(state.selectedSection.id);
        const employees = response.data;

        // Commit the employees to the Vuex state
        commit("SET_EMPLOYEES", employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
    updateSearchQuery({ commit }, query) {
      commit("SET_SEARCH_QUERY", query);
    },
  },
  getters: {
    filteredEmployees: (state) => {
      if (!state.searchQuery) return state.employees;
      return state.employees.filter((employee) =>
        employee.arabicFullName
          .toLowerCase()
          .includes(state.searchQuery.trim().toLowerCase())
      );
    },
  },
});
