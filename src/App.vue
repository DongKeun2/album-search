<template>
  <div class="max-w-xl mx-auto my-10 relative z-100">
    <h1 class="text-center mb-3 text-xl dark:text-white">My Album List</h1>
    <SearchForm class="mb-3"/>
    <AlbumList/>
    <DarkModeButton/>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import AlbumList from '@/components/AlbumList'
import DarkModeButton from '@/components/DarkModeButton'

export default {
  nape: 'App',
  components: {
    SearchForm,
    AlbumList,
    DarkModeButton,
  },
}
</script>

<style>

</style>