const { creep } = require('.');

Creep.prototype.sayHello = function sayHello() {
  this.say('Hello', true);
};

Creep.prototype.findSource = function findSource() {
  var sources = this.room.find(FIND_SOURCES);
  sources.forEach((source) => {
    if (source.getFreeWorkingSlots() > 0) {
      console.log('found source');
      source.addWorker(this);
      this.memory.sourceId = source.id;
      return source;
    }
  });
};

Creep.prototype.getSource = function getSource() {
  return Game.getObjectById(this.memory.sourceId);
};

Creep.prototype.harvestSource = function harvest() {
  let source = this.getSource();
  if (!source) {
    source = this.findSource();
  }
  if (this.harvest(source) == ERR_NOT_IN_RANGE) {
    this.moveTo(source);
  }
};
