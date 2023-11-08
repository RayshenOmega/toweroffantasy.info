<script>
    import Stat from "./Stat.svelte";
    export let weapon;
</script>

<header
    class="full-bleed"
    style={`border-color: var(--element-${weapon.element})`}
>
    {#if weapon.imgSrc.length > 0}
        <img
            src={`/images/Icon/weapon/Icon/${weapon.imgSrc}.webp`}
            alt={weapon.name}
            width="128"
            height="128"
            loading="lazy"
        />
    {:else}
        <img
            src={`/images/noimage (webp)/noimage_weapon.webp`}
            alt={weapon.name}
            width="128"
            height="128"
            loading="lazy"
        />
    {/if}
    <div class="weapon-info">
        <div class="weapon-name">
            <h3>{weapon.name}</h3>
            {#if weapon.baseStats}
                <div class="stats-wrapper">
                    {#each weapon.baseStats as stat}
                        <Stat name={stat} />
                    {/each}
                </div>
            {/if}
        </div>
        <div class="stats-wrapper">
            <Stat name="Type" value={weapon.type} />
            <Stat name="Element" value={weapon.element} />
            <Stat name="Shatter" value={weapon.shatter} />
            <Stat name="Charge" value={weapon.charge} />
        </div>
    </div>
</header>

<style lang="scss">
    header {
        background: var(--surface2);
        box-shadow: 0 0 2px var(--surface-shadow);
        padding: 0.5rem var(--space-2xs-xs);
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: center;
        margin-top: var(--space-xs);
        border-top: 3px solid transparent;
        min-height: 128px;
    }

    .weapon-info {
        display: grid;
        gap: 0.5rem;
    }

    .weapon-name {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        align-items: center;

        h3 {
            margin: 0;
            text-transform: unset;
        }
    }

    .stats-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
    }
</style>
