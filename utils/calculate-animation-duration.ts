// utils/calculate-animation-duration.ts
export const calculateAnimationDuration = (
  textWidth: number,
  containerWidth: number,
  baseSpeed: number = 20,
  minDuration: number = 4,
): string => {
  const scrollDistance = textWidth - containerWidth;
  const calculatedDuration = scrollDistance / baseSpeed;
  const totalDuration = Math.max(calculatedDuration * 2 + 2, minDuration); // Double for return + pause
  return `${totalDuration}s`;
};
