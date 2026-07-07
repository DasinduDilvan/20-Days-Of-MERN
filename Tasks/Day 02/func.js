export function welcomeMessage({ name, role }) {
  return `Welcome back, ${name}! You are logged in as an ${role}.`;
}

export function logMessage(message) {
  return `[SYSTEM LOG]: ${message}`;
}