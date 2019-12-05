import React from 'react';
import './seriesList.css'
import {Link} from 'react-router-dom';

const SeriesListItem = (props) => {
    return (
        <li>
            <Link to={`/series/${props.series.show.id}`}>
                {props.series.show.name}
            </Link>
        </li>
    );
};

const SeriesList = (props) =>{

    const list = props.list;
    console.log(list);
    return (
        <div>
            <ul className={'series-list'}>
            {
                list.map((series) =>
                <SeriesListItem series={series}  key={series.show.id}/>)
            }
            </ul>
        </div>
    );

};

export default SeriesList;