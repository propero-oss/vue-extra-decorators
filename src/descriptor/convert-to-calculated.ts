

export function convertToCalculated(desc: PropertyDescriptor) {
  if (!("value" in desc)) return;
  const {value} = desc;
  const key = Symbol("calculated");
  desc.get = function(this: any) {
    if (!(key in this))
      this[key] = value;
    return this[key];
  };
  desc.set = function(this: any, value: any) {
    this[key] = value;
  };
  delete desc.value;
}
