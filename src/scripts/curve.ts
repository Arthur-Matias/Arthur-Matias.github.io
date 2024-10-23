const curve = (
    context: CanvasRenderingContext2D,
    h: number[],
    r: number = 0.5,
    f: number = 20,
    c: boolean = false
): number[] => {
    const k: number[] = [];
    const e: number = h.length;
    const a: Float32Array = new Float32Array((f + 2) * 4);
    let b: number = 4;

    const j: number[] = h.slice(0);
    if (c) {
        j.unshift(h[e - 1], h[e - 2]);
        j.push(h[0], h[1]);
    } else {
        j.unshift(h[0], h[1]);
        j.push(h[e - 2], h[e - 1]);
    }

    a[0] = 1;

    for (let d = 1; d < f; d++) {
        const m = d / f;
        const n = m * m;
        const p = n * m;
        const o = p * 2;
        const q = n * 3;

        a[b++] = o - q + 1;
        a[b++] = q - o;
        a[b++] = p - 2 * n + m;
        a[b++] = p - n;
    }

    a[++b] = 1;

    generateCurve(j, a, e, k, r, f);

    for (let d = 0; d < k.length; d += 2) {
        context.lineTo(k[d], k[d + 1]);
    }

    return k;
};

const generateCurve = (
    B: number[],
    u: Float32Array,
    w: number,
    k: number[],
    r: number,
    f: number
): void => {
    for (let v = 2; v < w; v += 2) {
        const x = B[v];
        const y = B[v + 1];
        const z = B[v + 2];
        const A = B[v + 3];
        const D = (z - B[v - 2]) * r;
        const E = (A - B[v - 1]) * r;
        const F = (B[v + 4] - x) * r;
        const G = (B[v + 5] - y) * r;

        for (let C = 0; C <= f; C++) {
            const s = C * 4;
            k.push(
                u[s] * x + u[s + 1] * z + u[s + 2] * D + u[s + 3] * F,
                u[s] * y + u[s + 1] * A + u[s + 2] * E + u[s + 3] * G
            );
        }
    }
};

export {
    curve
}