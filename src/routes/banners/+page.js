import banners_global from "$lib/data/banners_global.json";
import { fetchAllSimulacra } from "$lib/utils";

export const load = async () => {
    const allSimulacra = await fetchAllSimulacra()

    const global = banners_global.map(banner => {
        const simulacrumData = allSimulacra.find(sim => sim.name === banner.simulacrum)

        return {
            ...banner,
            element: simulacrumData.weapon.element,
            type: simulacrumData.weapon.type,
            path: simulacrumData.path,
            cnName: simulacrumData.cnName,
            charge: simulacrumData.weapon.charge,
            shatter: simulacrumData.weapon.shatter
        }
    })

    return {
        global
    }
}