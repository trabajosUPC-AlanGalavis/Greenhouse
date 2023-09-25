<script>
export default {
  name: 'popup-finished',
  data() {
    return {
      showPopup: false,
      popupText : 'The cultivation started on ',
      date_start: "18/09/23 ",
      popupText2: `has successfully completed all stages, the records were filed in the section `,
      popupText3: '"Control Panel", Crop History"',
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

</template>

<style scoped>


.popup-body-2 p {
  color: #626262;
  font-size: 16px;
  white-space: pre-wrap;
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