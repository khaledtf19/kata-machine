export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let target = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            target = true;
            break;
        }
    }
    return target;
}
