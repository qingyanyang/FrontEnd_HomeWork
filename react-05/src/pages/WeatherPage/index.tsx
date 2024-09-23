import { PreviewCard } from "@/components/PreviewCard";
import { CardsContainer } from "./style";
import { Column, Expanded, NotificationText, SizedBox } from "@/styles";
import { FutureWeathers } from "@/components/FutureWeathers";
import { SearchInput } from "@/components/SearchInput";
import { CityCardList } from "@/components/CityCardList";
import { useEffect, useState } from "react";
import { CityWeatherDataType } from "@/types";
import {
  getCityListdata,
  getForcastData,
  getTodayData,
} from "@/utils/getFormattedData";
import { fetchWeatherData } from "@/service/httpClient";
import { mappingWeatherModel } from "@/utils/getMappingdata";

// get four cities weather by default (Sydney, Shanghai, New York, London)
// searchByName
// const weatherData = [
//   {
//     city: "Shanghai",
//     weeklyWeatherData: [
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "01d",
//         date: "23 July",
//         day: "Sunday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "10d",
//         date: "24 July",
//         day: "Monday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "25 July",
//         day: "Tuesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "26 July",
//         day: "Wednesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "27 July",
//         day: "Thursday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//     ],
//   },
//   {
//     city: "London",
//     weeklyWeatherData: [
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "10d",
//         date: "23 July",
//         day: "Sunday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "10d",
//         date: "24 July",
//         day: "Monday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "13d",
//         date: "25 July",
//         day: "Tuesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "26 July",
//         day: "Wednesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "27 July",
//         day: "Thursday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//     ],
//   },
//   {
//     city: "New York",
//     weeklyWeatherData: [
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "02d",
//         date: "23 July",
//         day: "Sunday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "04d",
//         date: "24 July",
//         day: "Monday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "25 July",
//         day: "Tuesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "50d",
//         date: "26 July",
//         day: "Wednesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "03d",
//         date: "27 July",
//         day: "Thursday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//     ],
//   },
//   {
//     city: "Sydney",
//     weeklyWeatherData: [
//       {
//         tempRange: "20 ~ 32°",
//         iconCode: "01d",
//         date: "23 July",
//         day: "Sunday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "29 ~ 32°",
//         iconCode: "02n",
//         date: "24 July",
//         day: "Monday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "25 July",
//         day: "Tuesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "20 ~ 23°",
//         iconCode: "11d",
//         date: "26 July",
//         day: "Wednesday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//       {
//         tempRange: "28 ~ 32°",
//         iconCode: "09d",
//         date: "27 July",
//         day: "Thursday",
//         time: "12:00",
//         metaDetails: {
//           humidity: "85%",
//           pm25: "75µg",
//           somatosensoryTemp: "26°",
//           windSpeed: "9km/h",
//         },
//       },
//     ],
//   },
// ];

const cityList = ["Sydney", "Shanghai", "New York", "London"];

const WeatherPage = () => {
  const [defaultWeatherInfo, setDefaultWeatherInfo] = useState<
    CityWeatherDataType[]
  >([]);
  const [searchedCityName, setSearchedCityName] = useState<string>("");
  const [searchedCityWeatherData, setSearchedCityWeatherData] =
    useState<CityWeatherDataType | null>(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);
  // const [loading, setLoading] = useState<boolean>(false);

  // const getWeatherDataByCityName = async (
  //   cityName: string
  // ): Promise<CityWeatherDataType | null> => {
  //   // const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  //   // const url = `${process.env.REACT_APP_OPEN_WEATHER_BASE_URL}q=${cityName}&appid=${apiKey}`;
  //   // try {
  //   //   const res = await axios.get(url);
  //   //   const weatherData = mapWeatherModule(res.data);
  //   //   setWeatherInfo([...weatherInfo, weatherData]);
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const newWeatherInfo: CityWeatherDataType = weatherData.filter(
  //         (entity) => entity.city === cityName
  //       )[0];
  //       resolve(newWeatherInfo);
  //     }, 1000);
  //   });
  // };

  const getSearchedCityInput = (input: string) => {
    setSearchedCityName(input);
  };

  const getClickedCity = (index: number) => {
    setSelectedCityIndex(index);
    setSearchedCityWeatherData(null);
  };

  // fetch default city value
  useEffect(() => {
    const getDefaultWeatherData = async () => {
      const weatherPromise = cityList.map(
        (cityName) => fetchWeatherData(cityName)
        // getWeatherDataByCityName(cityName)
      );
      const weatherDataList = Promise.all(weatherPromise);
      const validWeatherDataList = (await weatherDataList).filter(
        (data) => data != null
      );
      console.log(validWeatherDataList);
      const defaultWeatherData = validWeatherDataList.map((singleData) =>
        mappingWeatherModel(singleData)
      );
      setDefaultWeatherInfo(defaultWeatherData);
    };
    getDefaultWeatherData();
  }, []);

  // searched content change
  useEffect(() => {
    const fetchSearchedWeatherData = async () => {
      if (searchedCityName) {
        //getWeatherDataByCityName(searchedCityName)
        const newWeatherInfo = await fetchWeatherData(searchedCityName);
        if (newWeatherInfo)
          setSearchedCityWeatherData(mappingWeatherModel(newWeatherInfo));
      }
    };
    fetchSearchedWeatherData();
  }, [searchedCityName]);

  // if (loading) {
  //   return <NotificationText>Loading...</NotificationText>;
  // }
  console.log("defaultWeatherInfo", defaultWeatherInfo);
  return (
    <CardsContainer $borderRadius={40} $padding={20}>
      {defaultWeatherInfo.length > 0 ? (
        <>
          <PreviewCard
            {...getTodayData(
              searchedCityWeatherData
                ? searchedCityWeatherData
                : defaultWeatherInfo[selectedCityIndex]
            )}
          />
          <Expanded>
            <Column
              $alignItems={"top"}
              $justifyContent="space-between"
              $height="100%"
            >
              <FutureWeathers
                {...getForcastData(
                  searchedCityWeatherData
                    ? searchedCityWeatherData
                    : defaultWeatherInfo[selectedCityIndex]
                )}
              />
              <SearchInput getSearchedCityInput={getSearchedCityInput} />
              <SizedBox $height={50} />
              <CityCardList
                cityList={getCityListdata(defaultWeatherInfo)}
                getClickedCity={getClickedCity}
              />
            </Column>
          </Expanded>
        </>
      ) : (
        <NotificationText>No Data Found</NotificationText>
      )}
    </CardsContainer>
  );
};
export default WeatherPage;
