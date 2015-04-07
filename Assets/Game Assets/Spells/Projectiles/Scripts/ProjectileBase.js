#pragma strict

public class Projectile{
	var velocity: float;
	var projectile: GameObject;
	var castedFrom: Transform;
	var forwardMultiplier: float = 2f;
	var collide: boolean = false;
	var collision: Collision;
	var projectileInstance: GameObject;
	var destroyProjectileOnHit: boolean = true;
	var hitEffect: GameObject;
	var hitEffectInstance: GameObject;
	var damage: int;
	
	function Fire(){
		projectileInstance = GameObject.Instantiate(projectile, castedFrom.transform.position + (castedFrom.transform.forward * forwardMultiplier), castedFrom.transform.rotation);	
		projectileInstance.GetComponent(ProjectileObjectBase).parentProjectile = this;
	}
	
	function Forward(){
		projectileInstance.GetComponent.<Rigidbody>().AddForce(projectileInstance.transform.forward * velocity);
	}
	
	function Hit(col: Collision){
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
			hitEffectInstance.GetComponent(SpellEffect).damage = damage;
		}
	}
	
	function Clone(proj: Projectile){
		proj.velocity = velocity;
		proj.projectile = projectile;
		proj.castedFrom = castedFrom;
		proj.forwardMultiplier = forwardMultiplier;
		proj.collide = collide;
		proj.collision = collision;
		proj.projectileInstance = projectileInstance;
		proj.destroyProjectileOnHit = destroyProjectileOnHit;
		proj.hitEffect = hitEffect;
		proj.hitEffectInstance = hitEffectInstance;
		return proj;
	}
}