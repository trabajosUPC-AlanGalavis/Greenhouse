
<script>
export default {
  data() {
    return {
      showPopup: false,
      popupText :'Do you want to start a new crop? It will be recorded as start date ',
      date: "18/09/23"
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<template>
  <button class="btn" @click="openPopup" mat-button color="black">Confirm</button>

  <div class="popup-container" v-if="showPopup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>WARNING</h2>
      </div>
      <div class="popup-body">
        <br>
        <p style="text-align: center;">{{ popupText + date }}</p>
      </div>
      <div class="popup-footer">
        <button class="btn yes-finish" @click="closePopup()">Yes, start</button>
        <button class="btn close" @click="closePopup()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  padding:100px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-body h5 {
  color: #626262; /* Cambiar el color del texto */
  /* Cambiar el tamaño de fuente del texto */
}
.popup-body p {
  color: #626262; /* Cambiar el color del texto */
  font-size: 16px; /* Cambiar el tamaño de fuente del texto */
  white-space: pre-wrap; /* Permite ajustar el texto en varias líneas */
  padding:10px;
}

.popup-content {
  position: relative;
  background-color: #fff;

  border-radius: 25px;
  text-align: center;
  padding-bottom:40px;
  max-width: 600px; /* Ajusta el ancho máximo según tus preferencias */
  margin: 0 auto; /* Centra horizontalmente el cuadro */
}

.popup-content img {
  max-width: 100%;
  max-height: 70vh;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  z-index: 1;
}

.close-button img {
  width: 24px;
  height: 24px;
  border: none;
}

.btn {
  text-align: center;
  background-color: #4A845B;
  color: white;
  font-size: 20px;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 20px;
  border: none;
  transition: all 0.2s;
}

.btn:hover {
  cursor: pointer;
  transform: scale(1.05);
  color: #4A845B;
  background-color: white;
  border: 1px solid #494949;
}

.popup-header {
  background-color: #4A845B;
  text-align: center;
  padding:15px;
  border-radius: 20px;
  border-bottom-left-radius:0px;
  border-bottom-right-radius:0px;

}

.popup-header h2 {
  color: white;
  margin: 0;
}

.popup-footer .btn {
  margin-right: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
}

.popup-footer .btn.yes-finish {
  background-color: #4A845B;
  color: white;
}


.popup-footer .btn.close {
  background-color: #D9D9D9 ;
  color: black;
}

</style>