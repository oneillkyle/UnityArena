#pragma strict

class SpellBook{
	var spellOne: GameObject;
	var spellTwo: GameObject;
	var spellThree: GameObject;
	var spellFour: GameObject;
}

var spellBook = SpellBook();
var pivot: Transform;

function Start () {
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Alpha1)){
		Instantiate(spellBook.spellOne, transform.position, transform.rotation);
	}
	transform.rotation = pivot.rotation;
}