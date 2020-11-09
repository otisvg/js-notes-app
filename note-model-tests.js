(function(exports) {
  function noteCanTakeAndStoreText() {
    var note = new Note("What a lovely day!");

    if (note.text !== "What a lovely day!") {
      throw new Error("It's a bad day, our test fails :(");
    }
  };
  noteCanTakeAndStoreText();
})(this);
