<template>
    <div class="side-links-wrapper">
        <ul class="side-links">
            <li class="side-item">
                <a  href="https://github.com/gabiito" 
                    class="link"
                    target="_blank">
                    <IconsGitHub />
                </a>
                <div class="link-name">GitHub</div>
            </li>
            <li class="side-item">
                <a  href="https://www.linkedin.com/in/gzerbino/" 
                    class="link"
                    target="_blank">
                    <IconsLinkedIn />
                </a>
                <div class="link-name">LinkedIn</div>
            </li>
            <li class="side-item">
                <a  href="mailto:gabozerbino@gmail.com" 
                    class="link"
                    target="_blank">
                    <IconsEmail />
                </a>
                <div class="link-name">E-mail</div>
            </li>
    
        </ul>
    </div>
</template>

<style scoped>
.side-links-wrapper {
    position: fixed;
    bottom: 100px;
    left: 30px;
    z-index: 1;
}

.side-links-wrapper::after {
    content: "";
    position: absolute;
    top: 120%;
    left: 50%;
    height: 100px;
    width: 1px;
    background-color: var(--text-color);
}

.side-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    list-style: none;
}

.side-item {
    transition: all 0.3s ease-in-out;
    position: relative;
}

.side-item::before {
    content: '';
}

.side-item:hover {
    transform: translateY(-5px);
}

.link {
    color: var(--accent-color);
}
.side-item:hover .link {
    
color: var(--primary-color);
}
.link-name {
    position: absolute;
    width: max-content;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-color-light);
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.side-item:hover .link-name {
    opacity: 1;
    left: 120%;
}

@media screen and (max-width: 1024px) {
    .side-links-wrapper  {
        display: none;
    }    
}
</style>