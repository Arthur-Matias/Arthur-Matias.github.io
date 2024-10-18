export default function map(value: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds = true) {

    return withinBounds ? Math.max(start2, Math.min(stop2, (start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1)))
    )) : (start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1)));
}