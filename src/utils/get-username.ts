export function getUserName(email : string) {
    if (typeof email !== 'string') return null;
    
    const namePart = email.split('@')[0];
    return namePart
      .split('.')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
  