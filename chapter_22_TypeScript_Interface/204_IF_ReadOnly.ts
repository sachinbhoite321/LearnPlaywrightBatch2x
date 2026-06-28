interface point {
    readonly x: number;
    readonly y: number;
}

const point: point = { x: 10, y: 20 };
//point.x = 5; This is not possible


//readOnly array
interface Data {
    readonly item: readonly number[];
}