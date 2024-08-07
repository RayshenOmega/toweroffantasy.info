import { DateTime } from "luxon";
import lodash from 'lodash';
import deepdash from 'deepdash-es';
const _ = deepdash(lodash);

// Filters by whether the entry is CURRENTLY in standard banner. For example, Alyss was moved to standard banner, despite having limited banners in the past, so she will appear when "standard" is selected. For a list of all characters that appeared in a limited banner, users should check the Banners page.

const nonStandardMatrices = ["matrix_ssr25", "matrix_ssr26", "matrix_n2", "matrix_n1"]

export function getBannersMatch(selectedBanners, entry) {
    const bannersParam = selectedBanners.map(obj => obj.value)
    const hasBanners = entry.banners?.length > 0;
    const movedToStandardBanner =
        entry.banners?.some((banner) => banner.isFinalBanner) &&
        entry.banners?.every((banner) => {
            const end = DateTime.fromISO(banner.endDate)
            const now = DateTime.now()
            return end < now
        });

    let passesLimitedCheck = true
    let passesStandardCheck = true

    if (bannersParam.includes("limited")) {
        passesLimitedCheck = hasBanners && !movedToStandardBanner
    }

    if (bannersParam.includes("standard")) {
        passesStandardCheck = (!hasBanners || movedToStandardBanner) && !nonStandardMatrices.includes(entry.id)
    }

    return passesLimitedCheck && passesStandardCheck
}

export function applyFilters(entries, { q = "", queryKey = "name", version = "all", rarity = [], type = "all", typeKey = "type", stars = "all", effects = [], banners = [], element = [], category = [] }) {
    return entries.filter((entry) => {

        const searchMatch = q
            ? entry[queryKey]?.toLowerCase().includes(q.toLowerCase())
            : true;

        const versionMatch =
            version && version !== "all" ? entry.version === version : true;

        const rarityMatch =
            rarity?.length > 0
                ? rarity.some(obj => obj.value === entry.rarity)
                : true;

        const typeMatch =
            type && type !== "all" ? entry[typeKey] === type : true;

        const starsMatch = stars !== "all" ? entry.stars == stars : true;

        const effectsMatch =
            effects?.length > 0
                ? effects.some((obj) => entry.categories.includes(obj.value))
                : true;

        const bannersMatch = banners ? getBannersMatch(banners, entry) : true;

        const elementMatch =
            element?.length > 0
                ? element.some((obj) => entry.element === obj.value || entry.weapon?.element === obj.value)
                : true;

        const categoryMatch =
            category?.length > 0
                ? category.some((obj) => entry.category === obj.value || entry.weapon?.category === obj.value)
                : true;

        return searchMatch && versionMatch && rarityMatch && typeMatch && starsMatch && effectsMatch && bannersMatch && elementMatch && categoryMatch
    });
}

// Removes "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp" from image links in favor of using assets from this repo
export function clean(obj) {
    return _.mapValuesDeep(obj,
        (v) => {
            if (typeof v === "string") {
                let localFilePath = "/Hotta/Content/Resources";
                if (v.includes("/L10N") || v.includes("/ResourcesOverSea")) localFilePath = "/Hotta/Content";
                return v.replace("https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp", localFilePath)
            }
            return v
        },
        { leavesOnly: true }
    )
}

export function processCosmetics (data) {
    const { avatars, frames } = data

    // Outfits "Headwear" are actually accessories
    const outfits = data.outfits.map(item => ({ ...item, type: item.type.replace("Headwear", "Accessory") }))

    // Consumables contains many types which must be discerned by their id
    const consumables = data.consumables.reduce((items, item) => {
        if (item.id.startsWith("hat_")) {
            items.push({ ...item, type: "Headwear" })
        }
        else if (item.id.includes("chat_")) {
            if (item.id.includes("chat_qipao")) {
                // These don't have icon versions, but they have the full chat bubble image
                if (["chat_qipao_iw_2", "chat_qipao_iw_3", "chat_qipao_iw_4"].includes(item.id)) {
                    item.icon = item.icon.replace("icon_", "")
                }
                items.push({ ...item, type: "ChatBubble" })
            }
            else if (item.id.includes("chat_emoji")) items.push({ ...item, type: "Emoji" })
        }
        return items
    }, [])

    return { outfits, avatars, frames, consumables }
}