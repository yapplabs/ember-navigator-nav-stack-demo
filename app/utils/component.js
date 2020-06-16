export function extractComponentKey(componentRef) {
  if (!componentRef) {
    return 'none';
  }
  let result = componentRef.name || componentRef.inner.name;
  if (componentRef.args.named.has && componentRef.args.named.has('route')) {
    let route = componentRef.args.named.get('route').value();
    if (route) {
      result += `:${route.key}`;
    }
  }
  return result;
}
