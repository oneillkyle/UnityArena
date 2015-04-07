#pragma strict

class SpellEffect extends MonoBehaviour{
	var damage: int;
}

public class ExplosionPhysicsForce extends SpellEffect{
	var explosionForce: float = 4;
	var multiplier: float = 1;
	
	function Start () {
		yield;
		
//		var multiplier: float = transform.GetComponent(ParticleSystemMultiplier);
		
		var r: float = 10*multiplier;
		var cols = Physics.OverlapSphere(transform.position, r);
		var rigidbodies = new Array();
		
		for(var col in cols){
			var i: boolean = false;
			if(col.attachedRigidbody != null){
				for(var rg in rigidbodies){
					if(rg == col.attachedRigidbody){
						i = true;
						break;
					}
				}
				if(i) continue;
				rigidbodies.push(col.attachedRigidbody);
			}
		}
		for(var rb in rigidbodies){
			var rgb: Rigidbody = rb;
			
            rgb.AddExplosionForce(explosionForce*multiplier, transform.position, r, 1*multiplier, ForceMode.Impulse);
            if(rgb.name == 'ThirdPersonController' || rgb.name == 'AIThirdPersonController'){
            	rgb.GetComponent(CharacterMain).health -= (damage / Vector3.Distance(transform.position,rgb.transform.position));
            	Debug.Log((damage / Vector3.Distance(transform.position,rgb.transform.position)));
            }
        }
	}

	function Update () {

	}
}