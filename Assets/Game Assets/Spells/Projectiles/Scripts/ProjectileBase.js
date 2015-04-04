#pragma strict

public class Projectile extends Spell{
	var velocity: float;
	var projectile: GameObject;
	var spawnObject: Transform;
	var forwardMultiplier: float = 2f;
	var collide: boolean = false;
	var collision: Collision;
	var projectileInstance: GameObject;
	var destroyProjectileOnHit: boolean = true;
	var hitEffect: GameObject;
	var hitEffectInstance: GameObject;
	
	function fire(){
		projectileInstance = GameObject.Instantiate(projectile, spawnObject.transform.localPosition + (spawnObject.transform.forward * forwardMultiplier), spawnObject.transform.rotation);	
		projectileInstance.GetComponent(ProjectileObjectBase).parentProjectile = this;
	}
	
	function forward(){
		projectileInstance.GetComponent.<Rigidbody>().AddForce(projectileInstance.transform.forward * velocity);
	}
	
	function hit(col: Collision){
		collide = true;
		collision = col;
		if(destroyProjectileOnHit){
			GameObject.Destroy(projectileInstance);
		}
		if(hitEffect){
			var contact = collision.contacts[0];
			var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
			var pos = contact.point;
			hitEffectInstance = GameObject.Instantiate(hitEffect, pos, rot);
		}
	}
}

//var projectile: Projectile;
//
//function OnCollisionEnter (col : Collision){
////	    if(col.gameObject.name == "prop_powerCube")
////	    {
//        Destroy(col.gameObject);
////	    }
//}
//
//function Update(){
//	projectile.forward();
//}