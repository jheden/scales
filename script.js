const instruments =  {
  'Bass': {
    'frets': 25,
    'tunings': {
      'Standard': 'EADG',
      '4 String Tenor': 'ADGC',
      '5 String Standard': 'BEADG',
      '5 String Tenor': 'EADGC',
      '6 String Standard': 'BEADGC',
    },
  },
  'Cello': {
    'frets': 13,
    'tunings': {
      'Standard': 'CGDA',
    },
  },
  'Guitar': {
    'frets': 25,
    'tunings': {
      'Standard': 'EADGBE',
      'Drop D': 'DADGBE',
    },
  },
  'Linnstrument': {
    'frets': 25,
    'tunings': {
      'Standard': 'F#BEADGCF',
    },
  },
  'Linnstrument 128': {
    'frets': 16,
    'tunings': {
      'Standard': 'F#BEADGCF',
    },
  },
  'Viola': {
    'frets': 18,
    'tunings': {
      'Standard': 'CGDA',
    },
  },
  'Violin': {
    'frets': 18,
    'tunings': {
      'Standard': 'GDAE',
    },
  },
};

const intervals = {
    'P1': 0,
    'd2': 0,

    'm2': 1,
    'A1': 1,

    'M2': 2,
    'd3': 2,

    'm3': 3,
    'A2': 3,

    'M3': 4,
    'd4': 4,

    'P4': 5,
    'A3': 5,

    'TT': 6,
    'A4': 6,
    'd5': 6,

    'P5': 7,
    'd6': 7,

    'm6': 8,
    'A5': 8,

    'M6': 9,
    'd7': 9,

    'm7': 10,
    'A6': 10,

    'M7': 11,
    'd8': 11,

    'P8': 12,
    'A7': 12,
    'd9': 12,

    'm9': 13,
    'A8': 13,

    'M9': 14,
    'd10': 14,

    'm10': 15,
    'A9': 15,

    'M10': 16,
    'd11': 16,

    'P11': 17,
    'A10': 17,

    'A11': 18,
    'd12': 18,

    'P12': 19,
    'd13': 19,

    'm13': 20,
    'A12': 20,

    'M13': 21,
    'd14': 21,

    'm14': 22,
    'A13': 22,

    'M14': 23,
    'd15': 23,

    'P15': 24,
    'A14': 24,

    'A15': 25,
};

let notes = [
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab',
  'A',
  'A#/Bb',
  'B',
];

const keys = notes.flatMap(note => note.split('/'));

let naturals = notes.filter(note => {return !note.includes('/')})

const scaleDegrees = {
    '1': 0,
    '2': 2,
    '3': 4,
    '4': 5,
    '5': 7,
    '6': 9,
    '7': 11,
};

const scales = [
  {
    'name': 'Major',
    'scales': [
      {
        'name': 'Ionian',
        'spelling': '1-2-3-4-5-6-7',
      },
      {
        'name': 'Dorian',
        'spelling': '1-2-b3-4-5-6-b7',
      },
      {
        'name': 'Phrygian',
        'spelling': '1-b2-b3-4-5-b6-b7',
      },
      {
        'name': 'Lydian',
        'spelling': '1-2-3-#4-5-6-7',
      },
      {
        'name': 'Mixolydian',
        'spelling': '1-2-3-4-5-6-b7',
      },
      {
        'name': 'Aeolian',
        'spelling': '1-2-b3-4-5-b6-b7',
      },
      {
        'name': 'Locrian',
        'spelling': '1-b2-b3-4-b5-b6-b7',
      },
    ],
  },
  {
    'name': 'Harmonic Minor',
    'scales': [
      {
        'name': 'Aeolian 7',
        'spelling': '1-2-b3-4-5-b6-7',
      },
      {
        'name': 'Locrian 6',
        'spelling': '1-b2-b3-4-b5-6-b7',
      },
      {
        'name': 'Ionian #5',
        'spelling': '1-2-3-4-#5-6-7',
      },
      {
        'name': 'Dorian #4',
        'spelling': '1-2-b3-#4-5-6-b7',
      },
      {
        'name': 'Phrygian 3',
        'spelling': '1-b2-3-4-5-b6-b7',
      },
      {
        'name': 'Lydian #2',
        'spelling': '1-#2-3-#4-5-6-7',
      },
      {
        'name': 'Locrian b4 bb7',
        'spelling': '1-b2-b3-b4-b5-b6-bb7',
      },
    ],
  },
  {
    'name': 'Melodic Minor',
    'scales': [
      {
        'name': 'Aeolian 6 7',
        'spelling': '1-2-b3-4-5-6-7',
      },
      {
        'name': 'Phrygian 6',
        'spelling': '1-b2-b3-4-5-6-b7',
      },
      {
        'name': 'Lydian #5',
        'spelling': '1-2-3-#4-#5-6-7',
      },
      {
        'name': 'Lydian b7',
        'spelling': '1-2-3-#4-5-6-b7',
      },
      {
        'name': 'Aeolian 3',
        'spelling': '1-2-3-4-5-b6-b7',
      },
      {
        'name': 'Locrian 2',
        'spelling': '1-2-b3-4-b5-b6-b7',
      },
      {
        'name': 'Locrian b4',
        'spelling': '1-b2-b3-b4-b5-b6-b7',
      },
    ],
  },
  {
    'name': 'Blues',
    'scales': [
      {
        'name': 'Major',
        'spelling': '1-2-b3-3-5-6',
      },
      {
        'name': 'Minor',
        'spelling': '1-b3-4-b5-5-b7',
      },
      {
        'name': 'Diminished',
        'spelling': '1-b2-b3-3-b5-5-6-b7',
      },
      {
        'name': 'Pentatonic',
        'spelling': '1-b3-4-5-b7',
      },
      {
        'name': "Rock'n'Roll",
        'spelling': '1-2-b3-3-4-b5-5-6-b7',
      },
    ],
  },
];

const instrumentSelect = document.getElementById('instrumentSelect');
const keySelect = document.getElementById('keySelect');
const scaleSelect = document.getElementById('scaleSelect');

function degreeToSemitones(degree) {
  match = degree.match(/^(\D*)(\d+)$/);
  semi = scaleDegrees[match[2]];
  match[1].split('').forEach(function(mod){
    if (mod == 'b') semi--;
    else if (mod == '#') semi++;
  });
  return semi;
}

function draw() {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let scale = getScaleNotes(scaleSelect.value, true);

  strings.forEach((row, i) => {
    let offset = notes.findIndex(note => {
      if (row.length == 1) return note == row;
      else return note.includes(row);
    });

    for (let j=0; j<instrument.frets; j++) {
      let note = notes[(offset+j)%12];
      note = note.split('/').filter(value => scale.includes(value))[0] || '';
      ctx.fillStyle = 'white';
      if (note == scale[0]) ctx.fillStyle = 'orange';
      else if (note) ctx.fillStyle = 'lightblue';

      if (note && drawMode == 'degrees') note = scale.indexOf(note) + 1;
      else if (drawMode == 'allNotes') note = notes[(offset+j)%12];

      ctx.fillRect(1+j*40, 1+i*40, 39, 39);
      ctx.fillStyle = 'black';
      ctx.fillText(note, 20+j*40, 21+i*40);
    }
  });
}

function getScaleNotes(spelling, translate) {
  return spelling.split('-').map(function(degree){
    let note = naturals[degree.split('').pop()-1];
    let acc = notes.indexOf(note) - degreeToSemitones(degree);
    if (Math.abs(acc) > 6) acc -= Math.sign(acc)*12;
    if (translate) {
      note = notes[(notes.indexOf(note) - acc + 12)%12];
      if (note.length > 2) note = note.split('/')[Math.max(Math.sign(acc), 0)];
      return note;
    }
    while (acc > 0) {
      note += 'b';
      acc--;
    }
    while (acc < 0) {
      note += '#';
      acc++;
    }
    return note;
  });
}

function setRootNote(root) {
  notes.push(...notes.splice(0, notes.findIndex(note => {
    if (root.length == 1) return note == root;
    else return note.includes(root);
  })));
  naturals.push(...naturals.splice(0, naturals.findIndex(note => {
    return note == root[0];
  })));
}

function setInstrument(name) {
  instrument = instruments[name];
  strings = instrument.tunings['Standard'].match(/[A-Z](?:#|b)?/g).reverse();
  canvas.width = 1+instrument.frets*40;
  canvas.height = 1+strings.length*40;
}

function changeInstrument() {
  setInstrument(instrumentSelect.value);
  draw();
}

function changeKey() {
    setRootNote(keySelect.value);
    draw();
}

function changeScale() {
  draw();
}

Object.keys(instruments).forEach(instrument => {
    instrumentSelect.appendChild(new Option(instrument, instrument));
});

keys.forEach(key => {
    keySelect.appendChild(new Option(key, key));
});

scales.forEach(category => {
  let optGroup = document.createElement('optgroup')
  optGroup.setAttribute('label', category.name)
  category.scales.forEach(scale => {
    optGroup.appendChild(new Option(`${category.name} - ${scale.name}`, scale.spelling));
  });
  scaleSelect.appendChild(optGroup);
});

let drawMode = 'degrees';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

instrumentSelect.value = 'Linnstrument';
changeInstrument();
