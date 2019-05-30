import '@/style/demo.scss';
import '@/style/index.scss';
import onLayout from '@/layout/index';
import TreeCore from '@/common/tree.core.js';
import geometries, {
    Circle,
    Box,
    Cone,
    Torus,
    Plane,
    Sphere,
    Cylinder,
    Cube
} from '@/common/tree.geometry.js';
import material, {
    MeshStandardMaterial,
    MeshLambertMaterial,
    LineDashedMaterial,
    LineBasicMaterial,
    MeshNormalMaterial,
    MeshBasicMaterial,
    MeshPhongMaterial
} from '@/common/tree.material.js';
import lights, {
    HemisphereLight,
    SpotLight,
    PointLight,
    DirectionalLight,
    AmbientLight
} from '@/common/tree.light.js';

const components = []; //组件
onLayout(function ($wrap) {

    components.map((el) => {


        el($wrap, {});

    })

    let treeCore = new TreeCore();
    //treeCore.addLight(ambientLight(0xffffff))
    treeCore.addLight(HemisphereLight(0x00ffff, 0xff0000, 1), true);


    let sphere2 = treeCore.createMesh(Cube(20, 20, 20), MeshLambertMaterial({
        color: 'red'
    }));

    let backgroundPlane = plane(100, 100);

    let backgroundMesh = treeCore.createMesh(backgroundPlane, MeshPhongMaterial({
        color: 'yellow'
    }));
    backgroundMesh.rotation.x = -0.5 * Math.PI;
    backgroundMesh.position.y = -10;

    let circleMesh = treeCore.createMesh(Sphere(5, 20, 20), MeshPhongMaterial({
        color: 'yellow'
    }));
    circleMesh.position.set(20, 60, 50);
    //treeCore.setPosition(backgroundMesh,10,10,0);
    // material.metalness = 0.1; //设置的值的范围为0-1，值越小，材质越光滑，高光越明显
    //material.metalnessMap = 0.1; //设置的值的范围为0-1，值越大，越有生锈金属的质感，值越小反光越清晰
    sphere2.position.set(20, 0, 0);

    treeCore.setShadow(true);
    treeCore.castShadow(sphere2, true);

    treeCore.addMesh(sphere2);
    treeCore.addMesh(circleMesh);
    treeCore.addMesh(backgroundMesh);
    var step = 0; //记录旋转的角度
    treeCore.render(function () {

        treeCore.addAnimate(function () {
            step += 0.02;
            //sphere2.rotation.set(step, step, step);
            //circle2.rotation.x += 0.01; //每帧网格模型的沿x轴旋转0.01弧度
            //circle2.rotation.y += 0.02; //每帧网格模型的沿y轴旋转0.02弧度
            //circle2.rotation.z += 0.02;
        })
    }); //渲染界面

    //animate();



});