#Synths

Synthesizers are electronic music instruments which play a fundamental role in sound creation within BlokDust.

[tone block]

Several of the blocks in BlokDust lend themselves to creating simple playable synths. One of the most common techniques in synth creation is called subtractive synthesis, and uses oscillators, filters, envelopes and modulation.

In BlokDust the Tone Source block is a basic oscillator, it generates a sound at a constant frequency, and the shape of the sound’s waveform can be selected from: square, sine, triangle and sawtooth. The waveform affects the timbre of the sound, sine being the softest sounding, and sawtooth & square being more aggressive.

Connecting a Tone block to an Interaction block is the simplest way of creating a playable synth. Synth drones can be created by connecting the Tone to a Power block or active Switch block. Individual notes or pads can be created by firing particles at or rotating laser beams through the Tone block.

More interesting synth sounds are created when combined with filters (Filter, EQ, Autowah) which further affect the timbre, modulation (LFO, Chopper, Chomp, Chorus, Phaser) which affect aspects of the sound over time, and Envelopes, which affect the shape of the sound, ie how quickly a note fades in or out.

Combining multiple oscillators (Tone blocks) of different waveform types, harmonies or octaves adds further interest, and a more dense sound can be achieved by using two oscillators of the same type, but slightly detuning one of them to create a pulsing/chorus sound.

The Granular block uses a different technique to subtractive. Granular Synthesis relies on an audio sample which is then sliced into tiny pieces. These short ‘grains’ of audio are played back layered on top of each other, useful for creating a range of effects from dense soundscapes, to unique ‘bubbling’ sounds.

##Links/Reference

http://blokdust.com

https://en.wikipedia.org/wiki/Synthesizer

https://en.wikipedia.org/wiki/Subtractive_synthesis

https://en.wikipedia.org/wiki/Granular_synthesis

http://webaudio.github.io/web-audio-api/

http://music.columbia.edu/cmc/MusicAndComputers/chapter1/01_04.php