<script>
    import leftBlob from '$lib/assets/left-blob.svg'
    import rightBlob from '$lib/assets/right-blob.svg'

    // Importing "information" arrays
    import { navigationLinks, socials, skills, experience, education, projects } from '$lib/info.js'

    // Component imports
    import ExperienceDrawer from '$lib/components/ExperienceDrawer.svelte'
  import { onMount } from 'svelte';

    let backToTopDisp = false;

    const scrollFunc = () => {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            backToTopDisp = true;
        }
        else {
            backToTopDisp = false;
        }
    }

    const backTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    onMount(() => {
        window.onscroll = function() {scrollFunc()};
    })

</script>
<!-- TODO: Make responsive and animate -->
<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!-- Right blob navigation -->
<nav class="text-background absolute top-0 right-0 z-50 text-4xl flex flex-row items-center justify-center gap-10
    px-12 py-10 group">
    <ul class="flex flex-col gap-10">
        {#each navigationLinks as nav (nav.id)}
            <li>
                <a class="flex justify-start capitalize w-[185px] z-50 rounded-lg hover:-translate-y-[4px]
                    hover:-translate-x-[4px] transition-all duration-200 active:translate-x-0 active:translate-y-0 hover:shadow-button
                    active:shadow-none" href="{'#' + nav.section}">
                    {nav.name}
                </a>
            </li>
        {/each}
    </ul>
    <svg width="17" height="464" viewBox="0 0 17 464" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 0.995544C4.08172 0.995544 0.5 4.57727 0.5 8.99554C0.5 13.4138 4.08172 16.9955 8.5 16.9955C12.9183 16.9955 16.5 13.4138 16.5 8.99554C16.5 4.57727 12.9183 0.995544 8.5 0.995544ZM8.5 448C4.08172 448 0.5 451.582 0.5 456C0.5 460.418 4.08172 464 8.5 464C12.9183 464 16.5 460.418 16.5 456C16.5 451.582 12.9183 448 8.5 448ZM7 8.99554V10.9911H10V8.99554H7ZM7 14.9822V18.9733H10V14.9822H7ZM7 22.9644V26.9555H10V22.9644H7ZM7 30.9467V34.9378H10V30.9467H7ZM7 38.9289V42.92H10V38.9289H7ZM7 46.9111V50.9022H10V46.9111H7ZM7 54.8933V58.8844H10V54.8933H7ZM7 62.8755V66.8667H10V62.8755H7ZM7 70.8578V74.8489H10V70.8578H7ZM7 78.84V82.8311H10V78.84H7ZM7 86.8222V90.8133H10V86.8222H7ZM7 94.8044V98.7956H10V94.8044H7ZM7 102.787V106.778H10V102.787H7ZM7 110.769V114.76H10V110.769H7ZM7 118.751V122.742H10V118.751H7ZM7 126.733V130.724H10V126.733H7ZM7 134.716V138.707H10V134.716H7ZM7 142.698V146.689H10V142.698H7ZM7 150.68V154.671H10V150.68H7ZM7 158.662V162.653H10V158.662H7ZM7 166.644V170.635H10V166.644H7ZM7 174.627V178.618H10V174.627H7ZM7 182.609V186.6H10V182.609H7ZM7 190.591V194.582H10V190.591H7ZM7 198.573V202.564H10L10 198.573H7ZM7 206.555V210.547H10V206.555H7ZM7 214.538V218.529H10V214.538H7ZM7 222.52V226.511H10V222.52H7ZM7 230.502V234.493H10V230.502H7ZM7 238.484V242.475H10V238.484H7ZM7 246.466V250.458H10V246.466H7ZM7 254.449V258.44H10V254.449H7ZM7 262.431V266.422H10V262.431H7ZM7 270.413V274.404H10V270.413H7ZM7 278.395V282.386H10V278.395H7ZM7 286.378V290.369H10V286.378H7ZM7 294.36V298.351H10V294.36H7ZM7 302.342V306.333H10V302.342H7ZM7 310.324V314.315H10V310.324H7ZM7 318.307V322.298H10V318.307H7ZM7 326.289V330.28H10V326.289H7ZM7 334.271V338.262H10V334.271H7ZM7 342.253V346.244H10V342.253H7ZM7 350.236V354.227H10V350.236H7ZM7 358.218V362.209H10V358.218H7ZM7 366.2V370.191H10V366.2H7ZM7 374.182V378.173H10V374.182H7ZM7 382.164V386.156H10V382.164H7ZM7 390.147V394.138H10V390.147H7ZM7 398.129V402.12H10V398.129H7ZM7 406.111V410.102H10V406.111H7ZM7 414.093V418.085H10V414.093H7ZM7 422.076V426.067H10V422.076H7ZM7 430.058V434.049H10V430.058H7ZM7 438.04V442.031H10V438.04H7ZM7 446.022V450.013H10V446.022H7ZM7 454.005V456H10V454.005H7Z" fill="#001220"/>
    </svg>
</nav>
<img alt="Svg blob shape" src={rightBlob} class="absolute right-0 top-0">

<!-- Left blob socials -->
<div class="text-background absolute left-0 bottom-0 z-50 text-4xl flex flex-row items-center justify-center gap-10 px-12 py-12">
    <svg width="17" height="464" viewBox="0 0 17 464" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 0.995544C4.08172 0.995544 0.5 4.57727 0.5 8.99554C0.5 13.4138 4.08172 16.9955 8.5 16.9955C12.9183 16.9955 16.5 13.4138 16.5 8.99554C16.5 4.57727 12.9183 0.995544 8.5 0.995544ZM8.5 448C4.08172 448 0.5 451.582 0.5 456C0.5 460.418 4.08172 464 8.5 464C12.9183 464 16.5 460.418 16.5 456C16.5 451.582 12.9183 448 8.5 448ZM7 8.99554V10.9911H10V8.99554H7ZM7 14.9822V18.9733H10V14.9822H7ZM7 22.9644V26.9555H10V22.9644H7ZM7 30.9467V34.9378H10V30.9467H7ZM7 38.9289V42.92H10V38.9289H7ZM7 46.9111V50.9022H10V46.9111H7ZM7 54.8933V58.8844H10V54.8933H7ZM7 62.8755V66.8667H10V62.8755H7ZM7 70.8578V74.8489H10V70.8578H7ZM7 78.84V82.8311H10V78.84H7ZM7 86.8222V90.8133H10V86.8222H7ZM7 94.8044V98.7956H10V94.8044H7ZM7 102.787V106.778H10V102.787H7ZM7 110.769V114.76H10V110.769H7ZM7 118.751V122.742H10V118.751H7ZM7 126.733V130.724H10V126.733H7ZM7 134.716V138.707H10V134.716H7ZM7 142.698V146.689H10V142.698H7ZM7 150.68V154.671H10V150.68H7ZM7 158.662V162.653H10V158.662H7ZM7 166.644V170.635H10V166.644H7ZM7 174.627V178.618H10V174.627H7ZM7 182.609V186.6H10V182.609H7ZM7 190.591V194.582H10V190.591H7ZM7 198.573V202.564H10L10 198.573H7ZM7 206.555V210.547H10V206.555H7ZM7 214.538V218.529H10V214.538H7ZM7 222.52V226.511H10V222.52H7ZM7 230.502V234.493H10V230.502H7ZM7 238.484V242.475H10V238.484H7ZM7 246.466V250.458H10V246.466H7ZM7 254.449V258.44H10V254.449H7ZM7 262.431V266.422H10V262.431H7ZM7 270.413V274.404H10V270.413H7ZM7 278.395V282.386H10V278.395H7ZM7 286.378V290.369H10V286.378H7ZM7 294.36V298.351H10V294.36H7ZM7 302.342V306.333H10V302.342H7ZM7 310.324V314.315H10V310.324H7ZM7 318.307V322.298H10V318.307H7ZM7 326.289V330.28H10V326.289H7ZM7 334.271V338.262H10V334.271H7ZM7 342.253V346.244H10V342.253H7ZM7 350.236V354.227H10V350.236H7ZM7 358.218V362.209H10V358.218H7ZM7 366.2V370.191H10V366.2H7ZM7 374.182V378.173H10V374.182H7ZM7 382.164V386.156H10V382.164H7ZM7 390.147V394.138H10V390.147H7ZM7 398.129V402.12H10V398.129H7ZM7 406.111V410.102H10V406.111H7ZM7 414.093V418.085H10V414.093H7ZM7 422.076V426.067H10V422.076H7ZM7 430.058V434.049H10V430.058H7ZM7 438.04V442.031H10V438.04H7ZM7 446.022V450.013H10V446.022H7ZM7 454.005V456H10V454.005H7Z" fill="#001220"/>
    </svg>
    <ul class="flex flex-col gap-10 items-center justify-center">
        {#each socials as social (social.id)}
            <li>
                <a class="flex justify-start items-center gap-10 capitalize w-[255px] bg-primary z-50 rounded-lg hover:-translate-y-[4px]
                    hover:translate-x-[4px] transition-all duration-200 active:translate-x-0 active:translate-y-0 hover:shadow-button-two
                    active:shadow-none py-1" href={social.link} target="_blank" rel="noreferrer noopener">
                    <img src={social.svg} alt="{social.name} icon">
                    {social.name}
                </a>
             </li>
            {/each}
        </ul>
</div>
<img alt="Svg blob shape" src={leftBlob} class="absolute left-0 bottom-0">

<h2 class="text-grayish-white text-4xl font-semibold pt-5 px-6 absolute">
    Luisel Muller <span class="text-red-400 text-sm">*portfolio currently in development and is not responsive</span>
</h2>

<main>
    <!-- Back to top button -->
    <button type="button" class="z-50 fixed bottom-0 right-0 mr-10 mb-10 p-3 bg-primary hover:bg-primary-hover rounded-full
        {backToTopDisp ? '' : 'hidden'}" on:click={() => backTop()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>

    <!-- Landing page -->
    <section class="h-screen text-grayish-white">
        <article class="w-fit h-fit translate-x-[300px] translate-y-[190px]">
            <h1 class="font-bold text-6xl">
                Hello and welcome to my portfolio!
            </h1>
            <p class="text-4xl mt-4">
                My name is <span class="text-primary font-semibold">Luisel</span> and I'm a <span class="font-semibold text-primary">Computer Engineering Student</span>
                <br>currently on my 4th year of university.
            </p>
            <a class="w-52 h-12 bg-primary rounded-lg mt-3 float-right text-background font-semibold text-2xl
                transition-all duration-200 active:scale-95 hover:bg-primary-hover flex justify-center items-center gap-5 group"
                href="path-to-file" download="file-name" target="_blank">
                <!-- TODO:Animate icon on hover -->
                <!-- Download Icon -->
                <svg width="35" height="35" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="47" height="45" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_20_13" transform="translate(0 -0.0222222) scale(0.01 0.0104444)"/>
                    </pattern>
                    <image id="image0_20_13" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtdJREFUeJzt3T1rFEEcx/GvogaEFIKFhTa26QMptDkbEcRGtPBdWGovJBjfR+y0sFGQqIX6HmzEh07M6QlJIBa7B3fhsvOws7P/2ft9YEjg9u5m55vdHLlNAiIiIiIiInmd6nsCka4ATx3bPAS+ZpiLAGvAkWOs9Ta7Fk73PQGZpyDGKIgxCmKMghijIMac6XsCkfaA5x7biIiIiIiIyEDp/RDJQ0GMURBjFMQYBTFGQYxREGMUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxREGMUxBgFMabvIPeBrZ7nMGuLak5L6S5wQHXJzrPA+3ZxGdCT+n6HwIPA+xZvNsZ0hERJHWQaYzqWKsqiGKFRUgY5HmOpojTFCImSKshJMZYiyj2qHXQt5BGw7XisFEG2PedyWM99cK4BY/wWwXWktA3iOjJmx19gFLivxUgVpU0QxTgmRZTYIIpxgrZRYoIohkObKKFBFMNTbJSQIIoRKCaKbxDFiDSiWhDfxXuZaBvFaBB6pKQaitEgdxTF8JArimIE6DrKBMUIdp1uokyAGxn3Y1BSR1GMBFJFUYyE2kZRjA7ERikqhs9/R7gKXGi4/RfwJc10nEbAC+C85/YT4DbwprMZzcuyVjs0fwXutH2CQL5HSh9HRuu16vtCuRi7wC3gT8M2/6iOjNdZZpRQiUGgOUqxMaDcILA4StExoOwgMB+l+BhQ7t9+n7UL3Kk/z/VqqjNDCAIDCDFV+ilrcBTEGAUxRkGMURBjfF5lHThu3yD/z7Os2nDcvu96AJ8gPxy3X6b6RRxx++7awOeU9TnBRKTyybWBz/shq8C3+qPE26M6m4ybNvI5QsbY+l3yUm3iiBHiLPCW7q6TGvr4AKwEr7rDReC9gZ0rbbyr164TK8BjqvNh3ztqffwGHgHnQhbY55v6IqvATWAduBT6pAO2D/wEPgKvaH6bWURERERExIT/45V6DglHSHkAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
                    
                Resume
            </a>
        </article>

        <!-- Polygons -->
        <div class="translate-x-[620px] translate-y-[310px] absolute">
            <svg width="960" height="540" viewBox="0 0 960 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M559.5 92L645.71 133.617L667 227.089L607.331 302H511.669L452 227.089L473.29 133.617L559.5 92Z" stroke="#32d189" stroke-width="2"/>
                <path d="M838.1 34L896 61.9L910.2 124.5L870.2 174.7H806L766 124.5L780.2 61.9L838.1 34Z" stroke="#32d189" stroke-width="2"/>
                <path d="M875.646 334L913.057 351.998L922.292 392.51L896.407 425H854.884L829 392.51L838.235 351.998L875.646 334Z" stroke="#32d189" stroke-width="2"/>
                <path d="M283.6 63L359.4 99.5L378.2 181.6L325.7 247.4H241.5L189 181.6L207.8 99.5L283.6 63Z" stroke="#32d189" stroke-width="2"/>
            </svg>
        </div>

        <!-- Scroll down button -->
        <div class="absolute bottom-0 w-full flex justify-center items-center pb-5">
            <a type="button" class="text-primary text-xl uppercase font-semibold flex items-center hover:-translate-y-1 transition-all
                duration-200 ease-in-out" href="#about-me">
                <span class="opacity-30">scroll</span>
                <svg width="80" height="49" viewBox="0 0 104 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.951 48.577C70.5343 58.329 62.7126 62.86 52.486 62.17C42.2593 61.48 34.2426 56.604 28.436 47.542C22.6293 38.48 22.651 29.441 28.501 20.425C34.351 11.409 42.216 6.85498 52.096 6.76298C61.976 6.67098 69.776 11.179 75.496 20.287C81.216 29.395 81.3676 38.825 75.951 48.577Z" stroke="#32d189" stroke-width="7"/>
                    <path d="M52 24.0833V43.9166" stroke="#32d189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.9166 34L52 43.9167L42.0833 34" stroke="#32d189" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="opacity-30">down</span>
            </a>
        </div>
    </section>

    <!-- About Me -->
    <section class="h-fit" id="about-me">
        <!-- Top of the section -->
        <div class="flex justify-between">
            <svg width="594" height="217" viewBox="0 0 594 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M594 0C580.2 18.266 566.4 36.4589 552.6 54.0673C538.6 71.6758 524.8 88.6266 505.8 106.673C486.8 124.72 462.6 143.79 420 153.434C377.6 163.079 316.8 163.371 270 170.824C223.2 178.276 190.6 192.962 148 201.876C105.4 210.716 52.6 213.858 0 217V0L594 0Z" fill="#32D189"/>
            </svg>
            <h2 class="absolute translate-y-14 translate-x-36 text-5xl text-background uppercase font-semibold">
                About Me
            </h2>
    
            <!-- Polygons -->
            <svg class="mr-32 translate-y-10 -translate-x-2 opacity-40" width="960" height="194" viewBox="0 0 960 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M426.2 124L448.8 134.573L454.4 158.338L438.8 177.447H413.6L398 158.338L403.6 134.573L426.2 124Z" stroke="#32D189" stroke-width="2"/>
                <path d="M56.6 42L67.5 47.141L70.2 58.587L62.7 67.802H50.5L43 58.587L45.7 47.141L56.6 42Z" stroke="#32D189" stroke-width="2"/>
                <path d="M232 120.28L246.9 127.264L250.5 142.784L240.2 155.297H223.8L213.5 142.784L217.1 127.264L232 120.28Z" stroke="#32D189" stroke-width="2"/>
                <path d="M791 45.59L802.7 51.022L805.6 63.341L797.5 73.235H784.5L776.4 63.341L779.3 51.022L791 45.59Z" stroke="#32D189" stroke-width="2"/>
                <path d="M597 41.71L611.1 48.306L614.5 63.05L604.8 74.884H589.2L579.5 63.05L582.9 48.306L597 41.71Z" stroke="#32D189" stroke-width="2"/>
                <path d="M907 97.97L928.1 107.864L933.3 129.98L918.7 147.731H895.3L880.7 129.98L885.9 107.864L907 97.97Z" stroke="#32D189" stroke-width="2"/>
                <path d="M277.3 8L298.4 17.894L303.6 40.01L289 57.761H265.6L251 40.01L256.2 17.894L277.3 8Z" stroke="#32D189" stroke-width="2"/>
                <path d="M533.3 11L553.6 20.506L558.6 41.846L544.6 58.918H522L508 41.846L513 20.506L533.3 11Z" stroke="#32D189" stroke-width="2"/>
                <path d="M137 151.32L152.6 158.595L156.5 175.085L145.7 188.18H128.3L117.5 175.085L121.4 158.595L137 151.32Z" stroke="#32D189" stroke-width="2"/>
                <path d="M875 47.53L889.9 54.514L893.5 70.034L883.2 82.547H866.8L856.5 70.034L860.1 54.514L875 47.53Z" stroke="#32D1894" stroke-width="2"/>
            </svg>
        </div>

        <!-- Container for all sub-sections (skills, experience, etc...) -->
        <div class="flex flex-col justify-center items-center gap-10 text-grayish-white text-4xl">
            <p class="mt-16 px-24">
                As a computer engineering student with a passion for problem-solving and a desire 
                to make a difference, I’m always looking for new challenges. I’m eager to apply my 
                skills to real-world problems and make a positive impact through technology. One way 
                I hope to do this is by contributing to the open-source community by developing and 
                maintaining open-source software and libraries that can benefit the wider developer 
                community. Additionally, I plan to seek out internships and co-op opportunities where 
                I can gain hands-on experience and work on projects that have a direct impact on society.
            </p>

            <!-- Skills section -->
            <section id="skills" class="flex flex-col justify-center items-center gap-5 mt-8 w-full">
                <h2 class="uppercase text-primary font-semibold text-5xl mb-14">my skills</h2>
                <div class="w-full h-fit flex justify-center items-center gap-10 flex-wrap px-32">
                    {#each skills as skill(skill.id)}
                        <div class="w-56 h-12 rounded-xl text-[18px] flex gap-3 justify-center items-center uppercase tracking-widest font-bold
                            {skill.name === "Firebase" ? "text-black" : "text-white"}"
                            style="background-color: hsl({skill.color})">
                            
                            <img class="text-xs h-[36px] w-[36px]" src={skill.icon} alt="Icon for the {skill.name} skill">
                            {skill.name}
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Experience section -->
            <section id="experience" class="flex flex-col justify-center items-center gap-5 mt-10 w-full">
                <h2 class="uppercase text-primary font-semibold text-5xl mb-14">experience</h2>
                <div class="w-full h-fit flex flex-col justify-center items-center gap-2">
                    {#each experience as exp(exp.id)}
                        <ExperienceDrawer 
                            workplace={exp.workplace}
                            jobTitle={exp.jobTitle}
                            city={exp.city}
                            startDate={exp.startDate}
                            endDate={exp.endDate}
                            tasks={exp.tasks}
                        />
                    {/each}
                </div>
            </section>

            <!-- Education Section -->
            <section id="education" class="flex flex-col justify-center items-center gap-5 mt-10 w-full">
                <h2 class="uppercase text-primary font-semibold text-5xl mb-14">education</h2>
                <div class="w-full h-fit flex justify-center items-center gap-32 flex-wrap">
                    {#each education as edu(edu.id)}
                        <div class="flex flex-col text-xl bg-secondary-background p-5 rounded-xl gap-6 shadow-xl min-w-[550px]">
                            <h2 class="font-semibold text-2xl text-primary-hover">{edu.school}</h2>
                            <p>{edu.city}</p>
                            <p>
                                <span class="font-semibold text-primary-hover">
                                    {edu.degree}
                                </span> 
                                {edu.degreeName}
                            </p>
                            <p class="italic">
                                {edu.graduationDate}
                            </p>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Projects Section -->
            <section id="projects" class="flex flex-col justify-center items-center gap-5 mt-10 w-full mb-14">
                <h2 class="uppercase text-primary font-semibold text-5xl mb-14">project showcase</h2>
                <div class="w-full h-fit flex justify-center items-center gap-10 flex-wrap">
                    {#each projects as project(project.id)}
                        <div class="flex flex-col text-xl bg-secondary-background rounded-xl gap-6 shadow-xl w-80 h-[400px]
                        items-center">
                            <img src={project.imageLink} alt="{project.title} screenshot" class="h-[180px]
                            w-full rounded-t-xl">
                            <h2 class="font-semibold">{project.title}</h2>
                            <a target="_blank" class="underline italic hover:text-primary-hover text-primary" href={project.projectLink}
                                rel="noreferrer noopener">See the project here</a>

                            <!-- Categories -->
                            <div class="flex flex-wrap flex-row gap-2 justify-center items-center">
                                {#each project.categories as cat}
                                    <div class="text-[16px] border-[1px] border-grayish-white rounded-2xl px-2">
                                        {cat}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>

                <a class="text-xl text-primary font-semibold underline rounded-md p-2 cursor-pointer hover:text-primary-hover" rel="noreferrer noopener"
                    target="_blank" href="https://github.com/luiselmuller">
                    See more on my GitHub
                </a>
            </section>

        </div>
    </section>
</main>

<footer id="contact-me" class="h-fit bg-secondary-background pt-14">
    <!-- Contact Me -->
    <article class="flex flex-col justify-center items-center h-full w-full p-4 gap-4">
        <div class="flex justify-center items-center w-full">
           <form action="https://formsubmit.co/luiselmuller@gmail.com" method="POST"
                class="flex justify-center items-center flex-col gap-2 w-full mb-16">
                <h2 class="uppercase text-3xl text-primary font-semibold">contact me</h2>
                <input type="text" name="name" placeholder="Name" required class="w-[500px] h-10 p-5 rounded-lg bg-gray-900 text-gray-400 
                    border-[1px] border-gray-400">
                <input type="email" name="email" placeholder="Email" required class="w-[500px] h-10 p-5 rounded-lg bg-gray-900 text-gray-400 
                    border-[1px] border-gray-400">
                <input type="text" name="_subject" placeholder="Subject" required class="w-[500px] h-10 p-5 rounded-lg bg-gray-900 text-gray-400 
                    border-[1px] border-gray-400">

                <!-- <input type="hidden" name="_captcha" value="false"> -->
                <input type="text" name="_honey" style="display:none">

                <textarea placeholder="Your Message" class="form-control w-[500px] p-5 rounded-lg bg-gray-900 text-gray-400 
                    border-[1px] border-gray-400" name="message" rows="8" required>
                </textarea>
                
                <button type="submit" class="bg-primary hover:bg-primary-hover text-background h-10 w-[500px] rounded-lg hover:scale-105 active:scale-100
                    transition-all duration-200 ease-in-out font-bold uppercase text-lg">
                    Send
                </button>
           </form>

           <div class="w-full mb-14">
            <svg id="visual" viewBox="0 -45 940 690" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><g transform="translate(615 218)"><path d="M0 -115.5L100 -57.7L100 57.7L0 115.5L-100 57.7L-100 -57.7Z" fill="none" stroke="#32d189" stroke-width="2"></path></g><g transform="translate(437 529)"><path d="M0 -114L98.7 -57L98.7 57L0 114L-98.7 57L-98.7 -57Z" fill="none" stroke="#32d189" stroke-width="2"></path></g><g transform="translate(908 90)"><path d="M0 -28L24.2 -14L24.2 14L0 28L-24.2 14L-24.2 -14Z" fill="none" stroke="#32d189" stroke-width="2"></path></g><g transform="translate(167 274)"><path d="M0 -106L91.8 -53L91.8 53L0 106L-91.8 53L-91.8 -53Z" stroke="#32d189" fill="none" stroke-width="2"></path></g><g transform="translate(8 40)"><path d="M0 -84L72.7 -42L72.7 42L0 84L-72.7 42L-72.7 -42Z" stroke="#32d189" fill="none" stroke-width="2"></path></g><g transform="translate(924 523)"><path d="M0 -89L77.1 -44.5L77.1 44.5L0 89L-77.1 44.5L-77.1 -44.5Z" stroke="#32d189" fill="none" stroke-width="2"></path></g></g></svg>
           </div>
        </div>
        <div class="flex justify-center items-center text-grayish-white">
            <span>&#169;</span>
            <p>2023 Luisel Muller</p>
        </div>
    </article>
</footer>
<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<style>
    
</style>