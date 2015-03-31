#pragma strict

var velocity: float = 50;
var fireBall: Rigidbody;
private var fire: Rigidbody;

function Start () {
	fire = Instantiate(fireBall, transform.localPosition + (transform.forward * 2), transform.rotation);
}

function Update () {
	fire.AddForce(transform.forward * velocity);
}