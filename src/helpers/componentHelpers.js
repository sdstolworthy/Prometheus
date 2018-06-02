export function propsToHelperClasses(props = {}) {
  return Object.keys(props)
    // only work with prpos that evaluate to truthy
    .filter(prop => props[prop])
    // convert to kebab-case
    .map(prop => prop
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase())
    // only return the classes with the proper prefix
    .filter(propClass => propClass.indexOf('is-') === 0 || propClass.indexOf('has-') === 0)
    // convert to string
    .join(' ')
}