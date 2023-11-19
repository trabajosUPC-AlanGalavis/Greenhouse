<template>
  <pv-card class="card">
    <template #header>
      <div class="py-4">
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
            <pv-column field="startDate" :header="$t('crop-history.crop_start_date')" sortable='true'></pv-column>
            <pv-column field="endDate" :header="$t('crop-history.crop_end_date')" sortable="true"></pv-column>
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
  import {CropApiService} from "@/greenhouse/services/crop-api.service";
  import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";

  export default {
    name: "crop-history",
    components: {ButtonPrimary},
    data() {
      return {
        cropApiService: new CropApiService(),
        cropsData: [],
      }
    },
    created() {
      this.getCropData();
    },
    methods: {
      getCropData() {
        this.cropApiService.getCropData(1).then((response) => {
          this.cropsData = response.data;
          this.cropsData.forEach((data) => {
            data.startDate = this.formatDate(data.startDate);
            data.endDate = this.formatDate(data.endDate);
          });
          this.cropsData = this.cropsData.filter(data => (data.state === false));
        })
      },
      formatDate(originalDate) {
        // Parse the original date string
        const dateObject = new Date(originalDate);

        // Extract the relevant parts
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(dateObject.getDate()).padStart(2, "0");

        // Form the formatted date string
        return`${year}-${month}-${day}`;
      }
    }
  }
</script>

<style scoped>

* {
  color: var(--black);
}

.card-small {
  background-color: var(--white);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.20);
  margin: 0 6%;
}

h4 {
  color: var(--secondary-green-1);
  font-size: var(--heading-4-size);
}

:deep(th) {
  background-color: var(--secondary-green-2) !important;
  color: var(--white) !important;
}

</style>