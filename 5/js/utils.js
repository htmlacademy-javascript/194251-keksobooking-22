import * as DATA from './initData.js';
import { getRandomInteger, getRandomFractional, getArrayIndex } from './helpers.js'

const createObject = () => {

  let arr = [];

  const locationObj = {
    x: getRandomFractional(35.65, 35.70, 5),
    y: getRandomFractional(139.70, 139.80, 5),
  }

  const ads = {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'Информация об объекте',
      address: `${locationObj.x}` + ',' + `${locationObj.y}`,
      price: getRandomInteger(1, 10000),
      type: DATA.PLACE[getArrayIndex(DATA.PLACE)],
      rooms: getRandomInteger(1, 100),
      guests: getRandomInteger(1, 100),
      checkin: DATA.TIME[getArrayIndex(DATA.TIME)],
      checkout: DATA.TIME[getArrayIndex(DATA.TIME)],
      features: DATA.FEATURES.slice(0, getArrayIndex(DATA.FEATURES)),
      description: 'Информация об объекте',
      photos: DATA.PHOTOS[getArrayIndex(DATA.PHOTOS)],
    },
    location: {
      x: locationObj.x,
      y: locationObj.y,
    },
  };

  arr.push(ads);

  return arr;
}
export default createObject;
