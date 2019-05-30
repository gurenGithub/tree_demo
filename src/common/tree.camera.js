

 /**
  *正交相机
  *
  * @param {*} left
  * @param {*} right
  * @param {*} top
  * @param {*} bottom
  * @param {*} near
  * @param {*} far
  * @returns
  */
 export const  OrthographicCamera=(left, right, top, bottom, near, far)=> {

    return new THREE.OrthographicCamera(left, right, top, bottom, near, far);
}


/**
 *透视相机
 *
 * @param {*} fov
 * @param {*} aspect
 * @param {*} near
 * @param {*} far
 * @returns
 */
export const  PerspectiveCamera=(fov, aspect, near, far)=> {

    return new THREE.PerspectiveCamera(fov, aspect, near, far);
}



export default{
    OrthographicCamera:OrthographicCamera,
    PerspectiveCamera:PerspectiveCamera
}