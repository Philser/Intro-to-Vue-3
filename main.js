const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            index = this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        }
    }
})
