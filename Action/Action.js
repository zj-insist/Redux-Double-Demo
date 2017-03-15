export const SELECTROW = "SELECTROW";

export function selectedRow (index) {
    return {
        type:SELECTROW,
        index,
    }
}