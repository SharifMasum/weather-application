import React from "react";
import { BsThermometerHalf, BsCloudSun } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

// Component to render horizontal weather detail with an icon
const DetailItem = ({ icon: Icon, text, data }) => (
  <div className="flex font-light text-sm items-center justify-center">
    <Icon size={20} className="mr-1" />
    <span className="capitalize">{`${text} :`}</span>
    <span className="font-medium ml-1">{data}</span>
  </div>
);

// Component to render vertical weather detail with a larger icon
const VerticalDetailItem = ({ icon: Icon, text, data }) => (
  <div className="flex flex-col justify-center items-start">
    <Icon size={45} />
    <p className="font-medium mt-1 capitalize">{text}</p>
    <p className="font-medium">{data}</p>
  </div>
);

const Details = ({
  unit,
  weather: {
    condition_icon,
    condition_text,
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    sunrise,
    sunset,
    moonrise,
    moonset,
  },
}) => {
  // Determine the correct temperature and wind speed based on the selected unit
  const temp = unit === "c" ? `${temp_c}°C` : `${temp_f}°F`;
  const feelsLike = unit === "c" ? `${feelslike_c}°C` : `${feelslike_f}°F`;
  const windSpeed = unit === "c" ? `${wind_kph} km/h` : `${wind_mph} m/h`;

  // Details to be displayed horizontally
  const horizontalDetails = [
    { id: 1, icon: BsThermometerHalf, text: "real feel", data: feelsLike },
    { id: 2, icon: MdOutlineWaterDrop, text: "humidity", data: `${humidity}%` },
    { id: 3, icon: FiWind, text: "wind", data: windSpeed },
  ];

  // Details to be displayed vertically
  const verticalDetails = [
    { id: 1, icon: WiSunrise, text: "sunrise", data: sunrise },
    { id: 2, icon: WiSunset, text: "sunset", data: sunset },
    { id: 3, icon: WiMoonrise, text: "moonrise", data: moonrise },
    { id: 4, icon: WiMoonset, text: "moonset", data: moonset },
  ];

  return (
    <div>
      {/* Display weather condition text */}
      <div className="flex items-center justify-center py-6 text-left text-cyan-300">
        <p>{condition_text}</p>
      </div>

      {/* Display main temperature, condition icon, and horizontal details */}
      <div className="flex flex-row items-center justify-between py-3">
        <img className="w-20" src={condition_icon} alt="Weather icon" />
        <p className="text-5xl">{temp}</p>
        <div className="flex flex-col items-start space-y-2">
          {horizontalDetails.map(({ id, icon, text, data }) => (
            <DetailItem key={id} icon={icon} text={text} data={data} />
          ))}
        </div>
      </div>

      {/* Display vertical details (sunrise, sunset, moonrise, moonset) */}
      <div className="flex flex-row items-center justify-between space-x-2 text-sm py-3">
        {verticalDetails.map(({ id, icon, text, data }) => (
          <VerticalDetailItem key={id} icon={icon} text={text} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Details;
