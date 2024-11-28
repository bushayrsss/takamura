import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);
    const totalItems = computed (() => items.value.reduce((total, item) => total + item.count, 0));
    const totalPrice = computed(() => items.value.reduce((total, item) => total + item.price * item.count, 0));

        const addToCart = (product: any) => {
        const existingItem = items.value.find((item) => item.id === product.id);
             if (existingItem) {
                 existingItem.count++;
             } else {
                 items.value.push({...product, count: 1})
             }
        };

        const minusToCard = (product: any) => {
            const existingItem = items.value.find((item) => item.id === product.id);
            console.log(existingItem)
            if (existingItem.count === 1) {
                items.value.pop()

            } else if (existingItem) {
                existingItem.count--
            }
        };

        const removeFromCart = (productId: number) => {
            items.value = items.value.filter((item) => item.id !== productId);
        };

        const clearCart = () => {
            items.value = [];
        };



        return { items, totalItems, totalPrice, addToCart,removeFromCart, clearCart, minusToCard };
});