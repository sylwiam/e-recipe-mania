<template>
  <div>
    <multiselect
      :selected="selected"
      :options="options"
      :multiple="true"
      :searchable="true"
      @update="updateSelected">
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      selected: ['option1', 'something else'],
      options: ['option1', 'option2', 'test option', 'something else']
    }
  },
  methods: {
    updateSelected (newSelected) {
      this.selected = newSelected
      // @TODO add ajax call to update selected
    }
  }
}
</script>