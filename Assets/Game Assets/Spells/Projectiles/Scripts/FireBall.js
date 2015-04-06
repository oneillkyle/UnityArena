#pragma strict

public class FireBall extends Spell{

	var fireBall: Projectile;

	function Start () {
	}
	
	public function Activate(){
		fireBall.castedFrom = castedFrom;
		fireBall.fire();
	}

	function Update () {
	}

}
