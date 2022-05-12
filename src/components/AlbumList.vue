<template>
  <div>
    <AlbumListItem
      v-for="album in albums"
      :key="album.url"
      :album="album"
    />
    <template v-if="isFetching">
      <div v-for="number in 10" :key="number" class="flex my-5 animate-pulse">
        <div class="w-16 h-16 bg-slate-200 mr-3">
          <!-- 이미지 자리 -->
        </div>
        <div class="w-full flex flex-col justify-around">
          <p class="w-1/2 h-3 bg-slate-300"></p>
          <p class="w-20 h-3 bg-slate-300"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AlbumListItem from '@/components/AlbumListItem'

export default {
  name: 'AlbumList',
  components: {
    AlbumListItem
  },
  computed: {
    albums() {
      return this.$store.state.albums
    },
    isFetching() {
      return this.$store.state.isFetching
    }
  },
}
</script>

<style scoped>

</style>