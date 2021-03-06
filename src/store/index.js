import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import APIKEY from '@/store/APIKEY'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    isFetching: false,
  },
  getters: {
  },
  mutations: {
    updateAlbums(state, albums) {
      state.albums = albums
    },
    toggleFetchingStatus(state) {
      state.isFetching = !state.isFetching
    },
  },
  actions: {
    async fetchAlbums({commit}, keyword) {
      if (!keyword) {
        return commit('updateAlbums', [])
      }

      const LAST_FM_ALBUM_SEARCH_URL = 'https://ws.audioscrobbler.com/2.0/'
      const API_KEY = APIKEY

      const params = {
        method: 'album.search',
        album: keyword,
        api_key: API_KEY,
        format: 'json',
      }

      commit('toggleFetchingStatus')
      const response = await axios.get(LAST_FM_ALBUM_SEARCH_URL, {params})
      commit('toggleFetchingStatus')
      const albums = response.data.results.albummatches.album

      commit('updateAlbums', albums)
    },
  },
  // modules: {},
})
