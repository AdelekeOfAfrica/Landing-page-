<template>
    <div class="container 
    justify-between 
    items-center
    mx-auto
    mt-16 
    flex px-8
    md:px-14
    lg:px-24
    w-full
    opacity-0 animate-fade-in-down">

  <!--nav menu section-->

        <div class="flex flex-wrap md:flex-nowrap">
            <nav class ="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    <a  href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </a>

                    <a  href="#work" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Works</span>
                    </a>

                    <a  href="#clients" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Client</span>
                    </a>

                    <a  href="#hire" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                    </a>
                </div>
            </nav>
            <!--left content and button -->
            <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left ">We<br>Fix All Types <br>Of Brands </h1>
                <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <span>Our works.</span>
                </button>
            </div>
            <!--end of the left content -->

            <!--adding of images-->
            <img src="https://www.pngmart.com/files/10/Car-Engine-PNG-HD.png" alt="shop" class="w-1/2 mt-16 md:absolute -mt-6 md:mt-0 right-0 -z-1 " />
            <!--ending of adding images -->
            
        </div>
    </div>
</template>

<script setup>
function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
  return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
});

document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

const navDots = document.querySelectorAll(".nav-dot");
const selectedIndex = [...document.querySelectorAll('h1, h2')].indexOf(titles[0]);
if (selectedIndex >= 0 && selectedIndex < navDots.length) {
  navDots[selectedIndex].classList.add("selected-circle");
}
}
updateList();
window.addEventListener('scroll', () => {
    updateList();
})
</script>