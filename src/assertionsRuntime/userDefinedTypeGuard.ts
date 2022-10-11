// These are preferred over assertion functions at runtime

type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
    return 'size' in shape;
}

function isRectangle(shape: Rectangle): shape is Rectangle {
    return 'width' in shape;
}

function area(shape: Shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape; // Type system should prevent this from being reached
    return _ensure;
}
