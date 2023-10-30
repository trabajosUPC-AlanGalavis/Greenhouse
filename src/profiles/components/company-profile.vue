<script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import {CompanyApiService} from "@/profiles/services/company-api.service";

export default {
  name: "company-profile",
  components: {ButtonPrimary},
  data() {
    return {
      companyApi: null,
      company_image: "",
      company_name: "",
      ruc: "",
      employees: [],
    };
  },
  created() {
    this.companyApi = new CompanyApiService();
    this.companyApi.getCompanies()
        .then((response) => {
          this.company_image = response.data[0].image;
          this.company_name = response.data[0].company_name;
          this.ruc = response.data[0].ruc;
        });
  }
}
</script>

<template>
<div class="mx-auto">
  <pv-card class="card md:px-5">
    <template #content>
      <div class="lg:flex">
        <div class="lg:w-1/2 text-center align-content-center mb-5 md:mr-5">
          <p class="font-bold text-4xl mb-4">{{ $t('company_profile.my_company') }}</p>
          <div class="flex items-center justify-center mb-2">
            <img class="rounded-full w-56 h-56" alt="avatar" :src="company_image">
          </div>
          <a class="text-blue-500 text-sm underline">{{ $t('company_profile.change_profile_picture') }}</a>
        </div>
        <div class="lg:w-full p-1 md:pt-6">
          <div>
            <div class="mb-5">
              <div class="flex items-baseline">
                <p class="text-xl font-bold pr-4">{{ $t('company_profile.company_name') }}:</p>
                <p class="text-sm overflow-ellipsis">{{ company_name }}</p>
              </div>
              <a class="text-blue-500 text-sm underline">{{ $t('company_profile.change_company_name') }}</a>
              <hr class="division">
            </div>
            <div class="mb-5">
              <div class="flex items-baseline">
                <p class="text-xl font-bold pr-4">{{ $t('company_profile.ruc') }}:</p>
                <p class="text-sm overflow-ellipsis">{{ ruc }}</p>
              </div>
              <a class="text-blue-500 text-sm underline">{{ $t('company_profile.change_ruc') }}</a>
              <hr class="division">
            </div>
            <div class="mb-5">
              <div class="flex items-baseline">
                <p class="text-xl font-bold">{{ $t('company_profile.company') }}:</p>
              </div>
              <a class="text-red-500 text-sm underline">{{ $t('company_profile.delete_company') }}</a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pv-card>

  <pv-card class="card md:px-5">
    <template #content>
      <div class="flex flex-col md:flex-row justify-center text-center mb-5 md:mx-10">
        <div class="mb-3 p-float-label justify-center text-center">
          <pv-input-text
              id="search"
              type="text"
              name="search"
              required
              class="w-full md:mr-5">
          </pv-input-text>
          <label for="search">{{ $t('company_profile.search') }}</label>
        </div>

        <button-primary
            class="md:ml-5"
            :text="$t('company_profile.invite_employee')"
            buttonColor="var(--secondary-green-1)"
            buttonTextColor="var(--primary-white)"
            buttonBorderColor="var(--secondary-green-1)">
        </button-primary>
      </div>
      <div class="text-center flex justify-center flex-wrap">
        <div v-for="employee in employees" class="flex flex-column text-center mx-2">
          <div class="items-center flex-grow mx-4 my-5">
            <img class="flex-grow rounded-full w-36 h-36" alt="avatar" :src="employee.image">
            <p>{{ employee.first_name }} {{ employee.last_name }}</p>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</div>
</template>

<style scoped>
* {
  color: var(--black);
}

img {
  border: solid 7px var(--primary-green);
}

.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.division{
  border-top: 1px solid var(--primary-green);
  margin-bottom: 8px;
  margin-top: 8px;
}

</style>