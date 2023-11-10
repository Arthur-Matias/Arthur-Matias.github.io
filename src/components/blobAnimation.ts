import "../lib/curve.min.js"
import { SimplexNoise } from "../lib/simplex-noise";

interface canvasRenderingContext2D extends CanvasRenderingContext2D{
    curve(points: number[], tension?: number): void
}

export interface blobControls {
    init: () => void;
    changeCurrentColor: (color: string) => void;
    canvas: HTMLCanvasElement
}
/**
 * 
 * @param _target ID of the target HTML element to insert the animation
 * @param _numOfPoints Number of points that will move independently
 * @param _color color of the blob
 * @param _noiseStep how fast do you want the blob to move
 * @param _bgImage expects an Image to put as a background
 * @returns @object blobControls
 */
export function createBlobAnimation(_target: string, _numOfPoints: number, _color: string, _noiseStep: number = 0.0005, _bgImage: HTMLImageElement | null = null): blobControls {

    const target = document.getElementById(_target);
    console.log(target)
    const canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
    const ctx: canvasRenderingContext2D = canvas.getContext("2d") as canvasRenderingContext2D;

    const simplex = new SimplexNoise();

    let radius = 0;

    function noise(x: number, y: number) {
        return simplex.noise2D(x, y)
    }
    function init() {
        if (target) {
            console.log()
            canvas.width = target.offsetWidth > target.offsetHeight?target.offsetHeight:target.offsetWidth
            canvas.height = target.offsetWidth > target.offsetHeight?target.offsetHeight:target.offsetWidth
            ctx.translate(canvas.width / 2, canvas.height / 2)
            target.innerHTML = "";
            target.append(canvas)
            radius = canvas.height > canvas.width ? (canvas.width / 2) - 30 : (canvas.height / 2) - 30;
            let blob = createBlob()


            requestAnimationFrame(blob.render)
        }
    }
    class Point {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x
            this.y = _y
        }
    }
    class BlobPoint extends Point {

        originX: number
        originY: number
        noiseOffsetX: number
        noiseOffsetY: number

        constructor(_x: number, _y: number, _noiseOffsetX: number, _noiseOffsetY: number) {
            super(_x, _y)
            this.originX = _x
            this.originY = _y
            this.noiseOffsetX = _noiseOffsetX
            this.noiseOffsetY = _noiseOffsetY
        }
    }
    function createBlob() {

        let points: BlobPoint[] = []
        points = createPoints(radius)

        function map(n: number, start1: number, end1: number, start2: number, end2: number): number {
            return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
        }
        function convertPointsToArray() {
            let pointsArr: number[] = []
            points.map((p, i) => {
                pointsArr.push(p.x)
                pointsArr.push(p.y)
                if (i === points.length - 1) {
                    pointsArr.push(points[0].x, points[0].y)
                    pointsArr.push(points[1].x, points[1].y)
                }
            })

            return pointsArr
        }
        function createPoints(_radius: number): BlobPoint[] {

            const points: BlobPoint[] = []

            let numOfPoints = _numOfPoints;
            let angleStep = (Math.PI * 2) / numOfPoints;
            const r = _radius;

            for (let i = 1; i <= numOfPoints; i++) {
                const theta = i * angleStep;
                const x = Math.cos(theta) * r;
                const y = Math.sin(theta) * r;

                points.push(new BlobPoint(x, y, Math.random() * 1000, Math.random() * 1000))

                if (i === numOfPoints) {
                    for (let j = 0; j <= numOfPoints - 1; j++) {
                        points.push(points[j]);
                    }
                }
            }
            return points
        }
        function render() {
            let range = canvas.height * 0.05;
            ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
            canvas.style.background = "rgba(0,0,3, 0)";

            ctx.moveTo(points[0].x, points[0].y)
            ctx.beginPath()

            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                const nX = noise(point.noiseOffsetX, point.noiseOffsetY)
                const nY = noise(point.noiseOffsetX, point.noiseOffsetY)

                const x = map(nX, -1, 1, point.originX - range, point.originX + range);
                const y = map(nY, -1, 1, point.originY - range, point.originY + range);

                point.x = x
                point.y = y

                point.noiseOffsetX += _noiseStep
                point.noiseOffsetY += _noiseStep

                if (point.noiseOffsetX > 10000) {
                    point.noiseOffsetX = 0
                }
                if (point.noiseOffsetY > 10000) {
                    point.noiseOffsetX = 0
                }
            }
            ctx.curve(convertPointsToArray(), 1)

            ctx.fillStyle = _color;
            ctx.fill()
            ctx.closePath()
            ctx.save()
            ctx.clip();

            if (_bgImage) {
                var renderableHeight, renderableWidth, xStart;
                if (canvas.width > 200 && canvas.height > 200) {
                    renderableHeight = radius*2;
                    renderableWidth = _bgImage.width * (renderableHeight / _bgImage.height);
                    xStart = (canvas.width - renderableWidth) / 2 -renderableWidth/2;
                    // yStart = -renderableHeight/2;

                    ctx.translate(-canvas.width/2, -canvas.height/2)
                    ctx.drawImage(_bgImage, xStart+renderableWidth/2, (radius*2)- renderableHeight*0.65, renderableWidth, renderableHeight);
                };
            }

            ctx.restore();
            requestAnimationFrame(render)
        }


        return {
            render
        }
    }
    function changeCurrentColor(c: string) {
        _color = c
    }
    return {
        init,
        changeCurrentColor,
        canvas,
    }
}
