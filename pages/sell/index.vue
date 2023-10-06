<template>
  <h1>sell</h1>

  <div>
    <SlotInput
      id="first-name"
      label="First name"
      :type="'text'"
      :value="inputValue"
      name="firstName"
      placeholder="Name"
      @input="handleInput"
    />
  </div>
  <div>
    <SlotInput
      id="last-name"
      label="Last name"
      :type="'text'"
      :value="inputValue"
      name="lastName"
      placeholder="Last Name"
      @input="handleInput"
    />
  </div>
</template>

<script setup></script>

<script setup>
import SlotInput from "~/components/SlotInput.vue";
import { ref } from "vue";

const inputValue = ref("");
const handleInput = (event) => {
  inputValue.value = event.target.value;
};
</script>
