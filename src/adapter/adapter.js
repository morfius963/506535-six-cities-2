import {camelCase} from "lodash";

const adapter = (obj) => {
  const keys = Object.keys(obj);

  return keys.reduce((acc, key) => {
    const oldValue = obj[key];
    const newValue = (typeof oldValue === `object` && !Array.isArray(oldValue)) ? adapter(oldValue) : oldValue;
    const newKey = camelCase(key);

    acc[newKey] = newValue;

    return acc;
  }, {});
};

export default adapter;
