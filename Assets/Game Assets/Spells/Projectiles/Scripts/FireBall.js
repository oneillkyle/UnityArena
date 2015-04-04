#pragma strict

var fireBall: Projectile;

function Start () {
	fireBall.spawnObject = transform;
	fireBall.fire();
	fireBall.projectileInstance.transform.parent = transform;
}

function Update () {
	if(fireBall.collide){
		Destroy(gameObject);
	}
}