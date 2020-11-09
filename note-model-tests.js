 function noteCanTakeAndStoreText() {
    var note = new Note("What a lovely day!");

    assert.isTrue(note.text === "What a lovely day!") 
  };

  noteCanTakeAndStoreText();

