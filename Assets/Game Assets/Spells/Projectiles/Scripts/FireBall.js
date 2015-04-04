#pragma strict

var fireBall: Projectile;

function Start () {
	fireBall.spawnObject = transform;
	fireBall.fire();
}

function Update () {
	fireBall.forward();
}