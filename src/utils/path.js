export function validatePath(item) {
  return item.title.replace(/\s/g, '-').toLowerCase();
}

export function validatePathforBreadcrumbs(route) {
  if (!route) {
    return;
  }
  const handleTripleHyphens = route?.replace(/-/g, ' ');
  const finalResult = handleTripleHyphens.replace(/[\s]{3}/g, ' - ');
  return handleUppercaseTitle(finalResult);
}

function handleUppercaseTitle(title) {
  return title
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
