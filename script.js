const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const size = 1;
const gravity = 20;
const delta_t = 0.05;

const getDistance = (a, b) =>
  ((b[1] - a[1]) ** 2 + (b[0] - a[0]) ** 2) ** (1 / 2);

const firstPoint = {
  mass: 1,
  position: [200, 200],
  speed: [-5, 6],
};

const secondPoint = {
  mass: 1000,
  position: [400, 400],
  speed: [0, 0],
};

const thirdPoint = {
  mass: 1,
  position: [610, 610],
  speed: [5, -5],
};

let milliseconds = Date.now();
setInterval(() => {
  const currentMilliseconds = Date.now();
  const delta = currentMilliseconds - milliseconds;
  milliseconds = currentMilliseconds;

  const firstSecondDistance = getDistance(
    firstPoint.position,
    secondPoint.position
  );

  const firstThirdDistance = getDistance(
    firstPoint.position,
    thirdPoint.position
  );

  const firstSecondAcceleration =
    (gravity * secondPoint.mass) / firstSecondDistance ** 2;

  const firstSecondAccelerationX =
    (firstSecondAcceleration *
      (secondPoint.position[0] - firstPoint.position[0])) /
    firstSecondDistance;

  const firstSecondAccelerationY =
    (firstSecondAcceleration *
      (secondPoint.position[1] - firstPoint.position[1])) /
    firstSecondDistance;

  const firstThirdAcceleration =
    (gravity * thirdPoint.mass) / firstThirdDistance ** 2;

  const firstThirdAccelerationX =
    (firstThirdAcceleration *
      (thirdPoint.position[0] - firstPoint.position[0])) /
    firstThirdDistance;

  const firstThirdAccelerationY =
    (firstThirdAcceleration *
      (thirdPoint.position[1] - firstPoint.position[1])) /
    firstThirdDistance;

  const firstAccelerationX = firstSecondAccelerationX + firstThirdAccelerationX;
  const firstAccelerationY = firstSecondAccelerationY + firstThirdAccelerationY;

  const firstSpeedX =
    firstPoint.speed[0] + firstAccelerationX * delta_t * delta;
  const firstSpeedY =
    firstPoint.speed[1] + firstAccelerationY * delta_t * delta;

  const firstPositionX = firstPoint.position[0] + firstSpeedX * delta_t * delta;
  const firstPositionY = firstPoint.position[1] + firstSpeedY * delta_t * delta;

  const secondFirstDistance = getDistance(
    secondPoint.position,
    firstPoint.position
  );

  const secondThirdDistance = getDistance(
    secondPoint.position,
    thirdPoint.position
  );

  const secondFirstAcceleration =
    (gravity * firstPoint.mass) / secondFirstDistance ** 2;

  const secondFirstAccelerationX =
    (secondFirstAcceleration *
      (firstPoint.position[0] - secondPoint.position[0])) /
    secondFirstDistance;

  const secondFirstAccelerationY =
    (secondFirstAcceleration *
      (firstPoint.position[1] - secondPoint.position[1])) /
    secondFirstDistance;

  const secondThirdAcceleration =
    (gravity * thirdPoint.mass) / secondThirdDistance ** 2;

  const secondThirdAccelerationX =
    (secondThirdAcceleration *
      (thirdPoint.position[0] - secondPoint.position[0])) /
    secondThirdDistance;

  const secondThirdAccelerationY =
    (secondThirdAcceleration *
      (thirdPoint.position[1] - secondPoint.position[1])) /
    secondThirdDistance;

  const secondAccelerationX =
    secondFirstAccelerationX + secondThirdAccelerationX;
  const secondAccelerationY =
    secondFirstAccelerationY + secondThirdAccelerationY;

  const secondSpeedX =
    secondPoint.speed[0] + secondAccelerationX * delta_t * delta;
  const secondSpeedY =
    secondPoint.speed[1] + secondAccelerationY * delta_t * delta;

  const secondPositionX =
    secondPoint.position[0] + secondSpeedX * delta_t * delta;
  const secondPositionY =
    secondPoint.position[1] + secondSpeedY * delta_t * delta;

  const thirdFirstDistance = getDistance(
    thirdPoint.position,
    secondPoint.position
  );

  const thirdSecondDistance = getDistance(
    thirdPoint.position,
    secondPoint.position
  );

  const thirdFirstAcceleration =
    (gravity * firstPoint.mass) / thirdFirstDistance ** 2;

  const thirdFirstAccelerationX =
    (thirdFirstAcceleration *
      (firstPoint.position[0] - thirdPoint.position[0])) /
    thirdFirstDistance;

  const thirdFirstAccelerationY =
    (thirdFirstAcceleration *
      (firstPoint.position[1] - thirdPoint.position[1])) /
    thirdFirstDistance;

  const thirdSecondAcceleration =
    (gravity * secondPoint.mass) / thirdSecondDistance ** 2;

  const thirdSecondAccelerationX =
    (thirdSecondAcceleration *
      (secondPoint.position[0] - thirdPoint.position[0])) /
    thirdSecondDistance;

  const thirdSecondAccelerationY =
    (thirdSecondAcceleration *
      (secondPoint.position[1] - thirdPoint.position[1])) /
    thirdSecondDistance;

  const thirdAccerationX = thirdFirstAccelerationX + thirdSecondAccelerationX;
  const thirdAccerationY = thirdFirstAccelerationY + thirdSecondAccelerationY;

  const thirdSpeedX = thirdPoint.speed[0] + thirdAccerationX * delta_t * delta;
  const thirdSpeedY = thirdPoint.speed[1] + thirdAccerationY * delta_t * delta;

  const thirdPositionX = thirdPoint.position[0] + thirdSpeedX * delta_t * delta;
  const thirdPositionY = thirdPoint.position[1] + thirdSpeedY * delta_t * delta;

  firstPoint.speed[0] = firstSpeedX;
  firstPoint.speed[1] = firstSpeedY;
  firstPoint.position[0] = firstPositionX;
  firstPoint.position[1] = firstPositionY;

  secondPoint.speed[0] = secondSpeedX;
  secondPoint.speed[1] = secondSpeedY;
  secondPoint.position[0] = secondPositionX;
  secondPoint.position[1] = secondPositionY;

  thirdPoint.speed[0] = thirdSpeedX;
  thirdPoint.speed[1] = thirdSpeedY;
  thirdPoint.position[0] = thirdPositionX;
  thirdPoint.position[1] = thirdPositionY;
}, 0);

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(firstPoint.position[0], firstPoint.position[1], size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    secondPoint.position[0],
    secondPoint.position[1],
    size,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.arc(thirdPoint.position[0], thirdPoint.position[1], size, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(draw);
};

requestAnimationFrame(draw);
