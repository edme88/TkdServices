export const checkOnlyText = (variable) => /^[A-Za-z]+$/.test(variable);

export const checkPeso = (variable) => variable > 20 && variable < 200;

export const checkTextNumber = (variable) => {
  const pattern = /^[A-Za-z0-9]+$/i; // Usar directamente la expresión regular
  return pattern.test(variable);
};
