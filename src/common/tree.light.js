/**
 *全局环境光
 *
 * @param {*} color
 * @param {*} intensity
 * @returns
 */
export const AmbientLight = (color, intensity) => {

    return new THREE.AmbientLight(color, intensity);
}
/**
 *平行光
 *
 * @param {*} color
 * @param {*} intensity
 * @returns
 */
export const DirectionalLight = (color, intensity) => {
    return new THREE.DirectionalLight(color, intensity);
}
/**
 *点光源
 *
 * @param {*} color 光照颜色
 * @param {*} intensity 光的强度
 * @param {*} distance 照射范围
 * @param {*} decay 衰减度
 * @returns
 */
export const PointLight = (color, intensity, distance, decay) => {
    return new THREE.PointLight(color, intensity, distance, decay);
}
/**
 * 聚光灯光源
 *
 * @param {*} color 光照颜色
 * @param {*} intensity 光的强度
 * @param {*} distance 照射范围
 * @param {*} angle 照射弧度
 * @param {*} penumbra 交界过渡
 * @param {*} decay 衰减度
 * @returns
 */
export const SpotLight = (color, intensity, distance, angle, penumbra, decay) => {
    return new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);

}
/**
 *室外光源
 *
 * @param {*} skycolor 天空的颜色
 * @param {*} bcolor 地面的颜色
 * @param {*} intensity 光的强度
 * @returns
 */
export const HemisphereLight = (skycolor, groundColor, intensity) => {

    return new THREE.HemisphereLight(skycolor, groundColor, intensity);
}


export default {
    HemisphereLight: HemisphereLight,
    SpotLight: SpotLight,
    PointLight: PointLight,
    DirectionalLight: DirectionalLight,
    AmbientLight: AmbientLight
};