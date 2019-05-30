

/**
 *简单的材质，不会受到光的影响，直接看到的效果就是整个物体的颜色都是一样，没有立体的感觉
 *
 * @param {*} options
 * @returns
 */
export const MeshBasicMaterial = function (options) {


    return new THREE.MeshBasicMaterial(options);

}

/**
 *这种材质会根据面的方向不同自动改变颜色，也是我们之前一直在用的材质。此材质不受灯光影响。
 *
 * @param {*} options
 * @returns
 */
export const MeshNormalMaterial = function (options) {


    return new THREE.MeshNormalMaterial(options);

}


/**
 *是由于直线需要单独的材质进行实现
 *
 * @param {*} options
 * @returns
 */
export const LineBasicMaterial = function (options) {


    return new THREE.LineBasicMaterial(options);

}


/**
 *创建虚线
 *
 * @param {*} options
 * @returns
 */
export const LineDashedMaterial = function (options) {


    return new THREE.LineDashedMaterial(options);

}


/**
 *对光有反应，但是不会出现高光，可以模拟一些粗糙的材质的物体，比如木头或者石头
 *
 * @param {*} options
 * @returns
 */
export const MeshLambertMaterial = function (options) {


    return new THREE.MeshLambertMaterial(options);

}


/**
 *这高光效果，可以模拟一些光滑的物体的材质效果，比如油漆面，瓷瓦等光滑物体
 *
 * @param {*} options
 * @returns
 */
export const MeshPhongMaterial = function (options) {


    return new THREE.MeshPhongMaterial(options);

}


/**
 *基于物理的渲染（PBR）材质，生成的材质效果更佳，但是相应也占用更多的计算量。这种材质我们可以定义它的粗糙度来确定反光效果，经常用于模拟金属的质感，使金属质感更加真实。
 
 *
 * @param {*} options
 * @param {*} metalness 设置的值的范围为0-1，值越小，材质越光滑，高光越明显
 * @param {*} metalnessMap 设置的值的范围为0-1，值越大，越有生锈金属的质感，值越小反光越清晰
 * @returns
 */
export const MeshStandardMaterial = function (options, metalness, metalnessMap) {


    var material = new THREE.MeshStandardMaterial(options);

    material.metalness = metalness;
    material.metalnessMap = metalnessMap;

    console.log(material);
    return material;

}
export default {
    MeshStandardMaterial: MeshStandardMaterial,
    MeshLambertMaterial: MeshLambertMaterial,
    LineDashedMaterial: LineDashedMaterial,
    LineBasicMaterial: LineBasicMaterial,
    MeshNormalMaterial: MeshNormalMaterial,
    MeshBasicMaterial: MeshBasicMaterial,
    MeshPhongMaterial: MeshPhongMaterial
}