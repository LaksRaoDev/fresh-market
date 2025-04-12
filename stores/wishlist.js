import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToWishlist(product) {
      if (!this.items.find((item) => item.title === product.title)) {
        this.items.push(product)
      }
    },
    removeFromWishlist(product) {
      this.items = this.items.filter((item) => item.title !== product.title)
    },
    clearWishlist() {
      this.items = []
    },
  },
  getters: {
    wishlistCount: (state) => state.items.length,
  },
  persist: true, // Optional: use pinia-plugin-persistedstate for persistent wishlist
})
