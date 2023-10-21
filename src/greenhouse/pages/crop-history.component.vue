<template>
  <pv-card class="card">
    <template #header>
      <div class="py-4">
        <h4 class="text-center uppercase">{{ $t('crop-history.control_panel') }}</h4>
        <h2 class="text-center font-bold text-4xl">{{ $t('crop-history.crop_history') }}</h2>
      </div>
    </template>

    <template #content>
      <pv-card class="card-small">
        <template #header>
          <div class="searchbar">
            <pv-input-text
                class="bg-transparent border-transparent text-white"
                type="text"
                :placeholder="$t('crop-history.search_crop')"
            />
          </div>
        </template>
        <template #content>
          <pv-data-table
              show-gridlines
              :value="cropsData"
              selectionMode="single"
              dataKey="id"
              :metaKeySelection="false"
              paginator
              :rows="5"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink
              LastPageLink"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              sortMode="multiple">
            <pv-column field="id" :header="$t('crop-history.crop_id')"></pv-column>
            <pv-column field="start_date" :header="$t('crop-history.crop_start_date')" sortable='true'></pv-column>
            <pv-column field="end_date" :header="$t('crop-history.crop_end_date')" sortable="true"></pv-column>
            <pv-column>
              <template #body="slotProps">
                <button-primary
                    :text="$t('crop-history.crop_view_logs')"
                    :buttonColor="'var(--primary-green)'"
                    :buttonTextColor="'var(--primary-white)'"
                    :buttonBorderColor="'var(--primary-green)'">
                </button-primary>
              </template>
            </pv-column>
          </pv-data-table>
        </template>
      </pv-card>
    </template>
  </pv-card>

</template>

<script>
  import {HarvestingApiService} from "@/greenhouse/services/harvesting-api.service";

  export default {
    name: "crop-history",
    data() {
      return {
        cropApiService: new HarvestingApiService(),
        cropsData: [],
      }
    },
    created() {
      this.getCropData();
    },
    methods: {
      getCropData() {
        this.cropApiService.getCropData().then((response) => {
          this.cropsData = response.data;
          this.cropsData = this.cropsData.filter(data => (data.state === 'finished'));
        })
      },
    }
  }
</script>

<style scoped>

.card-small {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  margin: 0 6%;
}


</style>
<script setup>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
</script>