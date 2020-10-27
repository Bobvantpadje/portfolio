export const addOpacity = (color: string, opacity: number) => {
  const closePosition = color.lastIndexOf(')');
  return insertAtPosition(color, `, ${opacity}`, closePosition);
};

const insertAtPosition = (str: string, insertValue: string, position: number) =>
  `${str.substring(0, position)}${insertValue}${str.substring(position)}`;
