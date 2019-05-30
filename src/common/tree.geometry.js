/**
 *圆环
 *
 * @param {*} radius 圆环的半径，从圆环的中心到管的中心。默认值为1
 * @param {*} tube 管的半径。默认值是0.4；
 * @param {*} radialSegments 横向分段数，默认值是8；
 * @param {*} tubularSegments 纵向分段数，默认值是6；
 * @param {*} arc 绘制的弧度。默认值是 Math.PI * 2，绘制整个圆环。
 * @returns
 */
export const Torus = (radius, tube, radialSegments, tubularSegments, arc) => {

    return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
}
/**
 * 平面几何体
 *
 * @param {*} width 沿 X 轴的宽度。默认值为1；
 * @param {*} height 沿着 Y 轴的高度。默认值为1；
 * @param {*} widthSegments 宽度的分段数，可选。默认值为1；
 * @param {*} heightSegments 高度的分段数，可选。默认值为1。
 * @returns
 */
export const Plane = (width, height, widthSegments, heightSegments) => {

    return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
}

/**
 * 球体几何体的类
 *
 * @param {*} radius 球体半径。默认值是1；
 * @param {*} widthSegments 水平线段的数量。最小值是3，默认值是8；
 * @param {*} heightSegments 垂直段的数量。最小值是2，默认值是6；
 * @param {*} phiStart 指定水平渲染起始角度。默认值为0；
 * @param {*} phiLength 指定水平渲染角度大小。默认值是 Math.PI * 2；
 * @param {*} thetaStart 指定垂直渲染起始角度。默认值为0；
 * @param {*} thetaLength 指定垂直渲染角度大小。默认是 Math.PI。
 * @returns
 */
export const Sphere = (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) => {

    return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
}

/**
 *平面几何体
 *
 * @param {*} radiusTop 顶部圆柱体的半径。默认值为1；
 * @param {*} radiusBottom 底部圆柱体的半径。默认值为1；
 * @param {*} height 圆柱体的高度。默认值为1；
 * @param {*} radialSegments 圆柱周围的分段面数。默认值为8；
 * @param {*} heightSegments 沿圆柱体高度的面的行数。默认值为1；
 * @param {*} openEnded 圆柱体的两端是否显示，默认值是 false，显示；
 * @param {*} thetaStart 第一段的起始角度，默认值是0（Three.js 的0度位置）。
 * @param {*} thetaLength 圆形扇形的中心角，通常称为 theta。默认值是2 * Pi，画出一个整圆。
 * @returns
 */
export const Cylinder = (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) => {

    return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
}

 /**
  *立方体
  *
  * @param {*} width x方向上的长度
  * @param {*} height y方向上的长度
  * @param {*} depth z方向上的长度
  * @param {*} widthSegments
  * @param {*} heightSegments
  * @param {*} depthSegments
  */
 export const Cube =(width,height,depth,widthSegments,heightSegments, depthSegments) => {

    return new THREE.CubeGeometry(width,height,depth,widthSegments,heightSegments, depthSegments)
}


/**
 * 圆锥体
 *
 * @param {*} radius 底部圆锥的半径，默认值为1；
 * @param {*} height 圆锥体的高度，默认值为1；
 * @param {*} radialSegments 圆锥周围的分段面数，默认值为8；
 * @param {*} heightSegments 沿圆锥体高度的面的行数，默认值为1；
 * @param {*} openEnded 圆锥体底部是是隐藏还是显示，默认值为 false，显示；
 * @param {*} thetaStart 第一段的起始角度，默认值是0（Three.js 的0度位置）
 * @param {*} thetaLength 圆形扇形的中心角，通常称为 theta。默认值是2 * Pi，画出一个整圆。
 * @returns
 */
export const Cone = (radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) => {

    return new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
}
/**
 *circle
 *
 * @param {*} radius 圆的半径，默认值为1；
 * @param {*} segments 段数（三角形），最小值为3，默认值为8；
 * @param {*} thetaStart 第一段的起始角度，默认值为0；
 * @param {*} thetaLength 圆形扇形的中心角，通常称为 theta。默认值是 2 * Pi，画出一个整圆。
 * @returns
 */
export const Circle = (radius, segments, thetaStart, thetaLength) => {

    return new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);
}
/**
 *平面几何体
 *
 * @param {*} width 沿 X 轴的宽度，默认值为1
 * @param {*} height 沿 Y 轴的高度，默认值为1
 * @param {*} depth 沿 Z 轴的深度，默认值为1
 * @param {*} widthSegments 可选，沿着边的宽度的分割面的数量。默认值为1
 * @param {*} heightSegments 可选，沿着边的高度的分割面的数量。默认值为1
 * @param {*} depthSegments 可选，沿着边的深度的分割面的数量。缺省值是1
 * @returns
 */
export const Box = function (width, height, depth, widthSegments, heightSegments, depthSegments) {

    return new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);

}

export default {
    Box: Box,
    Circle: Circle,
    Cone: Cone,
    Cylinder: Cylinder,
    Sphere: Sphere,
    Plane: Plane,
    Torus: Torus
};