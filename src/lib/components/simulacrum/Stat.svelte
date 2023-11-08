<script>
    import CategoryIcon from "./CategoryIcon.svelte";

    export let name, value, iconOnly;

    function getImgSrc(stat) {
        switch (stat) {
            // Weapon Base Stats
            case "attack":
                return "icon_atk";
            case "health":
                return "icon_hp";
            case "crit":
                return "icon_baoji";
            case "resistance":
                return "icon_resist_all";
        }
    }
</script>

{#if ["attack", "resistance", "health", "crit"].includes(name)}
    <div class="stat base-stat">
        <img
            src={`/images/UI/AttributeIcon/${getImgSrc(name)}.webp`}
            alt={name}
            width="42"
            height="42"
            loading="lazy"
        />
        <span class="gray-text uppercase">
            {name === "health"
                ? "hp"
                : name === "resistance"
                ? "resist"
                : name === "attack"
                ? "atk"
                : "crit"}
        </span>
    </div>
{:else}
    <div class="stat" class:iconOnly>
        {#if name === "Shatter" || name === "Charge"}
            <i class="tier" data-tier={value.tier}>
                {value.tier}
            </i>
            <div class="grid">
                <span class="small-text gray-text">{name}</span>
                <b class="uppercase">{value.value}</b>
            </div>
        {:else}
            <CategoryIcon type={value} width={iconOnly ? "32" : ""} />
            <div class="grid">
                <span class="small-text gray-text">{name}</span>
                <b class="uppercase">{value}</b>
            </div>
        {/if}
    </div>
{/if}

<style lang="scss">
    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex: 1;
    }

    .base-stat {
        font-size: var(--step--1);

        img {
            width: 24px;
            height: 24px;
            filter: brightness(3);
        }
    }

    .gray-text {
        color: var(--text2);
    }

    .grid {
        display: grid;
    }

    .small-text {
        font-size: var(--step--2);
    }

    .uppercase {
        text-transform: uppercase;
    }

    .tier {
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
        font-style: normal;
        font-weight: 700;
        font-size: var(--step-2);
        background: #3b3e45;
        padding: 0.25rem 0.5rem;
        transform: skewX(-9deg);

        &[data-tier="C"] {
            color: var(--tier-c);
        }
        &[data-tier="B"] {
            color: var(--tier-b);
        }
        &[data-tier="A"] {
            color: var(--tier-a);
        }
        &[data-tier="S"] {
            color: var(--tier-s);
        }
        &[data-tier="SS"] {
            color: var(--tier-ss);
        }
    }

    .iconOnly {
        flex: unset;
        gap: 0;

        span, b {
            display: none;
        }
    }
</style>
