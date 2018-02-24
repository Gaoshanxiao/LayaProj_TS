/*
* name;
*/
class PlayerScript extends Laya.Script{
    /* 脚本所属的3D对象 */
    private PlayerSprite3D:Laya.Sprite3D;
    public  Animator: Laya.Animator;

    constructor()
    {
         super();
    }

    public _load(owner:Laya.Sprite3D):void
    {
        //获取脚本所属对象
        this.PlayerSprite3D = owner;
        console.log("Script loading");
    }

    /*覆写组件所属3D对象实例化完成后，第一次更新时的执行方法*/
    public _start(state:Laya.RenderState):void
    {
        console.log("Script begin");
        var girlModel:Laya.Sprite3D = this.PlayerSprite3D.getChildAt(0) as Laya.Sprite3D;
        this.Animator = girlModel.getComponentByType(Laya.Animator) as Laya.Animator;
        this.Animator.play("Girl_Idle");
    }


    /*覆写组件更新方法（相当于帧循环）
    *state渲染状态*/
    public _update(state:Laya.RenderState):void
    {
        
    }
}
    