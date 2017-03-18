export const stepper = ({
  frameDuration,
  currentPosition,
  destination,
  velocity,
  stiffness,
  damping,
  precision = 0.01,
}) => {
  const fSpring = -stiffness * (currentPosition - destination);
  const fDamper = -damping * velocity;

  const acceleration = fSpring + fDamper;

  const newVelocity = velocity + acceleration * frameDuration;
  const newPosition = currentPosition + newVelocity * frameDuration;

  const isBelowPrecisionThreshold = (
    Math.abs(newVelocity) < precision ||
    Math.abs(newPosition - destination) < precision
  );

  if (isBelowPrecisionThreshold) {
    return { position: destination, velocity: 0 };
  }

  return { position: newPosition, velocity: newVelocity };
};
