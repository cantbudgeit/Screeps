function sourceMemory(id, maxWorkers, workers) {
  this.id = id;
  this.maxWorkers = maxWorkers;
  this.workers = workers;
}

var getSourceMemory =
  /**
   * @this {Source}
   */
  function () {
    if (!this.room.memory.sources) {
      this.room.memory.sources = [];
      this.room.memory.sources = [new sourceMemory(this.id, 3, 0)];
      console.log('initalizeMemory: ' + this.room.memory.sources);
    }
    if (!_.find(this.room.memory.sources, (s) => s.id == this.id)) {
      this.room.memory.sources.push(new sourceMemory(this.id, 3, 0));
    }
    return _.find(this.room.memory.sources, (source) => source.id == this.id);
  };

Source.prototype.getFreeWorkingSlots = function () {
  let memory = getSourceMemory();
  console.log('SourceMmemory: ' + JSON.stringify(memory));
  return memory.maxWorkers - memory.workers;
};

/** @param {Creep} creep **/
Source.prototype.addWorker = function (creep) {
  let sourceMemory = getSourceMemory();
  _.union(sourceMemory.workers, [creep.name]);
};

Source.prototype.removeWorker = function (creep) {
  let sourceMemory = getSourceMemory();
  const index = sourceMemory.workers.indexOf(creep.name);
  if (index > -1) {
    sourceMemory.workers.splice(index, 1);
  }
};
