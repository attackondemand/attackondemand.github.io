import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class Img extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lightboxOpen: false
        };
    }

    caption() {
        if (this.props.caption) {
            return (
                <p className={'caption'}>
                    <em>
                        {this.props.caption}
                    </em>
                </p>
            );
        }
    }

    render() {
        return (
            <div >
                <div >
                    <img onClick={() => this.setState({ lightboxOpen: true })}  className={(this.props.styleClass ? this.props.styleClass : '')} src={this.props.img}/>
                    {this.state.lightboxOpen && (
                        <Lightbox
                            mainSrc={this.props.img}
                            onCloseRequest={() => this.setState({ lightboxOpen: false })}
                            enableZoom={false}
                        />
                    )}
                </div>
                <div >
                    {this.caption()}
                </div>
            </div>
        );
    }
}

Img.propTypes = {
    img: PropTypes.string,
    caption: PropTypes.string,
    styleClass: PropTypes.string
};

export default Img;
