export function repeatStr(str: string, n: number): string {
    return new Array(n + 1).join(str);
}
