import './style.css';
import * as Tone from "tone";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

let keys = document.querySelectorAll('.key')
for(let key of keys){
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('click',()=> playNote(noteToPlay))
}

function playNote(note){
    synth.triggerAttackRelease(note, "8n");

}