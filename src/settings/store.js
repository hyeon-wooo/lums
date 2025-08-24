import command from "./command/index.js";

let cached = command.load();

export const get = () => cached;

export const set = (next) => {
  cached = command.update(next);
  return cached;
};

export const update = (partial) => {
  cached = command.update({ ...cached, ...partial });
  return cached;
};

export const reload = () => {
  cached = command.load();
  return cached;
};

export default { get, set, update, reload };
