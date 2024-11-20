<template>
  <v-app class="app">
    <v-row no-gutters>
      <!-- Sidebar -->
      <v-navigation-drawer
        color="indigo accent-2"
        app
        permanent
        right
        style="font-weight: 500; height:100%;"
      >
        <v-list>
          <v-list-item>
            <v-list-item-title
              class="white--text"
              style="font-weight: 400; font-size: 1.25rem;"
            >
              الأقسام
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="section in sections"
            :key="section.id"
            @click="handleSectionClick(section)"
            class="indigo accent-2"
          >
            <v-list-item-content>
              <v-list-item-title
                class="white--text d-flex align-center"
                style="font-weight: 500; font-size: 1.25rem;"
              >
                {{ section.name }}
                <v-icon
                  class="white--text ml-2"
                  small
                  @click.stop="showSectionInfo(section)"
                >
                  mdi-information
                </v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    
      <v-col cols="9" class="main-content">
        <v-container>
         
          <v-row>
         
            <v-col cols="auto">
              <v-btn
                style="font-weight: 300; font-size: 1rem;"
                color="green darken-3"
                @click.stop="showadd"
                class="white--text add"
                size="large"
              >
                إضافة قسم
              </v-btn>
            </v-col>
           
            <v-row justify="end">
              <v-col cols="auto">
                <v-container>
                  <v-text-field
                    label="بحث بالاسم"
                    outlined
                    prepend-inner-icon="mdi-magnify"
                      v-model="searchInput"
                    @input="updateSearchQuery(searchInput)"
                    style="width: 300px; height: 30px;"
                    dense
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
          </v-row>
        </v-container>

        <!-- Employee Section -->
        <div class="employee-section-container">
          <employee-section />
        </div>
      </v-col>
    </v-row>

   
    <v-dialog
      style="background-color: #fff;"
      v-model="dialogVisiblee"
      persistent
      max-width="600px"
    >
      <v-card-title
        style="width: 100%; background-color: #fff; flex: 1; direction: rtl;"
        class="headline"
      >
        <h2 class="mb-4 text-right" style="font-size: 1.25rem;">اضافة قسم</h2>
        <v-container class="px-0" fluid>
          <v-row>
            <v-col cols="12">
              <v-text-field label="اسم القسم"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="القسم الأب"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-actions style="background-color: #fff;">
        <v-spacer></v-spacer>
        <v-btn
          style="font-weight: 300; font-size: 1rem; direction: rtl;"
          color="indigo darken-4"
          class="white--text"
          @click="dialogVisiblee = false"
        >
          إغلاق
        </v-btn>
        <v-btn
          style="font-weight: 300; font-size: 1rem; direction: rtl;"
          color="green darken-3"
          class="white--text"
          @click="dialogVisiblee = false"
        >
          حفظ
        </v-btn>
      </v-card-actions>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EmployeeSection from "@/components/EmployeeSections.vue";

export default {
  components: {
    EmployeeSection,
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisiblee: false,
      dialogData: null,
      searchInput: "",  // Define the searchInput here
    };
  },
  computed: {
    ...mapState(["sections", "selectedSection", "searchQuery"]),
    
  },
  methods: {
    ...mapActions(["fetchSections", "selectSection", "fetchSectionEmployees", "updateSearchQuery"]),
    handleSectionClick(section) {
      this.selectSection(section);
      this.fetchSectionEmployees(section.id);
    },
    showSectionInfo(section) {
      this.dialogData = section;
      this.dialogVisible = true;
    },
    showadd() {
      this.dialogVisiblee = true;
    },
  },
  created() {
    this.fetchSections();
  },
};
</script>

<style scoped>

.main-content {
  display: flex;
  flex-direction: column;

}

.employee-section-container {
  
  padding: 16px;
  text-align: right;
}

.text-right {
  text-align: right;
  direction: rtl;
}

.app {
  background-color: #eeeeee;
  padding: 5px;
  height: 100%;

}
</style>
