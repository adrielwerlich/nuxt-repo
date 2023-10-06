<!-- create a reusable input with label and customizable with props -->
<template>
  <div class="custom-input">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['id', 'label', 'type', 'value', 'name']);
const id = ref(props.id || '');
const label = ref(props.label || '');
const type = ref(props.type || 'text');
const value = ref(props.value || '');
const name = ref(props.name || '');
</script>

<style scoped>
.custom-input {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
