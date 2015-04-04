#pragma strict

public class Spell{
	var manaCost: float = 0f;
	var healthGain: float = 0f;
	var damage: float = 0f;
	var toggle: boolean = false;
	var castTime: float = 0f;
	var cooldown: float = 0f;
	var active: boolean = false;
	var moveWhileActive: boolean = true;
	var moveWhileCasting: boolean = true;
}