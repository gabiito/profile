<template>
    <li class="nav-item">
        <UtilsDropDown
            :links="links"
        >
            <template #button>
                <NavResumeLink />
            </template>        
        </UtilsDropDown>
    </li>
</template>

<script>
export default {
    name: 'UtilsResume',
    computed: {
        links() {
            return [
                {
                    asset: '/resume/Gabriel_Zerbino_-_Resume.pdf',
                    text: 'Download in english'
                },
                {
                    asset: '/resume/Gabriel_Zerbino_-_Curriculum_Vitae.pdf',
                    text: 'Download in spanish'
                }
            ]
        }
    }
}
</script>