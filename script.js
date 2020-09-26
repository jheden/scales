const chords = [
  {
    'name': 'Triads',
    'chords': [
      {
        'name': 'Major',
        'spelling': 'R-M3-P5',
      },
      {
        'name': 'Minor',
        'spelling': 'R-m3-P5',
      },
      {
        'name': 'Augmented',
        'spelling': 'R-M3-A5',
      },
      {
        'name': 'Diminished',
        'spelling': 'R-m3-d5',
      },
    ],
  },
  {
    'name': 'Seventh',
    'chords': [
      {
        'name': 'Dominant',
        'spelling': 'R-M3-P5-m7',
      },
      {
        'name': 'Major',
        'spelling': 'R-M3-P5-M7',
      },
      {
        'name': 'Minor-major',
        'spelling': 'R-m3-P5-M7',
      },
      {
        'name': 'Minor',
        'spelling': 'R-m3-P5-m7',
      },
      {
        'name': 'Augmented-major',
        'spelling': 'R-M3-A5-M7',
      },
      {
        'name': 'Augmented',
        'spelling': 'R-M3-A5-m7',
      },
      {
        'name': 'Half-diminished',
        'spelling': 'R-m3-d5-m7',
      },
      {
        'name': 'Diminished',
        'spelling': 'R-m3-d5-d7',
      },
      {
        'name': 'Flat five',
        'spelling': 'R-M3-d5-m7',
      },
    ],
  },
  {
    'name': 'Suspended',
    'chords': [
      {
        'name': 'sus4',
        'spelling': 'R-P4-P5',
      },
      {
        'name': 'sus2',
        'spelling': 'R-M2-P5',
      },
      {
        'name': '7sus4',
        'spelling': 'R-P4-P5-m7',
      },
    ],
  },
];

const instruments = {
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
  'Deluge': {
    'frets': 16,
    'tunings': {
      'Standard': 'F#BEADGCF',
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

const intervals = {
    'R': 0,
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

const keys = notes.flatMap(note => note.split('/'));

let naturals = notes.filter(note => {return !note.includes('/')});

const scaleDegrees = {
    '1': 0,
    '2': 2,
    '3': 4,
    '4': 5,
    '5': 7,
    '6': 9,
    '7': 11,
};

const instrumentSelect = document.getElementById('instrumentSelect');
const keySelect = document.getElementById('keySelect');
const scaleSelect = document.getElementById('scaleSelect');
const chordSelect = document.getElementById('chordSelect');

let degreeToSemitones = degree => {
  match = degree.match(/^(\D*)(\d+)$/);
  semi = scaleDegrees[match[2]];
  match[1].split('').forEach(mod => {
    if (mod == 'b') semi--;
    else if (mod == '#') semi++;
  });
  return semi;
}

 let intervalToDegree = interval => {
  [quality, degree] = interval.split('');
  switch(quality) {
    case 'R':
      degree = '1';
      break;
    case 'A':
      degree += '#';
      break;
    case 'm':
      degree += 'b';
      break;
    case 'd':
      degree += 'bb';
      break;
  }
  return degree;
}

let degreeToInterval = degree => {
  [acc, number] = [degree.slice(0, -1), degree.slice(-1)];
  let interval = '';
  switch(acc) {
    case '':
      if (['1', '4', '5', '8'].includes(number)) {
        interval = 'P';
      } else {
        interval = 'M';
      }
      break;
    case '#':
      interval = 'A';
      break;
    case 'b':
      interval = 'm';
      break;
    case 'bb':
      interval = 'd';
      break;
  }
  return interval + number;
}

let draw = () => {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  let degrees, intervals, scale;
  if (scaleSelect.value) {
    degrees = scaleSelect.value.split('-');
    intervals = degrees.map(degree => {
      return degreeToInterval(degree);
    });
    scale = getScaleNotes(scaleSelect.value, true);
  } else {
    intervals = chordSelect.value.split('-');
    degrees = intervals.map(interval => {
      return intervalToDegree(interval);
    });
    scale = getChordNotes(intervals, true);
  }

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

      let text = '';
      if (note && drawMode == 'degrees') text = degrees[scale.indexOf(note)];//scale.indexOf(note) + 1;
      if (note && drawMode == 'intervals') text = intervals[scale.indexOf(note)];
      else if (drawMode == 'allNotes') text = notes[(offset+j)%12];

      ctx.fillRect(1+j*40, 1+i*40, 39, 39);
      ctx.fillStyle = 'black';
      ctx.fillText(text, 20+j*40, 21+i*40);
    }
  });
}

let getChordNotes = (chordIntervals, translate) => {
  return chordIntervals.map(function(interval){
    let note = notes[intervals[interval]]
    let acc = notes.indexOf(note) - intervals[interval];
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

let getScaleNotes = (spelling, translate=true) => {
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

let setRootNote = root => {
  notes.push(...notes.splice(0, notes.findIndex(note => {
    if (root.length == 1) return note == root;
    else return note.includes(root);
  })));
  naturals.push(...naturals.splice(0, naturals.findIndex(note => {
    return note == root[0];
  })));
}

let setInstrument = name => {
  instrument = instruments[name];
  strings = instrument.tunings['Standard'].match(/[A-Z](?:#|b)?/g).reverse();
  canvas.width = 1+instrument.frets*40;
  canvas.height = 1+strings.length*40;
}

let changeInstrument = () => {
  setInstrument(instrumentSelect.value);
  draw();
}

let changeKey = () => {
    setRootNote(keySelect.value);
    draw();
}

let changeChord = () => {
  scaleSelect.value = '';
  drawMode = 'intervals';
  draw();
}

let changeScale = () => {
  chordSelect.value = '';
  drawMode = 'degrees';
  draw();
}

Object.keys(instruments).forEach(instrument => {
    instrumentSelect.appendChild(new Option(instrument, instrument));
});

keys.forEach(key => {
    keySelect.appendChild(new Option(key, key));
});

chords.forEach(category => {
  let optGroup = document.createElement('optgroup')
  optGroup.setAttribute('label', category.name)
  category.chords.forEach(chord => {
    optGroup.appendChild(new Option(`${category.name} - ${chord.name}`, chord.spelling));
  });
  chordSelect.appendChild(optGroup);
});

scales.forEach(category => {
  let optGroup = document.createElement('optgroup')
  optGroup.setAttribute('label', category.name)
  category.scales.forEach(scale => {
    optGroup.appendChild(new Option(`${category.name} - ${scale.name}`, scale.spelling));
  });
  scaleSelect.appendChild(optGroup);
});

let drawMode;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

instrumentSelect.value = 'Linnstrument';
changeInstrument();
changeScale();
