const { createApp } = Vue;

createApp({
    data() {
        return {
            previewUrl: null,
            isLoading: false,
            analysis: null,
            calories: null,
            entries: [],
            selectedFile: null
        }
    },
    computed: {
        todayTotal() {
            return this.entries.reduce((sum, entry) => sum + Number(entry.calories), 0)
        }
    },
    methods: {
        // ... existing methods ...
    },
    mounted() {
        this.loadFromLocalStorage()
    }
}).mount('#app') 