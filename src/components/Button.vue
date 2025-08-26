<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' :
      variant === 'secondary' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500' :
      variant === 'success' ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500' :
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'success'].includes(value)
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
