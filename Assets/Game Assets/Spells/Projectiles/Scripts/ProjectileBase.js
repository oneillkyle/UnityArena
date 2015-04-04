#pragma strict

public class Projectile extends Spell{
	var velocity: float;
	var projectile: GameObject;
	var spawnObject: Transform;
	private var projectileInstance: GameObject;
	
	function fire(){
		projectileInstance = GameObject.Instantiate(projectile, spawnObject.transform.localPosition + (spawnObject.transform.forward * 2), spawnObject.transform.rotation);	
	}
	
	function forward(){
		projectileInstance.GetComponent.<Rigidbody>().AddForce(projectileInstance.transform.forward * velocity);
	}
}