<template>
  <div>
    <LoadSpinner v-if="showHideSpinner" />
    <Nuxt />
    <!-- <iframe style="border: none;" height="600px" width="400px" src="https://widget.kommunicate.io/chat?appId=3964c5e30424a23231aa342938ab9d2f9"
      allow="microphone; geolocation;">
    </iframe> -->
    <!-- <CursorFx color="#006A4E" color-hover="#f1c40f" /> -->
  </div>
</template>


<script>
import LoadSpinner from '@/components/LoadSpinner.vue'
// import { CursorFx } from "@luxdamore/vue-cursor-fx";
// import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
export default {
  name: "default",
  components: { LoadSpinner },
  data() {
    return {
      showHideSpinner: false
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.showHideSpinner = false
  //   }, 3000),
  //     (function (d, m) {
  //       var kommunicateSettings = { "appId": "3964c5e30424a23231aa342938ab9d2f9", "popupWidget": true, "automaticChatOpenOnNavigation": true };
  //       var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //       var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //       window.kommunicate = m; m._globals = kommunicateSettings;
  //     })(document, window.kommunicate || {});
  // },
  created() {
    // adds the event listener function that will handle the event
    // this.$nuxt.$on('toggle', () => {
    //   this.showHideSpinner = false
    // })
  },
};
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>


<!-- <style src="@luxdamore/vue-cursor-fx/dist/CursorFx.css"></style> -->
