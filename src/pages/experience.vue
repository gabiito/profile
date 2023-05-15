<template>
    <div id="experience">
        <h2>My experience</h2>

        <div class="tabs-wrapper">
            <div class="tabs-titles">
                <TabTitle v-for="(item, index) in data" 
                    :key="index" 
                    :title="item.title" 
                    :company="item.company"
                    :date="item.date" 
                    :active="index === activeTab" 
                    @click="handleClick(index)"
                />
                <div class="tab-slider"
                    :style="{
                        height: tabHeight,
                        transform: `translateY(calc(${activeTab} * ${tabHeight}))`
                    }"
                >
                </div>
            </div>
            <div class="tabs-content">
                <TabContent v-for="(item, index) in data" 
                    :key="index" 
                    :title="item.title" 
                    :company="item.company"
                    :companyLink="item.companyLink" 
                    :date="item.date" 
                    :active="index === activeTab" 
                    :task="item.task">
                </TabContent>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        title: 'Fullstack Analyst',
        company: 'Fenicio',
        companyLink: 'https://fenicio.io',
        date: '2021 - 2023',
        task: [
            'Integrate new features to the platform.',
            'Create new modules and features for the platform.',
            'Resolve issues related to the platform and its modules.',
            'Attend to clients and help them with their issues.',
            'Work alongside the project manager to lead the resaerch and development of new features. Bring new ideas to the table.',
            'Provide leadership and guidance to the team.',
            'Collaborate with other teams to provide the best experience to the clients.',
        ],
    },
    {
        title: 'Technical Tutor',
        company: 'Facebook',
        companyLink: 'https://facebook.com',
        date: '2017 - 2019',
        task: [
            'Introduce new topics to the students and help them understand the concepts.',
            'Follow up on the students progress. Help them with their issues and provide feedback of their progress throughout the course.',
            'Collaborate with other tutors to provide the best experience to the students.',
            'Provide new ideas to the team to improve the students experience throughout the course.',
            'Make corrections to the students projects and provide feedback to them.',
            'Generate new content for the course topics, as well as new side projects for the students to work on.',
        ],
    },
    {
        title: 'Freelance Developer',
        company: 'Myself',
        companyLink: 'https://gzerbino.dev',
        date: '2018 - 2021',
        task: [
            'As a freelancer I have worked on a few projects, some of them are:',
            'A website for a local B2B company, which allows them to show their products and services to their clients.',
            'As well as a webapp for this local business, which allows them to show all their clients with their respective contact information and other details.',
            'A landing page for a local business, which allows them to show their services and contact information.',
        ],
    }
];

const nuxtApp = useNuxtApp();

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'My Experience',
});

const activeTab = ref(0);

const tabHeight = ref(0);

nuxtApp.hook('page:transition:finish', () => {
    calculateTabHeight();
});

onMounted(() => {
    calculateTabHeight();
    window.addEventListener('resize', calculateTabHeight);
});

function calculateTabHeight() {
    const jobTab = document.querySelector('.job-title');
    if (jobTab) {
        try {
            tabHeight.value = jobTab.clientHeight + 'px';
        }
        catch (error) {
            // console.log(error);
        }
    }
}


function handleClick(index) {
    activeTab.value = index;

    if (window.innerWidth < 1024) {
        queueMicrotask(() => {
            const tab = document.querySelector('.job-title.active');
            tab.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
}


</script>

<style scoped>
.tabs-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
}

.tabs-titles {
    display: flex;
    flex-direction: column;
    position: relative;
    height: max-content;
    align-self: center;
}

.tabs-titles::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: var(--text-color);
    position: absolute;
    top: 0;
    left: 0;
}

.tab-slider {
    width: 2px;
    height: var(--tab-height);
    background-color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
}


@media screen and (max-width: 1024px) {
    .tabs-wrapper {
        grid-template-columns: 1fr;
    }
    .tabs-titles {
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .tabs-titles::before {
        display: none;
    }
    .tabs-titles::-webkit-scrollbar {
        display: none;
    }
    .tab-slider {
        display: none;
    }
}
</style>