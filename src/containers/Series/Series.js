import React from 'react';
import Intro from '../../components/Intro/Intro';
import SeriesList from '../../components/SeriesList/SeriesList'
import Loader from '../../components/Loader/Loader'

export default class Series extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            series: [],
            seriesName: '',
            isFetching: false,
        };
    }

    handleChange = (e) =>{
        this.setState({seriesName: e.target.value , isFetching: true})

        fetch(`https://api.tvmaze.com/search/shows?q=${ e.target.value}`)
            .then((response)=> response.json())
            .then((json)=> this.setState({series: json , isFetching: false}));
    };


    render() {
        const {series , seriesName , isFetching} = this.state;
        return (
            <div className={'series'}>

                <div className={'intro'}>
                    <Intro message={'Here you can find all of your most loved series'}/>
                </div>

                <div>
                    <form className={'form'}>
                        <input type={'text'} onChange={this.handleChange}/>
                    </form>
                </div>

                <div className={'SeriesList'}>
                    {
                        !isFetching && series.length === 0 && seriesName.trim() === '' && <p>Please enter series name into the input</p>
                    }
                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== '' && <p>No TV series have been found with this name</p>
                    }
                    {
                        isFetching && <Loader/>
                    }
                    {
                        !isFetching && seriesName.trim() !=='' && <SeriesList list={this.state.series}/>
                    }
                </div>

            </div>
        );
    }
}