export function validaMoeda(moeda) {
    if (moeda.length !== 3) {
        return false;
    } else {
        return true;
    }
}