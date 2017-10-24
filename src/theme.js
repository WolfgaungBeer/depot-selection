const theme = {

    screen: {
        s: '450px',
        m: '750px',
        l: '1200px',
        xl: '1600px',
    },

    fonts: {
        heading: '"Droid Serif", serif',
        paragraph: '"Ubuntu", sans-serif',
    },

    color: {
        black: '#202021',
        darkWhite: '#EDEDED',
        white: '#F7F7F7',
        lightGray: '#bababa',
        darkGray: '#4f4f4f',
        info: '#48C5FC',
        success: '#37B661',
        warning: '#DD9913',
        error: '#E25650',
        primary: '#2196F3',
        secondary: '#FFC107',
    },

    scale: {
        xxxs: '0.15rem',
        xxs: '0.25rem',
        xs: '0.5rem',
        s: '0.8rem',
        m: '1rem',
        l: '1.2rem',
        xl: '1.6rem',
        xxl: '2rem',
        xxxl: '3rem',
    },

    shadow: {
        s: '1px',
        m: '2px',
        l: '4px',
    },

};

theme.app = {
    sideMenuWidth: '250px',
    sideMenuColor: theme.color.darkGray,
    backgroundColor: theme.color.darkWhite,
};

export default theme;
