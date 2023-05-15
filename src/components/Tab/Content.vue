<template>
    <div class="job-content" :class="{ active }">
        <div class="title">
            <h3>
                {{ title }}
                <span class="company">
                    <a :href="companyLink" target="_blank">@{{ company }}</a>
                </span>
            </h3>
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-code" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M20 21l2 -2l-2 -2" />
                    <path d="M17 17l-2 2l2 2" />
                </svg>
                <div class="date">
                    {{ date }}
                </div>
            </div>
        </div>
        <div class="description">
            <p v-for="(item, index) in task" :key="index">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    active: Boolean,
    title: String,
    company: String,
    companyLink: String,
    date: String,
    task: Array,
});
</script>

<style scoped>
.job-content {
    display: none;
}

.job-content.active {
    display: block;
}

.title {
    border-bottom: 1px solid;
    margin-bottom: 20px;
    padding-bottom: 10px;
}

h3 {
    padding: 0 0 10px 0;
}

.info {
    display: flex;
    align-items: center;
    gap: 10px;
}

p {
    position: relative;
    line-height: 1.5;
    padding-left: 20px;
    margin-bottom: 10px
}

p::before {
    content: '→';
    position: absolute;
    color: var(--primary-color);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

</style>