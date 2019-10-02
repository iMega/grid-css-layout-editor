import React from "react";
import PropTypes from "prop-types";

import Dispatcher from "./Dispatcher";

/**
 * @example
 *
 * import MakeSubscriber from "./Subscriber";
 *
 * class MyComponent extends React.Component {
 *     render = () => (
 *         <Subscriber
 *             eventID={ComponentEditEventID}
 *             callback={payload => {
 *                 console.log('Got MyEventID with payload: ', payload);
 *             }}
 *         />
 *     )
 * }
 *
 */

class Subscriber extends React.Component {
    handler = payload => {
        if (payload.event != this.props.eventID) {
            return;
        }
        this.props.callback(payload);
    };

    componentDidMount = () =>
        (this.subscribe = Dispatcher.register(this.handler));

    componentWillUnmount = () => Dispatcher.unregister(this.subscribe);

    shouldComponentUpdate = () => this.subscribe?.length < 1;

    render = () => null;
}

Subscriber.propTypes = {
    eventID: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
};

export default Subscriber;
