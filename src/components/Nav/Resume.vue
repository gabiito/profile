<template>
    <li class="nav-item">
        <DropdownToggler
            :links="links"
        >
            <template #button>
                <NavResumeLink />
            </template>        
        </DropdownToggler>
    </li>
</template>

<script>
export default {
    name: 'NavResume',
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