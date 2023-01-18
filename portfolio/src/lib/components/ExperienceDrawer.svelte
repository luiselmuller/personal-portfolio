<script>
    export let workplace = "";
    export let jobTitle = "";
    export let city = "";
    export let startDate = "";
    export let endDate = "";
    export let tasks = [""];

    let open = false;
</script>

<!-- TODO: Make responsive -->
<article class="min-w-[750px] w-fit bg-secondary-background rounded-xl shadow-xl
    {open ? 'h-96' : 'h-[72px]'} transition-[height] duration-100 ease-linear">
    <div class="w-full flex flex-col justify-center items-center gap-5">
        <button type="button" on:click={() => open = !open} class="w-full flex items-center justify-between px-5 pt-5 outline-none
            {open ? '' : 'pb-5'}">
            <h2 class="text-2xl font-semibold mr-10">
                <!-- TODO: Put a link that goes to the company website -->
                {workplace} - {jobTitle}
            </h2>
            <div class="{open ? '-rotate-180' : 'rotate-0'} transition-all duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </button>
        <div class="text-xl w-full justify-center gap-10 flex-col p-5 {open ? 'flex' : 'hidden'}">
            <span class="italic">{city} . {startDate} - {endDate}</span>
            <ul>
                {#each tasks as task}
                    <li class="ml-5 my-5">
                        {task}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</article>