function TreeCore(params) {

    // var renderer, camera, scene, geometry, material, mesh;
    var renderer, camera, scene, geometry, material, mesh;

    //初始化渲染器
    function initRenderer() {
        renderer = new THREE.WebGLRenderer(); //实例化渲染器
        renderer.setSize(window.innerWidth, window.innerHeight); //设置宽和高
        document.body.appendChild(renderer.domElement); //添加到dom
    }

    //初始化场景
    function initScene() {
        scene = new THREE.Scene(); //实例化场景
    }

    //初始化相机
    function initCamera() {
        //camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200); //实例化相机
        //camera.position.set(0, 0, 150);

        // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200); //实例化相机
        //camera.position.set(0, 0, 150);
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 100, 200);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    }
    //创建灯光
    function initLight() {
        var light = new THREE.DirectionalLight(0xffffff); //添加了一个白色的平行光
        light.position.set(20, 50, 50); //设置光的方向
        scene.add(light); //添加到场景
        //添加一个全局环境光
        scene.add(new THREE.AmbientLight(0x222222));
    }

    initRenderer();
    initScene();
    //initLight();
    initCamera();
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;

}
TreeCore.prototype = {

    addLight(linght, enabledcastShadow) {


        this.scene.add(linght);
        if (enabledcastShadow) {

            this.castShadow(enabledcastShadow);
        }

    },
    addCamera(camera) {

        this.scene.add(camera);
    },

    addMesh(mesh) {

        this.scene.add(mesh); //将网格添加到场景
    },
    add(obj) {
        let me = this;

        if (obj instanceof Array) {

            obj.map(el => {
                me.scene.add(el);

            })
        } else {
            this.scene.add(obj);
        }

    },
    createGroup(meshs) {

        let group = new THREE.Group(); //创建一个模型组

        if (meshs) {
            meshs.map(el => {
                group.add(el);
            })
        }

        return group;
    },
    createMesh(geometry, material) {
        return new THREE.Mesh(geometry, material); //创建网格
    },
    render(callback) {

        this.renderer.render(this.scene, this.camera); //渲染界面

        callback && callback();
    },
    addAnimate(fn) {
        let me = this;
        var a1 = function () {
            fn();
            me.render();
            requestAnimationFrame(a1); //循环调用函数
        }

        a1();
    },

    /**
     *设置阴影
     *
     * @param {*} isTrue
     */
    setShadow(isTrue) {

        this.renderer.shadowMap.enabled = typeof isTrue === 'undefined' ? true : isTrue;
    },

    /**
     *开启阴影
     *
     * @param {*} obj
     * @param {*} isTrue
     */
    castShadow(obj, isTrue) {
        if (obj instanceof Array) {

            obj.map(el => {
                el.castShadow = typeof isTrue === 'undefined' ? true : isTrue;
            })
        } else {
        obj.castShadow = typeof isTrue === 'undefined' ? true : isTrue;
        }
    },

    /**
     *接收阴影
     *
     * @param {*} obj
     * @param {*} isTrue
     */
    receiveShadow(obj, isTrue) {

        if (obj instanceof Array) {

            obj.map(el => {
                el.receiveShadow = typeof isTrue === 'undefined' ? true : isTrue;
            })
        } else {
            obj.receiveShadow = typeof isTrue === 'undefined' ? true : isTrue;
        }

    },


    /**
     *设置位置
     *
     * @param {*} obj
     * @param {*} x
     * @param {*} y
     * @param {*} z
     */
    setPosition(obj, x, y, z) {
        obj.position.set(x, y, z); // =typeof isTrue === 'undefined' ? true : isTrue;
    }

}


module.exports = TreeCore;