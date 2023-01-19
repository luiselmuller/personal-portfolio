<script>
    import { page } from '$app/stores';
</script>

<div class="w-screen h-screen flex justify-center items-center">
    <h1 class="text-primary-hover text-2xl font-semibold">
        {$page.status}: {$page.error?.message}
    </h1>
</div>