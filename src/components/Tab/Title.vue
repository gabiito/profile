<template>
    <div class="job-title" :class="{ active }">
        <h3>{{ title }}</h3>
        <div class="info">
            <div class="company">
                {{ company }}
            </div>
            <div class="date">
                {{ date }}
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    index: Number,
    title: String,
    company: String,
    date: String,
    active: Boolean,
});

</script>

<style scoped>

.job-title {
    cursor: pointer;
    padding: 5px;
    padding-left: 20px;

}

.job-title:hover {
    background-color: var(--accent-background-color);
}

.job-title h3 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
}

.info {
    margin-left: 10px;
    font-size: .6rem;
}

.company {
    font-size: .8rem;
}

.job-title.active h3 {
    color: var(--primary-color);
}

@media screen and (max-width: 1024px) {
    .job-title {
        padding: 20px;
        width: max-content;
    }

    .job-title h3 {
        font-size: 1.2rem;
        width: max-content;
    }

    .info {
        display: none;
    }

    .job-title.active {
        background-color: var(--accent-background-color);
    }
}

</style>