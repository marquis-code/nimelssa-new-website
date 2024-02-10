<template>
  <div class="canvas__container">

    <canvas ref="canvas" />

  </div>
</template>

<script>
// Page, component or layout
export default {
  data: () => (
    {
      sketchManager: null,
    }
  ),
  async mounted() {

    try {

      this.sketchManager = await this.$sketch(
        // Settings of the sketch
        {
          maxPixelRatio: 3,
          hotkeys: false,
          // or you can pass a DOMCanvasElement ex.
          // document.querySelector( 'canvas' )
          canvas: this.$refs.canvas,
        },
        // Method for the rendering
        this.sketch,
      );

      // Ensure every listener is removed on-component-destoy
      this.$once(
        'hook:beforeDestroy',
        () => this.sketchManager.unload()
      );

    } catch (e) {

      console.error(
        e
      );

    }

  },
  methods: {
    sketch({ context }) {

      // Here you start coding-art

      return ({ context }) => {

        // Here you can return some animated stuff

      };

    },
  },
};
</script>

<style scoped>
canvas {

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

}
</style>
