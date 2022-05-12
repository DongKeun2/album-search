<template>
  <form @submit.prevent>
    <input
      type="text"
      class="border border-slate-500 rounded-sm w-full p-2"
      placeholder="앨범 이름을 입력하세요."
      @input="onSearchDebounce"
    >
  </form>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchForm',
  methods: {
    onSearchDebounce: _.debounce(function(event) {
      const keyword = event.target.value
      this.$store.dispatch('fetchAlbums', keyword)
    }, 400),
    // onSearch(event) {
    //   const keyword = event.target.value
    //   this.$store.dispatch('fetchAlbums', keyword)
    // },
  },
}
</script>

<style scoped>

</style>