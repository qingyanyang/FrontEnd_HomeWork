import { PreviewCard } from "@/components/PreviewCard";
import { CardsContainer } from "./style";
import { Column, Expanded, Float, SizedBox } from "@/styles";
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
import { useLoadingError } from "@/context/useLoadingError";
import { FadeLoader } from "react-spinners";

const cityList = ["Sydney", "Shanghai", "New York", "London"];

const WeatherPage = () => {
  const { loading, setLoading, setError } = useLoadingError();
  const [defaultWeatherInfo, setDefaultWeatherInfo] = useState<
    CityWeatherDataType[]
  >([]);
  const [searchedCityName, setSearchedCityName] = useState<string>("");
  const [searchedCityWeatherData, setSearchedCityWeatherData] =
    useState<CityWeatherDataType | null>(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);

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
      try {
        setError(null);
        setLoading(true);
        const weatherPromise = cityList.map((cityName) =>
          fetchWeatherData(cityName)
        );

        const weatherDataList = Promise.all(weatherPromise);
        const validWeatherDataList = (await weatherDataList).filter(
          (data) => data != null
        );

        const defaultWeatherData = validWeatherDataList.map((singleData) =>
          mappingWeatherModel(singleData)
        );

        setDefaultWeatherInfo(defaultWeatherData);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };
    getDefaultWeatherData();
  }, [setError, setLoading]);

  // searched content change
  useEffect(() => {
    const fetchSearchedWeatherData = async () => {
      if (searchedCityName) {
        try {
          setError(null);
          setLoading(true);
          const newWeatherInfo = await fetchWeatherData(searchedCityName);
          if (newWeatherInfo)
            setSearchedCityWeatherData(mappingWeatherModel(newWeatherInfo));
        } catch (err) {
          console.error(err);
          setError("Cannot find the city, \nPlease check your spelling.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchSearchedWeatherData();
  }, [searchedCityName, setError, setLoading]);

  return (
    <>
      <CardsContainer $borderRadius={40} $padding={20}>
        {loading && (
          <Float>
            <FadeLoader />
          </Float>
        )}
        {defaultWeatherInfo.length > 0 && (
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
        )}
      </CardsContainer>
    </>
  );
};
export default WeatherPage;
