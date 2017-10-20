import { defaultTheme } from 'scado';

const theme = { ...defaultTheme };
theme.fonts = { heading: '"Droid Serif", serif', paragraph: '"Ubuntu", sans-serif' };

theme.app = {
    sideMenuWidth: '250px',
    sideMenuColor: theme.color.darkGray,
    backgroundColor: theme.color.white,
};

export default theme;
