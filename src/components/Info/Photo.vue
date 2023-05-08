<template>
    <div class="profile-photo">
        <img :src="photo" alt="Profile photo">
    </div>
</template>

<script>
export default {
    name: 'Photo',
    props: {
        photo: {
            type: String,
            required: true,
        },
    },
};

</script>

<style scoped>

.profile-photo {
    width: 220px;
    aspect-ratio: 1/1;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 0 var(--primary-color);
    transition: all .3s ease;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1024px) {

    .profile-photo {
        width: fit-content;
    }
}

@media (prefers-reduced-motion: no-preference) {
    .profile-photo img{
        filter: grayscale(80%);
    }
    .profile-photo:hover {
        transform: translate(-5px, -5px);
        box-shadow: 10px 10px 0 var(--accent-color);
    }
    .profile-photo:hover img{
        filter: grayscale(0);
    }
}

</style>