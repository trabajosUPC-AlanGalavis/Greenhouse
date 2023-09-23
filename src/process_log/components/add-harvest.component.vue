<template>
  <div>
    <form @submit="addHarvest">
      <input type="text" v-model="current_phase" placeholder="Harvest phase">
      <button-primary
          type="submit"
          class="margin"
          :text="'+ Start new harvest'"
          :buttonColor="'var(--secondary-green-2)'"
          :buttonTextColor="'var(--white)'">
      </button-primary>
      <!-- Delete later -->
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import ButtonPrimary from "@/shared/components/button-primary.component.vue";
export default {
  name: "add-harvest",
  components: {ButtonPrimary},
  data(){
    return {
      current_phase: ''
    }
  },
  methods: {
    addHarvest(item) {
      item.preventDefault();
      const newHarvest = {
        id: uuid(),
        current_phase: this.current_phase,
      }
      this.$emit('add-harvest', newHarvest);
      this.current_phase = '';
    }
  }
}

</script>

<style scoped>

</style>