<script>
    import Avatar from "$lib/components/simulacrum/Avatar.svelte";
    import Stat from "$lib/components/simulacrum/Stat.svelte";
    import CategoryIcon from "../../lib/components/simulacrum/CategoryIcon.svelte";

    export let data;
    let showReruns = true;
    let highlightUniqueBanners = false;
</script>

<h1>Banners</h1>
<p>
    <strong>Global</strong> has had <strong>{data.global.length}</strong>
    total banners, <strong>24</strong> unique banners, and <strong>7</strong>
    additions to the standard banner. The newest character is
    <strong>Ling Han</strong>.
</p>

<label>
    <input type="checkbox" bind:checked={showReruns} /> Show Reruns
</label>
<label>
    <input type="checkbox" bind:checked={highlightUniqueBanners} /> Highlight Unique
    Banners (first run)
</label>

<small>✨ Unique Banner</small>

<ol class="full-bleed" reversed>
    {#each data.global as banner}
        {#if showReruns || !banner.is_rerun}
            <li class:unique={highlightUniqueBanners && !banner.is_rerun}>
                <span class="number">{banner.bannerNo}</span>
                <a style="display: flex; position: relative;" href={banner.path} tabindex="-1">
                    {#if !banner.is_rerun}
                        <span style="position: absolute; bottom: 0; right: 0; font-size: var(--step-0)">✨</span>
                    {/if}
                    
                    <Avatar
                        name={banner.simulacrum}
                        cnName={banner.cnName}
                        width="64"
                        height="64"
                    />
                </a>
                <div class="name-dates">
                    <h2 style="color: var(--element-{banner.element})">
                        {#if highlightUniqueBanners}
                            <!-- <span class="visually-hidden">First run:</span> -->
                        {/if}
                        <a href={banner.path}>{banner.simulacrum} </a>
                    </h2>
                    <a
                        href={banner.details_link}
                        class="dates"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        title="View on the official website"
                    >
                        {new Date(banner.start).toLocaleDateString()} ー
                        {new Date(banner.end).toLocaleDateString()}
                    </a>
                </div>
                <div style="display: flex">
                    <Stat name="Type" value={banner.type} iconOnly />
                    <Stat name="Element" value={banner.element} iconOnly />
                </div>
            </li>
        {/if}
    {/each}
</ol>

<style lang="scss">
    ol {
        gap: 0;
        padding: 0;
        list-style-position: inside;
    }

    li {
        padding: 0.5rem 1rem;
        background: var(--surface2);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: relative;
        line-height: unset;

        & + li {
            border-top: 1px solid var(--surface3);
        }
    }

    .number {
        // font-weight: 800;
        color: var(--accent);
        color: var(--text2);
        font-size: var(--step--2);
        // flex-basis: 2.3ch;
        // margin-left: 0.75rem;
        // position: absolute;
        // align-self: end;
        // left: 0.5rem;
        // top: 0.5rem;
        opacity: 0.7;

        &::before {
            content: '#';
        }
    }

    h2 {
        text-transform: unset;
        font-weight: bold;
        font-size: var(--step-0);
        margin: 0;
        line-height: 1.75;
    }

    a {
        border: none;

        &:hover {
            color: unset;
        }
    }

    .name-dates {
        flex-basis: 22ch;
    }

    .dates {
        margin: 0;
        font-size: var(--step--2);
        color: var(--text2);

        &:hover {
            color: var(--accent);
        }
    }

    .unique {
        outline: 2px solid var(--accent);
        background: var(--surface3);
        z-index: 1;
    }
</style>
