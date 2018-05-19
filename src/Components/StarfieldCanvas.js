import React, {Component} from 'react'
import Starfield from 'canvas-starfield'

class StarfieldCanvas extends Component {
    state = {
        starfield: null
    }
    componentDidMount() {
        const starfield = new Starfield({
            canvas: '#starfield',
            numStars: 400,
            maxRadius: 2,
            shootingStarInterval: 2
        })
        starfield.start()
        this.setState({starfield})

    }
    componentWillUnmount() {
        this
            .state
            .starfield
            .stop();
    }

    render() {
        return (
            <canvas
                id="starfield"
                style={{
                zIndex: -1,
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                objectFit:"cover"
            }}></canvas>
        )
    }
}

export default StarfieldCanvas