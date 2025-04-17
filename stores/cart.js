// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    cartCount: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((p) => p.title === product.title)
      const qtyToAdd = product.quantity || 1 

      if (existing) {
        existing.qty += qtyToAdd
      } else {
        this.items.push({ ...product, qty: qtyToAdd })
      }
    },

    updateQty(title, qty) {
      const item = this.items.find((p) => p.title === title)
      if (item && qty >= 1) {
        item.qty = qty
      }
    },

    removeFromCart(title) {
      this.items = this.items.filter((p) => p.title !== title)
    },

    clearCart() {
      this.items = []
    }
  }
})
