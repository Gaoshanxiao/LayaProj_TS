// 程序入口
var LayaAir3D = (function () {
    function LayaAir3D() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //初始化引擎
        Laya3D.init(0, 0, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //开启统计信息
        Laya.Stat.show();
        //添加3D场景
        this.Scene = Laya.Scene.load("res/Scene/layaScene.ls");
        Laya.stage.addChild(this.Scene);
        //添加照相机
        var camera = (this.Scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(0, 3, 3));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearColor = null;
        //添加方向光
        var directionLight = this.Scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.direction = new Laya.Vector3(1, -1, 0);
        //添加主角
        //预加载，创建为Sprite3D类型
        Laya.loader.create("res/Charactor/girl/Charactor.lh", Laya.Handler.create(this, this.onCreateControllerComplete));
    }
    //主角预加载完成后回调
    LayaAir3D.prototype.onCreateControllerComplete = function () {
        //实例化加载并创建好的3D对象
        this.Controller = Laya.loader.getRes("res/Charactor/girl/Charactor.lh");
        this.Scene.addChild(this.Controller);
        this.Controller.addComponent(PlayerScript);
    };
    return LayaAir3D;
}());
new LayaAir3D();
//# sourceMappingURL=LayaAir3D.js.map