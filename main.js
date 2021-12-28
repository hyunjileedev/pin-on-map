'use strict';

const pin = document.querySelector('.pin');
const coordinates = document.querySelector('.coordinates');

addEventListener('load', () => {
  const pinHeight = pin.getBoundingClientRect().height;

  initPosition();

  addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY - pinHeight;
    updatePosition(pin, coordinates, x, y);
  });

  addEventListener('click', e => {
    const newPin = createPin();
    const newCoordinates = createCoordinates();
    document.body.append(newPin, newCoordinates);

    const x = e.clientX;
    const y = e.clientY - pinHeight;
    updatePosition(newPin, newCoordinates, x, y);
  });
});

function initPosition() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  updatePosition(pin, coordinates, x, y);
}

function updatePosition(pin, coordinates, x, y) {
  pin.style.transform = `translate(${x}px, ${y}px)`;
  coordinates.style.transform = `translate(${x}px, ${y}px)`;
  coordinates.textContent = `(${parseInt(x)}, ${parseInt(y)})`;
}

function createPin() {
  const pin = document.createElement('img');
  pin.setAttribute('src', 'images/pin.png');
  pin.setAttribute('class', 'pin');
  return pin;
}

function createCoordinates() {
  const coordinates = document.createElement('span');
  coordinates.setAttribute('class', 'coordinates');
  return coordinates;
}
