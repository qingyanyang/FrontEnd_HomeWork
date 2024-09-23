export function getWeatherIconUrl(name: string): string {
  return new URL(`/src/assets/${name}.webp`, window.location.origin).href;
}

/**
 *
 *includes('01')->'sunnyBg'
 *includes('11')->'snowBg'
 *includes('10|09')->'rainBg'
 */

export function getWeatherBGUrl(weatherIconCode: string): string {
  let name = "cloudyBg";

  if (weatherIconCode.includes("01")) {
    name = "sunnyBg";
  } else if (weatherIconCode.includes("11")) {
    name = "snowBg";
  } else if (weatherIconCode.includes("09") || weatherIconCode.includes("10")) {
    name = "rainBg";
  }

  const imgUrl = `/src/assets/weatherBackground/${name}.png`;

  return new URL(imgUrl, window.location.origin).href;
}

export function getCityBgUrl(name: string): string {
  return new URL(`/src/assets/cityImages/${name}.png`, window.location.origin)
    .href;
}
