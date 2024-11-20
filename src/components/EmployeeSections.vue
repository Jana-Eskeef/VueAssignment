<template>
  <div class="employee-section">
    <h2 class="mt-4 mb-4">{{ selectedSection?.name }}</h2>
    <v-data-table
      :headers="headers"
      :items="filteredEmployees"
      class="elevation-1 text-right"
      dense
      style="width: 100%; flex: 1; direction: rtl;"
    >
      <template v-slot:top>
        <v-toolbar flat color="indigo accent-2" dark>
          <v-toolbar-title class="white--text text-right" style="flex: 1;">
            الموظفون
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["selectedSection"]),
    ...mapGetters(["filteredEmployees"]),
  },
  data() {
    return {
      headers: [
        { text: "الاسم الكامل", value: "arabicFullName" },
        { text: "التخصص", value: "position" },
        { text: "الكود", value: "code" },
      ],
    };
  },
};
</script>
