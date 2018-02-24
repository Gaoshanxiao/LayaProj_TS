var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var PlayerScript = (function (_super) {
    __extends(PlayerScript, _super);
    function PlayerScript() {
        return _super.call(this) || this;
    }
    PlayerScript.prototype._load = function (owner) {
        //获取脚本所属对象
        this.PlayerMesh3D = owner;
        console.log("Script loading");
    };
    /*覆写组件所属3D对象实例化完成后，第一次更新时的执行方法*/
    PlayerScript.prototype._start = function (state) {
        console.log("Script begin");
    };
    /*覆写组件更新方法（相当于帧循环）
    *state渲染状态*/
    PlayerScript.prototype._update = function (state) {
    };
    return PlayerScript;
}(Laya.Script));
//# sourceMappingURL=Player.js.map