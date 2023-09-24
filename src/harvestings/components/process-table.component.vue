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
        processType: null,
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
      this.greenhouseApi.getAllData(this.processType).then(
          (response) => {
            this.processData = response.data;
          }
      )
    },

    methods:{
      initFilters() {
        this.filters = {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        };
      },
    }
}

</script>

<style scoped>

</style>