#pragma strict

public class Projectile extends Spell{
	var velocity: float;
	var projectile: GameObject;
	var spawnObject: Transform;
	var forwardMultiplier: float = 2f;
	private var projectileInstance: GameObject;
	
	function fire(){
		projectileInstance = GameObject.Instantiate(projectile, spawnObject.transform.localPosition + (spawnObject.transform.forward * forwardMultiplier), spawnObject.transform.rotation);	
	}
	
	function forward(){
		projectileInstance.GetComponent.<Rigidbody>().AddForce(projectileInstance.transform.forward * velocity);
	}
}