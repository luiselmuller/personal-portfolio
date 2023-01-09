<script>
    import leftBlob from '$lib/assets/left-blob.svg'
    import rightBlob from '$lib/assets/right-blob.svg'
    import scrollBlob from '$lib/assets/scroll-blob.svg'

    // Importing "information" arrays
    import { navigationLinks, socials } from '$lib/info.js'

</script>
<!-- TODO: Make responsive and animate -->
<!-- /////////////////////////////////////////////////// -->
<header class="w-full h-16 py-5 px-6">
    <!-- Right blob navigation -->
    <nav class="text-background absolute top-0 right-0 z-50 text-4xl flex flex-row items-center justify-center gap-10
        px-12 py-12">
        <ul class="flex flex-col gap-10 items-center justify-center">
            {#each navigationLinks as nav (nav.id)}
                <li>
                    <button type="button" class="flex justify-start capitalize w-[185px] bg-primary z-50 rounded-lg hover:-translate-y-[4px]
                    hover:-translate-x-[4px] transition-all duration-200 active:translate-x-0 active:translate-y-0 hover:shadow-button
                    active:shadow-none">
                        {nav.name}
                    </button>
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

    <h2 class="text-grayish-white text-4xl font-semibold">
        Luisel Muller
    </h2>

</header>
<main>
    <!-- Landing page -->
    <section class="h-screen text-grayish-white">
        <article class="w-fit h-fit translate-x-[300px] translate-y-36">
            <h1 class="font-bold text-6xl">
                Hello and welcome to my portfolio!
            </h1>
            <p class="text-4xl mt-4">
                My name is <span class="text-primary font-semibold">Luisel</span> and I'm a <span class="font-semibold text-primary">Computer Engineering Student</span>
                <br>currently on my 4th year of university.
            </p>
            <button type="button" class="w-52 h-12 bg-primary rounded-lg mt-3 float-right text-background font-bold text-xl
                transition-all duration-200 active:scale-95 hover:bg-primary-hover">
                <!-- TODO:Animate icon on hover -->
                *icon* Resume
            </button>
        </article>

        <!-- Polygons -->
        <div class="translate-x-[720px] translate-y-[255px] absolute">
            <svg width="960" height="540" viewBox="0 0 960 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M559.5 92L645.71 133.617L667 227.089L607.331 302H511.669L452 227.089L473.29 133.617L559.5 92Z" stroke="#32d189" stroke-width="2"/>
                <path d="M838.1 34L896 61.9L910.2 124.5L870.2 174.7H806L766 124.5L780.2 61.9L838.1 34Z" stroke="#32d189" stroke-width="2"/>
                <path d="M875.646 334L913.057 351.998L922.292 392.51L896.407 425H854.884L829 392.51L838.235 351.998L875.646 334Z" stroke="#32d189" stroke-width="2"/>
                <path d="M283.6 63L359.4 99.5L378.2 181.6L325.7 247.4H241.5L189 181.6L207.8 99.5L283.6 63Z" stroke="#32d189" stroke-width="2"/>
            </svg>
        </div>

        <!-- Scroll down button -->
        <div class="absolute bottom-0 w-full flex justify-center items-center pb-5">
            <button type="button" class="text-primary text-xl uppercase font-semibold flex items-center">
                <span class="opacity-30">scroll</span>
                <img alt="Svg blob shape for scroll down button" src={scrollBlob}>
                <span class="opacity-30">down</span>
            </button>
        </div>
    </section>
    <!-- About Me -->

    <!-- Projects -->

</main>
<footer>
    <!-- Contact Me -->

</footer>
<!-- /////////////////////////////////////////////////// -->

<style>
    
</style>