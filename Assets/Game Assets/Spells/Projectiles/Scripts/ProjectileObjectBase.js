#pragma strict

var parentProjectile: Projectile;

function Start () {
}

function Update () {
	if(parentProjectile){
		parentProjectile.forward();
	}
}

function OnCollisionEnter (col : Collision){
//    if(col.gameObject.name == "prop_powerCube")
//    {
	parentProjectile.hit(col);
}