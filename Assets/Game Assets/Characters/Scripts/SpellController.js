#pragma strict

class SpellPage{
	var spell: GameObject;
	var info: Spell;
	var key: String;
}

class SpellBook{
	var spells: SpellPage[];
}

var spellBook = SpellBook();
var pivot: Transform;
var characterInfo: CharacterMain;

function Start () {
	characterInfo = transform.parent.GetComponent(CharacterMain);
	for(s in spellBook.spells){
		if (s.spell){
			s.info = s.spell.transform.GetComponent(Spell);
			s.spell.SetActive(true);
		}
	}
}

function Update () {
	for(s in spellBook.spells){
		if (Input.GetButtonDown(s.key)){
			s.info.castedFrom = transform;
			s.info.Activate();
		}
	}
	transform.rotation = pivot.rotation;
}