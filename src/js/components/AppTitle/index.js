import React from 'react';
import { string } from 'prop-types';
import Icon from '../Icon';

const propTypes = {
    title: string,
};

const defaultProps = {
    title: undefined,
};

const AppTitle = ({ title }) => (
    <div id="apptitle">
        <div className="apptitle-wrapper">
            <Icon>apps</Icon>
            {title}
        </div>
    </div>
);

AppTitle.propTypes = propTypes;
AppTitle.defaultProps = defaultProps;

export default AppTitle;
