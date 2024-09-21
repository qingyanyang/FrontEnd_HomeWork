export function getWeatherIconUrl(name: string): string {
  return new URL(`/src/assets/${name}.webp`, window.location.origin).href;
}
export function getWeatherBGUrl(name: string): string {
  return new URL(
    `/src/assets/weatherBackground/${name}.png`,
    window.location.origin
  ).href;
}
