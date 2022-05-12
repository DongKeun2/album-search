<template>
  <div class="flex my-3">
    <div class="mr-3">
      <img :src="album.image[1]['#text']" alt="album-image">
    </div>
    <div class="flex flex-col justify-around">
      <p class="dark:text-white font-bold">{{ album.name }}</p>
      <p class="dark:text-white">{{ album.artist }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumListItem',
  props: {
    album: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>