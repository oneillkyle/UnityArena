#pragma strict

public class FireBall extends Spell{

	var fireBall: Projectile;

	function Start () {
	}
	
	public function Activate(){
		var fire: Projectile = new Projectile();
		fire = fireBall.Clone(fire);
		fire.castedFrom = castedFrom;
		fire.damage = damage;
		fire.Fire();
	}

	function Update () {
	}

}
