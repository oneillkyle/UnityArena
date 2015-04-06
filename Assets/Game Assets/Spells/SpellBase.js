#pragma strict

public class Spell extends MonoBehaviour{
	var manaCost: float = 0f;
	var healthGain: float = 0f;
	var damage: float = 0f;
	var toggle: boolean = false;
	var castTime: float = 0f;
	var cooldown: float = 0f;
	var element: String;
	var moveWhileActive: boolean = true;
	var moveWhileCasting: boolean = true;
	var castedFrom: Transform;
	
	public function Activate(){
	
	}
}