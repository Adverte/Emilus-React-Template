import React from 'react';
import RegiondataWidget from "../components/shared-components/RegiondataWidget";
import Flex from "../components/shared-components/Flex";

function HomePage() {
    const regionData = [
        {
            color: '#3e82f7',
            name: 'United States of America',
            value: '37.61%'
        },
        {
            color: '#04d182',
            name: 'Brazil',
            value: '16.79%'
        },
        {
            color: '#ffc542',
            name: 'India',
            value: '12.42%'
        },
        {
            color: '#fa8c16',
            name: 'China',
            value: '9.85%'
        },
        {
            color: '#ff6b72',
            name: 'Malaysia',
            value: '7.68%'
        },
        {
            color: '#a461d8',
            name: 'Thailand',
            value: '5.11%'
        }
    ]
    return (
        <RegiondataWidget
            title="Entrance by region"
            data={regionData}
            content={
                <div className="mb-4">
                    <Flex alignItems="center">
                        <h2 className="mb-0 font-weight-bold">37.61%</h2>
                    </Flex>
                    <span className="text-muted">Top entrance region</span>
                </div>
            }
        />
    )
}

export default HomePage;
