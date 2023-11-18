  <script>
import ButtonPrimary from "@/greenhouse/components/button-primary.component.vue";
import {CompanyApiService} from "@/profiles/services/company-api.service";
import {UserApiService} from "@/profiles/services/user-api.service";
import emailjs from 'emailjs-com';

export default {
  name: "company-profile",
  components: {ButtonPrimary},
  data() {
    return {
      companyApi: null,
      userApi: null,
      company: null,
      companyId: 1,
      companyImage: "",
      companyName: "",
      ruc: "",
      employees: [],
      newEmployeeFirstName: '',
      newEmployeeLastName: '',
      newEmployeeEmail: '',
      newEmployeePassword: '',
      newRuc: "",
      newCompanyName: "",
      newImage: "",
      showPopup: false,
      isDeletePopupShown: false,
      isTinPopupShown: false,
      isNamePopupShown: false,
      isImagePopupShown: false
    };
  },
  created() {
    this.companyApi = new CompanyApiService();
    this.companyApi.getCompanyById(this.companyId).then((response) => {
      this.companyImage = response.data[0].image;
      this.companyName = response.data[0].company_name;
      this.ruc = response.data[0].ruc;
      this.company = response.data[0];
    });
    this.userApi = new UserApiService();
    this.userApi.getUsersByCompanyId(this.companyId).then((response) => {
      this.employees = response.data;
    });
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },

    closePopup() {
      this.showPopup = false;
    },

    showTinChangePopup() {
      this.isTinPopupShown = true;
    },

    closeTinChangePopup() {
      this.isTinPopupShown = false;
    },

    showCompanyNamePopup() {
      this.isNamePopupShown = true;
    },

    closeCompanyNamePopup() {
      this.isNamePopupShown = false;
    },

    showImageChangePopup() {
      this.isImagePopupShown = true;
    },

    closeImageChangePopup() {
      this.isImagePopupShown = false;
    },

    showDeleteCompanyPopup() {
      this.isDeletePopupShown = true;
    },

    closeDeleteCompanyPopup() {
      this.isDeletePopupShown = false;
    },


    sendInvitation() {
      try {
        const form = this.$refs.invitationForm;
        emailjs.sendForm('service_yozifrv', 'template_f7hginq', form, 'jKu8cJgGmBzHa-rBK', {
          newEmployeeFirstName: this.newEmployeeFirstName,
          newEmployeeLastName: this.newEmployeeLastName,
          newEmployeeEmail: this.newEmployeeEmail,
          newEmployeePassword: this.newEmployeePassword
        });
        const newEmployee = {
          company_id: this.companyId,
          first_name: this.newEmployeeFirstName,
          last_name: this.newEmployeeLastName,
          email: this.newEmployeeEmail,
          image: 'https://cdn-icons-png.flaticon.com/512/3106/3106921.png',
        }
        this.userApi.create(newEmployee)
            .then(response => {
              console.log('New employee created successfully:', response.data);
              this.employees.push(response.data);
            })
            .catch(error => {
              console.error('Error, could not create employee:', error);
            });

      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      // Reset form field
      this.newEmployeeFirstName = ''
      this.newEmployeeLastName = ''
      this.newEmployeeEmail = ''
      this.newEmployeePassword = ''
      this.closePopup()
    },

    updateTIN(){
      this.company.ruc = this.newRuc;
      this.companyApi.updateCompany(this.companyId, this.company).then((response) => {
        console.log(`Company updated successfully:`, response.data);
      })
      this.isTinPopupShown = false;
    },

    updateCompanyName(){
      this.company.companyName = this.newCompanyName;
      this.companyApi.updateCompany(this.companyId, this.company).then((response) => {
        console.log(`Company updated successfully:`, response.data);
      })
      this.isNamePopupShown = false;
    },

    updateImage(){
      this.company.image = this.newImage;
      this.companyApi.updateCompany(this.companyId, this.company).then((response) => {
        console.log(`Company updated successfully:`, response.data);
      })
      this.isImagePopupShown = false;
    },

    deleteCompany(){
      this.companyApi.deleteCompany(this.companyId).then((response) => {
        console.log(`Company erased successfully:`, response.data);
      })
      this.isDeletePopupShown = false;
    },
  },
  computed: {
    isInviteButtonDisabled() {
      return !this.newEmployeeFirstName || !this.newEmployeeLastName || !this.newEmployeeEmail || !this.newEmployeePassword;
    },
  },
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
              <img class="rounded-full w-56 h-56" alt="avatar" :src="companyImage">
            </div>
            <button class="text-blue-500 text-sm underline" @click="showImageChangePopup">
              {{ $t('company_profile.change_profile_picture') }}
            </button>
          </div>
          <div class="lg:w-full p-1 md:pt-6">
            <div>
              <div class="mb-5">
                <div class="flex items-baseline">
                  <p class="text-xl font-bold pr-4">{{ $t('company_profile.company_name') }}:</p>
                  <p class="text-sm overflow-ellipsis">{{ companyName }}</p>
                </div>
                <button class="text-blue-500 text-sm underline" @click="showCompanyNamePopup">
                  {{ $t('company_profile.change_company_name') }}
                </button>
                <hr class="division">
              </div>
              <div class="mb-5">
                <div class="flex items-baseline">
                  <p class="text-xl font-bold pr-4">{{ $t('company_profile.ruc') }}:</p>
                  <p class="text-sm overflow-ellipsis">{{ ruc }}</p>
                </div>
                <button class="text-blue-500 text-sm underline" @click="showTinChangePopup">
                  {{ $t('company_profile.change_ruc') }}
                </button>
                <hr class="division">
              </div>
              <div class="mb-5">
                <div class="flex items-baseline">
                  <p class="text-xl font-bold">{{ $t('company_profile.company') }}:</p>
                </div>
                <button class="text-red-500 text-sm underline" @click="showDeleteCompanyPopup">
                  {{ $t('company_profile.delete_company') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-card>

    <pv-card class="card md:px-5">
      <template #header>
        <div class="py-4">
          <h2 class="text-center font-bold text-4xl">{{ $t('company_profile.employees') }}</h2>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col md:flex-row justify-center text-center mb-5 md:mx-10 items-center">
          <div class="mb-3 p-float-label flex justify-center text-center items-center">
            <pv-input-text
                id="search"
                type="text"
                name="search"
                required
                class="w-full md:mr-5">
            </pv-input-text>
            <label for="search" class="text-gray-500">{{ $t('company_profile.search') }}</label>
          </div>
          <button-primary
              class="md:ml-5"
              :text="$t('company_profile.invite_employee')"
              buttonColor="var(--secondary-green-1)"
              buttonTextColor="var(--primary-white)"
              buttonBorderColor="var(--secondary-green-1)"
              @click="openPopup">
          </button-primary>

          <!--
            Dialog de borrar compañia
          -->

          <div class="popup-container" v-if="isDeletePopupShown">
            <div class="popup-content">
              <div class="popup-header" style="background-color: var(--red);">
                <h2 class="uppercase">{{ $t('warning') }}</h2>
              </div>
              <div class="popup-body">
                <br>
                <p style="text-align: center;">The company will be deleted, all records will be erased and the data
                  will be lost. Are you sure you want to continue?
                </p>
                <h5>This operation is irreversible</h5>
              </div>
              <div class="popup-footer">
                <button-primary class="mb-2 mr-3 mt-4"
                                @click="deleteCompany"
                                :text="'Yes, delete it'"
                                :buttonColor="'var(--red)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--red)'">
                </button-primary>
                <button-primary class="mb-2 mr-3 mt-4"
                                @click="closeDeleteCompanyPopup"
                                :text="'Cancel'"
                                :buttonColor="'var(--gray-2)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--gray-2)'">
                </button-primary>
              </div>
            </div>
          </div>

          <!--
            Dialog de cambiar RUC
          -->

          <div class="popup-container" v-if="isTinPopupShown">
            <div class="popup-content m-6">
              <div class="popup-header mb-3">
                <p class="text-white"> Cambiar TIN</p>
              </div>
              <div>
                <form ref="invitationForm" class="flex flex-column mx-3 w-23rem">
                  <pv-input-text
                      id="tin-change"
                      type="number"
                      name="new-tin"
                      placeholder="New TIN value"
                      v-model="newRuc"
                      required
                      min="11"
                      max="11"
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>
                </form>
              </div>
              <div class="popup-footer">
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="updateTIN"
                                :text="'Aceptar'"
                                :buttonColor="'var(--secondary-green-1)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--secondary-green-1)'">
                </button-primary>
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="closeTinChangePopup"
                                :text="'Cancel'"
                                :buttonColor="'var(--gray-2)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--gray-2)'">
                </button-primary>
              </div>
            </div>
          </div>

          <!--
            Dialog de cambiar nombre de compañia
          -->

          <div class="popup-container" v-if="isNamePopupShown">
            <div class="popup-content m-6">
              <div class="popup-header mb-3">
                <p class="text-white"> Cambiar nombre de compañia</p>
              </div>
              <div>
                <form ref="invitationForm" class="flex flex-column mx-3 w-23rem">
                  <pv-input-text
                      id="company-name-change"
                      type="text"
                      name="new-company-name"
                      placeholder="New Company Name"
                      v-model="newCompanyName"
                      required
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>
                </form>
              </div>
              <div class="popup-footer">
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="updateCompanyName"
                                :text="'Aceptar'"
                                :buttonColor="'var(--secondary-green-1)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--secondary-green-1)'">
                </button-primary>
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="closeCompanyNamePopup"
                                :text="'Cancel'"
                                :buttonColor="'var(--gray-2)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--gray-2)'">
                </button-primary>
              </div>
            </div>
          </div>

          <!--
            Dialog de cambiar imagen
          -->

          <div class="popup-container" v-if="isImagePopupShown">
            <div class="popup-content m-6">
              <div class="popup-header mb-3">
                <p class="text-white"> Cambiar imagen</p>
              </div>
              <div>
                <form ref="invitationForm" class="flex flex-column mx-3 w-23rem">
                  <pv-input-text
                      id="image-change"
                      type="text"
                      name="new-company-image"
                      placeholder="New Company Image"
                      v-model="newImage"
                      required
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>
                </form>
              </div>
              <div class="popup-footer">
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="updateImage"
                                :text="'Aceptar'"
                                :buttonColor="'var(--secondary-green-1)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--secondary-green-1)'">
                </button-primary>
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="closeImageChangePopup"
                                :text="'Cancel'"
                                :buttonColor="'var(--gray-2)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--gray-2)'">
                </button-primary>
              </div>
            </div>
          </div>

          <!--
            Dialog de invitar empleado
          -->

          <div class="popup-container" v-if="showPopup">
            <div class="popup-content m-6">
              <div class="popup-header mb-3">
                <p class="text-white"> Invite employee</p>
              </div>
              <div>
                <form ref="invitationForm" class="flex flex-column mx-3 w-23rem">
                  <pv-input-text
                      id="employee_name"
                      type="text"
                      name="employee_name"
                      placeholder="Employee name"
                      v-model="newEmployeeFirstName"
                      required
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>

                  <pv-input-text
                      id="employee_last_name"
                      type="text"
                      name="employee_last_name"
                      placeholder="Employee last name"
                      v-model="newEmployeeLastName"
                      required
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>

                  <pv-input-text
                      id="employee_email"
                      type="email"
                      name="employee_email"
                      placeholder="Employee email"
                      required
                      v-model="newEmployeeEmail"
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>

                  <pv-input-text
                      id="employee_temporal_password"
                      type="text"
                      name="employee_temporal_password"
                      placeholder="Employee temporal password"
                      required
                      v-model="newEmployeePassword"
                      class="rounded-input bg-transparent px-3 py-2 mb-3 mx-2">
                  </pv-input-text>
                </form>
              </div>
              <div class="popup-footer">
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="sendInvitation"
                                :text="'Invite'"
                                :buttonColor="'var(--secondary-green-1)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--secondary-green-1)'"
                                :disabled="isInviteButtonDisabled">
                </button-primary>
                <button-primary class="mb-2 mx-3 mt-4"
                                @click="closePopup"
                                :text="'Cancel'"
                                :buttonColor="'var(--gray-2)'"
                                :buttonTextColor="'var(--white)'"
                                :buttonBorderColor="'var(--gray-2)'">
                </button-primary>
              </div>
            </div>
          </div>
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

.division {
  border-top: 1px solid var(--primary-green);
  margin-bottom: 8px;
  margin-top: 8px;
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: relative;
  background-color: var(--white);
  border-radius: 25px;
  text-align: center;
  padding-bottom: 20px;
  max-width: 600px;
  margin: 0 auto;
}


.popup-header {
  background-color: var(--secondary-green-1);
  text-align: center;
  padding: 15px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

}

.popup-header h2 {
  color: white;
  margin: 0;
}

</style>