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

    let step = 0;
    let treeCore = new TreeCore();

    treeCore.add(AmbientLight('#111111'));
    let _directionalLight = DirectionalLight("#ffffff");
    _directionalLight.position.set(40, 60, 10);
    _directionalLight.shadow.camera.near = 1; //产生阴影的最近距离
    _directionalLight.shadow.camera.far = 400; //产生阴影的最远距离
    _directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
    _directionalLight.shadow.camera.right = 50; //最右边
    _directionalLight.shadow.camera.top = 50; //最上边
    _directionalLight.shadow.camera.bottom = -50; //最下面
    //这两个值决定生成阴影密度 默认512
    _directionalLight.shadow.mapSize.height = 1024;
    _directionalLight.shadow.mapSize.width = 1024;
    //告诉平行光需要开启阴影投射
    _directionalLight.castShadow = true;
    //添加全局光

    treeCore.add(_directionalLight);

    function initModel() {
        //球体
        /*var sphereGeometry = new THREE.SphereGeometry(5, 24, 16);
        var sphereMaterial = new THREE.MeshStandardMaterial({color: 0xff00ff});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.castShadow = true; //开启阴影
        _directionalLight.target = sphere; //平行光的焦点到球
        treeCore.add(sphere);
        //立方体
        var cubeGeometry = new THREE.CubeGeometry(10, 10, 10);
        var cubeMaterial = new THREE.MeshPhongMaterial({color: 0x00ffff});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = 30;
        cube.position.z = -5;
        cube.castShadow = true; //开启阴影
        treeCore.add(cube);
        //底部平面
        var planeGeometry = new THREE.PlaneGeometry(100, 100);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa, side: THREE.DoubleSide});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.y = -5.1;
        plane.receiveShadow = true; //可以接收阴影
        treeCore.add(plane);*/
   
        let _plane=treeCore.createMesh(Plane(100,100),MeshBasicMaterial({color: 0xaaaaaa, side: THREE.DoubleSide})) ;
        _plane.rotation.x=-0.5*Math.PI;
        _plane.position.y = -5.1;

        let _cube=treeCore.createMesh(Cube(10,10,10),MeshPhongMaterial({color:0x00ffff}));
        _cube.position.x = 30;
        _cube.position.z = -5;

        let _sphere=treeCore.createMesh(Sphere(5, 24, 16),MeshPhongMaterial({color: 0xff00ff}));

        _sphere.position.y=5;
        _directionalLight.target = _sphere; //平行光的焦点到球
        treeCore.receiveShadow([_plane]);
        treeCore.castShadow([_cube,_sphere]);

        treeCore.add([_plane,_cube,_sphere]);


        //pl

    }

    initModel();
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