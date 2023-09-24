<template>
    <div class="card">
        <pv-data-table 
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
        responsiveLayout="scroll"
        >
          <template #header>
            <div class="table-header flex flex-column md:flex-row md:justify-content-between">
              <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Records of harvest 1, started on 1</h5>
              <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <pv-input-text
                  v-model="filters['global'].value"
                  placeholder="Search..."
              />
            </span>
            </div>
          </template>
          <pv-column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.header">
          </pv-column>
        </pv-data-table>
    </div>
</template>

<script>

import { GreenhouseApiService } from "@/shared/services/greenhouse-api.service";
import {FilterMatchMode} from "primevue/api";

export default {
    name: "process-table",
    props: {
        endpoint: null,
    },

    data(){
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


  methods:{
      initFilters() {
        this.filters = {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        };
      },
      addColumn(){
        this.columns = Object.keys(this.processData[0])
            .filter((key) => key !== "processType")
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

<style scoped>

</style>