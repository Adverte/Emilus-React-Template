import React, { Component, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import {Tooltip} from 'react-tooltip'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
		<ComposableMap data-tip="" height={200} projectionConfig={{ scale: 80 }}>
			<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								onMouseEnter={() => {
									const { NAME, POP_EST } = geo.properties;
									setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
								}}
								onMouseLeave={() => {
									setTooltipContent("");
								}}
								style={{
									default: {
										fill: "#D6D6DA",
										outline: "none"
									},
									hover: {
										fill: "#F53",
										outline: "none"
									},
									pressed: {
										fill: "#E42",
										outline: "none"
									}
								}}
							/>
						))
					}
				</Geographies>
		</ComposableMap>
  );
};

function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <Tooltip>{content}</Tooltip>
    </div>
  );
}

export class MapChartWithTooltip extends Component {
	render() {
		return (
      <Map />
		)
	}
}

export default MapChartWithTooltip
