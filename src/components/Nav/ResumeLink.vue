<template>
    <div class="resume">
        <IconsFileDownload />
        Resume
    </div>
</template>

<style scoped>
.resume {
    display: flex;
    align-items: center;
    color: var(--primary-color);
    text-transform: uppercase;
    gap: 5px;
    background: none;
    border-radius: 3px;
    border: 1px solid transparent;
    padding: 5px 10px 5px 5px;
    transition: all 0.3s ease-in-out;
}

.resume:hover {
    border-color:  var(--primary-color);
}

.resume:hover .icon {
    animation: bounce 2.5s ease-in-out infinite;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    10% {
        transform: translateY(4px);
    }
    20% {
        transform: translateY(2px);
    }
    30% {
        transform: translateY(4px);
    }
    40% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}

@media screen and (max-width: 1024px) {
    .resume {
        border-color: var(--primary-color);
        justify-content: center;
    }

    .resume:hover .icon{
        animation: none;
    }
    
}
</style>