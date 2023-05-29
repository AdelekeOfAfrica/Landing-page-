<script setup>
document.addEventListener('DOMContentLoaded', function() {
  var dropdownIcon = document.getElementById('dropdown-icon');
  var dropdownContent = document.getElementById('dropdown-content');

  dropdownIcon.addEventListener('click', function() {
    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  });
});
</script>

<template>

<div class = "container
 flex 
 justify-between 
 items-center 
 mx-auto 
 py-6
 px-8
 md:px-14
 lg:px-24
 w-full">
    <div class="text-lg font-bold"> Online Mechanic </div>
    <!--web view -->
    <div class="hidden
     md:flex
     space-x-12
     items-center" >
        <a href="#" class="text-selected-text">Home</a>
        <a href="#work">Our works </a>
        <a href="#clients">Clients</a>
        <a href="#hire">
            <button class="
            px-6
            py-2
            bg-theme
            font-bold"> Hire Us </button>
        </a>  
    </div>
    <!--mobile view-->
    <div class="hidden" id="dropdown-content" >
        <div class="relative inline-block">
            <ul class="absolute right-100 w-40 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-10">
                <li class="bg-body text-white py-2 px-4 hover:bg-theme dark:hover:bg-theme"><a href="#" class="text-selected-text">Home</a></li>
                <li class="bg-body text-white py-2 px-4 hover:bg-theme dark:hover:bg-theme"><a href="#">Our Works</a></li>
                <li class="bg-body text-white py-2 px-4 hover:bg-theme dark:hover:bg-theme"><a href="#">Client</a></li>
                <li class="bg-theme text-white py-2 px-6 font-bold"> <a href="#">Hire Us</a> </li>
            </ul>
        </div>
    </div>
    <!--end of mobile view-->
    <div class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" id="dropdown-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>

    </div>
</div>
</template>

<style scoped>
</style>
