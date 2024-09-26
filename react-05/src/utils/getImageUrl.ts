export function getWeatherIcon1XUrl(name: string): string {
  return new URL(`/src/assets/weatherIcon@1x/${name}.webp`, import.meta.url)
    .href;
}

export function getWeatherIcon2XUrl(name: string): string {
  return new URL(`/src/assets/weatherIcon@2x/${name}.webp`, import.meta.url)
    .href;
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

  return new URL(`/src/assets/weatherBackground/${name}.png`, import.meta.url)
    .href;
}

export function getCityBgUrl(name: string): string {
  return new URL(`/src/assets/cityImages/${name}.png`, import.meta.url).href;
}
