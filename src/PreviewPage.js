import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'
import SiteNav from './SiteNav'


class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShows: PropTypes.array.isRequired
    }

    state = {
        ratingSelected: '',
        urlSelected: '',
        showSelected: ''
    }

    tvShowSelected = () => {
        this.setState({
            showSelected: this.props.show,
            ratingSelected: this.props.rating,
            urlSelected: this.props.url
        })
    }

    renderShows = () => {
        return this.props.tvShows
        .filter((tvShow) => {
            return (
                tvShow.rating < 4 
                ? tvShow.show
                : null
            )
        })
        .map((tvShow) => {
            return (tvShow.show ? <li><TVShow name={tvShow.show} selectHandler={this.tvShowSelected}></TVShow></li> : null)

        })

    }

    calculateAvgRating = () => {
        return this.props.tvShows.reduce((sum, tvShow) => {
            return sum + parseInt(tvShow.rating) / this.props.tvShows.length
    }, 0)
}

    render = () => {
        return (
            <div>
                <header class='menu'>
                    <h1>
                        <SiteNav />
                    </h1>
                </header>
                <main class='wrapper'>
                    <div class='sidebar'>
                        <h2>Shows</h2>
                        <p className="average_rating">Average Rating: {this.calculateAvgRating()}</p>
                        <ul>
                            {this.renderShows()}
                        </ul>
                    </div>
                    <div class='preview'>
                        <h2>
                            <span>Show Name: {this.state.showSelected}</span>
                            <span>Rating: {this.state.ratingSelected}</span>
                        </h2>
                        {/* <img src={this.props.url} alt='Show Preview' /> */}
                        <img src={this.state.urlSelected} alt='Show Preview' />
                        {/* <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fimages2.fanpop.com%2Fimage%2Fphotos%2F10900000%2FKing-Of-The-Hill-Title-king-of-the-hill-10923551-720-480.jpg&imgrefurl=http%3A%2F%2Fwww.fanpop.com%2Fclubs%2Fking-of-the-hill%2Fimages%2F10923551%2Ftitle%2Fking-hill-title-screencap&docid=a1Zl9IMbVfnZQM&tbnid=Pe10zHjQ9sLGMM%3A&vet=10ahUKEwiBvqPhvKjfAhW5JDQIHQtTAWUQMwg4KAAwAA..i&w=720&h=480&bih=612&biw=1280&q=king%20of%20the%20hill%20title&ved=0ahUKEwiBvqPhvKjfAhW5JDQIHQtTAWUQMwg4KAAwAA&iact=mrc&uact=8" alt='Show Preview' /> */}
                    </div>
                </main>
            </div>
        )
    }
}

export default PreviewPage