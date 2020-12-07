<template>
  <div class="control">
  <label><slot /></label>
  <v-md-editor
    v-model="value"
    @input="$emit('input', value)"
    height="400px">
  </v-md-editor>
<!--    <v-md-preview :value="value" @input="$emit('input', $event.target.value)" :text="text"></v-md-preview>-->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
};
</script>
