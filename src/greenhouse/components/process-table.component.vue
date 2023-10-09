<script>
import {GreenhouseApiService} from "@/greenhouse/services/greenhouse-api.service";
import {FilterMatchMode} from "primevue/api";

export default {
  name: "process-table",
  props: {
    endpoint: null,
  },

  data() {
    return {
      filters: {},
      processData: [],
      columns: null,
      greenhouseApi: new GreenhouseApiService()
    }
  },
  created() {
    this.initFilters();
  },
  mounted() {
    // Fetch initial data and columns
    this.fetchDataAndColumns(this.endpoint);
  },
  watch: {
    endpoint(newEndpoint, oldEndpoint) {
      if (newEndpoint !== oldEndpoint) {
        this.fetchDataAndColumns(newEndpoint);
      }
    },
  },


  methods: {
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
      };
    },
    addColumn() {
      this.columns = Object.keys(this.processData[0])
          .filter((key) => key !== "processType"  && key !== "id" && key !== "apiId")
          .map((key) => {
            const formattedHeader = key
                .split(/(?=[A-Z])/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return {
              field: key,
              header: formattedHeader,
            };
          });
    },
    fetchDataAndColumns(endpoint) {
      this.greenhouseApi.getAllData(endpoint).then((response) => {
        this.processData = response.data;
        this.addColumn();
      });
    },
  }
}

</script>

<template>
  <pv-data-table
      class="overflow-hidden ml-4 mr-4 mb-4"
      :value="processData"
      ref="dt"
      dataKey="id"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport
        RowsPerPageDropdown"
      :filters="filters"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      responsiveLayout="scroll">
    <template #header>
      <div class="table-header flex flex-column md:justify-content-between">
        <h2 class="mb-2 md:m-0 p-as-md-center text-xl font-bold">Records of harvest {{ "" }}, started on {{ "" }}</h2>
        <pv-input-text class="bg-transparent border-transparent text-black"
                       v-model="filters['global'].value"
                       placeholder="Filter records..."/>
      </div>
    </template>
    <pv-column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header">
    </pv-column>
  </pv-data-table>

</template>

<style scoped>
h2 {
  color: var(--primary-green);
  font-size: var(--medium-text-regular-size);
  font-family: var(--font-primary);
}

::v-deep th {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}

.records {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
}
</style>