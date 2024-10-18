export function getUserName(email: string) {
  if (typeof email !== 'string') return null;

  const namePart = email.split('@')[0];

  return namePart
    .split('.')
    .map(part => 
      part
        .replace(/\d+/g, '')
        .charAt(0)
        .toUpperCase() + part.replace(/\d+/g, '').slice(1)
    )
    .join(' ');
}
