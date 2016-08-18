var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">
                              Created by <a href="http://gbird3.github.io/" target="_blank">Greg Bird</a>
                            </li>
                        </ul>
                </div>
            </div>
        );
};

module.exports = Nav;
