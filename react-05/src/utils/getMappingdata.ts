import { CityWeatherDataType } from "@/types";
import dayjs from "dayjs";
/**
 * 
 * 
 * {
    city: "Shanghai",
    weeklyWeatherData: [
      {
        tempRange: "28 ~ 32°",
        iconCode: "01d",
        date: "23 July",
        day: "Sunday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "10d",
        date: "24 July",
        day: "Monday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "25 July",
        day: "Tuesday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "26 July",
        day: "Wednesday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
      {
        tempRange: "28 ~ 32°",
        iconCode: "09d",
        date: "27 July",
        day: "Thursday",
        time: "12:00",
        metaDetails: {
          humidity: "85%",
          pm25: "75µg",
          somatosensoryTemp: "26°",
          windSpeed: "9km/h",
        },
      },
    ],
  },
 * 
 */
/* eslint-disable */
export const mappingWeatherModel = (data: any): CityWeatherDataType => {
  const city = data.location.name;
  const weeklyWeatherData: any[] = [];
  // get current metaDetails
  const currentData = data.current;
  const metaDetailsCurrent = {
    humidity: `${currentData.humidity}%`,
    pm25: `${Math.round(currentData.air_quality.pm2_5)}µg`,
    somatosensoryTemp: `${Math.round(currentData.feelslike_c)}°`,
    windSpeed: `${Math.round(currentData.wind_kph)}km/h`,
  };

  data.forecast.forecastday.forEach((singleDayData: any, index: number) => {
    const unixTimestamp = singleDayData.date_epoch;
    const dayjsObj = dayjs.unix(unixTimestamp);
    const date = dayjsObj.date();
    const month = dayjsObj.format("MMMM");
    const day = dayjsObj.format("dddd");
    const time = dayjsObj.format("HH:mm");

    const singleData = singleDayData.day;
    const tempRange = `${Math.round(singleData.mintemp_c)} ~ ${Math.round(
      singleData.maxtemp_c
    )}°`;
    const iconCode = getIconCode(singleData.condition.text);
    const metaDetails = index === 0 ? metaDetailsCurrent : null;
    const dayWeatherData = {
      tempRange: tempRange,
      iconCode: iconCode,
      date: `${date} ${month}`,
      day: day,
      time: time,
      metaDetails: metaDetails,
    };
    weeklyWeatherData.push(dayWeatherData);
  });

  return {
    city: city,
    weeklyWeatherData: weeklyWeatherData,
  };
};

/**
 * let iconText
 * iconText.contains('sunny') -> return '01d'
 * iconText.contains('clear') -> return '01n'
 * iconText.contains('cloudy') -> return '03d'
 * iconText.contains('overcast') -> return '10d'
 * iconText.contains('mist') -> return '04d'
 * iconText.contains('rain') -> return '09d'
 * iconText.contains('snow') -> return '13d'
 * iconText.contains('sleet') -> return '13d'
 * iconText.contains('drizzle') -> return '09d'
 * iconText.contains('ice') -> return '13d'
 * iconText.contains('partly cloudy') -> return '02d'
 * iconText.contains('thunder') -> return '11d'
 * iconText.contains('blizzard') -> return '13d'
 * iconText.contains('fog') -> return '50d'
 * default: 10d
 */
function getIconCode(iconText: string) {
  iconText = iconText.toLocaleLowerCase();
  if (iconText.includes("sunny")) {
    return "01d";
  } else if (iconText.includes("clear")) {
    return "01n";
  } else if (iconText.includes("cloudy")) {
    return "03d";
  } else if (iconText.includes("mist")) {
    return "04d";
  } else if (iconText.includes("overcast")) {
    return "10d";
  } else if (iconText.includes("rain")) {
    return "09d";
  } else if (
    iconText.includes("snow") ||
    iconText.includes("sleet") ||
    iconText.includes("ice") ||
    iconText.includes("blizzard")
  ) {
    return "13d";
  } else if (iconText.includes("drizzle")) {
    return "09d";
  } else if (iconText.includes("partly cloudy")) {
    return "02d";
  } else if (iconText.includes("thunder")) {
    return "11d";
  } else if (iconText.includes("fog")) {
    return "50d";
  } else {
    return "10d"; // default value
  }
}

/**
 *
 * includes('01')->'linear-gradient(to bottom right,rgba(153, 178, 239, 1),rgba(26, 110, 234, 0.8))'
 *includes('11')->'linear-gradient(to bottom right,rgba(142, 164, 233, 1),rgba(92, 77, 212, 0.8))'
 *includes('10|09')->'linear-gradient(to bottom right,rgba(137, 151, 233, 1),rgba(68, 84, 220, 0.8))'
 */
export const getCityBgColorString = (weatherIconCode: string) => {
  let colorLight = "rgba(153, 178, 239, 1)";
  let colorDark = "rgba(26, 110, 234, 0.8)";

  if (weatherIconCode.includes("11")) {
    colorLight = "rgba(142, 164, 233, 1)";
    colorDark = "rgba(92, 77, 212, 0.8)";
  } else if (weatherIconCode.includes("10") || weatherIconCode.includes("09")) {
    colorLight = "rgba(137, 151, 233, 1)";
    colorDark = "rgba(68, 84, 220, 0.8)";
  }

  const bgString = `linear-gradient(to bottom right,${colorLight},${colorDark})`;
  return bgString;
};

export const getPreviewBgColorString = (weatherIconCode: string) => {
  let colorLight = "rgba(153, 178, 239, 1)";
  let colorDark = "rgba(26, 110, 234, 0.8)";

  if (weatherIconCode.includes("11")) {
    colorLight = "rgba(142, 164, 233, 1)";
    colorDark = "rgba(92, 77, 212, 0.8)";
  } else if (weatherIconCode.includes("10") || weatherIconCode.includes("09")) {
    colorLight = "rgba(137, 151, 233, 1)";
    colorDark = "rgba(68, 84, 220, 0.8)";
  }

  return { colorLight, colorDark };
};
