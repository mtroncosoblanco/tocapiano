import './style.css';
import * as Tone from "tone";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

let keys = document.querySelectorAll('.key')
for(let key of keys){
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown',()=> playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote())
    key.addEventListener('mouseleave', () => stopNote())
}

function playNote(note){
    synth.triggerAttackRelease(note);

}

function stopNote(){
    synth.triggerRelease();
}