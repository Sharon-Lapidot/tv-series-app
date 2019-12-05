import React from 'react';
import Loader from '../../components/Loader/Loader';
import{ Link }from 'react-router-dom';

export default class SingleSeries extends React.Component{
    state = {
      show: null,
    };

    componentDidMount() {
        const  id = this.props.match.params.id;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response)=> response.json())
            .then((json)=> this.setState({show: json}));
    };

    render() {
        const {show} = this.state;
        console.log(show);

        return (
            <div>
                {show === null && <Loader/>}
                {
                    show !== null &&
                    <div>
                        <p>{show.name}
                        <p>Premiered - {show.premiered} </p></p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt={'show'} src={`${show.image.medium}`}/>
                        </p>

                        <div>
                            <Link to={'/'}>
                                Back
                            </Link>
                        </div>
                    </div>

                }
            </div>
        );
    }

}
