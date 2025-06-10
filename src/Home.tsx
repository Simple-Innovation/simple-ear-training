import { useState } from "react";
import { now, PolySynth, start } from "tone";
import { Chord, Range, Scale } from "tonal";

const roots = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const octaveCollection = ["1", "2", "3", "4", "5", "6", "7"];
const chordTypes = ["major", "minor", "dim", "aug", "7", "m7"];
const scaleTypes = ["major", "minor", "dorian", "mixolydian", "phrygian"];

export default function App() {
  const [root, setRoot] = useState("C");
  const [octave, setOctave] = useState("4");
  const [mode, setMode] = useState("chord"); // 'chord' or 'scale'
  const [type, setType] = useState("major");

  const getNotes = () => {
    if (mode === "chord") {
      return Chord.getChord(type, root).notes.map((n) => n + octave);
    } else {
      return Range.numeric([0, 7]).map(Scale.steps(`${root}${octave} ${type}`));
    }
  };

  const playNotes = async () => {
    const notes = getNotes();
    await start();
    const synth = new PolySynth().toDestination();

    if (mode === "chord") {
        synth.triggerAttackRelease(notes, "1n");
    } else {
      let toneNow = now();
      notes.forEach((note, i) => {
        synth.triggerAttackRelease(note, "8n", toneNow + i * 0.4);
      });
    }
  };
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Play {mode === "chord" ? "Chords" : "Scales"}</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>Mode: </label>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="chord">Chord</option>
          <option value="scale">Scale</option>
        </select>
      </div>{" "}
      <div style={{ marginBottom: "1rem" }}>
        <label>Root: </label>
        <select value={root} onChange={(e) => setRoot(e.target.value)}>
          {roots.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Octave: </label>
        <select value={octave} onChange={(e) => setOctave(e.target.value)}>
          {octaveCollection.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>{mode === "chord" ? "Chord Type" : "Scale Type"}: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {(mode === "chord" ? chordTypes : scaleTypes).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={playNotes}
        style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
      >
        ▶ Play {mode}
      </button>
      <p style={{ marginTop: "1rem" }}>
        Notes: <code>{getNotes().join(", ")}</code>
      </p>
    </div>
  );
}
