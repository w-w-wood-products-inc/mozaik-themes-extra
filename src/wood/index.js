import colors from './colors'
import charts from './charts'
import typography from './typography'

export default {
    name: 'Dark Wood',
    typography,
    colors,
    root: {
        color: colors.text,
        background: colors.background,
        extend: `
        @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,600,800|Montserrat:400,700');
        
        & a {
            color: #f6ecd0;
        }
        `,
    },
    dashboard: {
        header: {
            background: '#100305',
            color: colors.text,
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.35)',
            title: {},
        },
    },
    widget: {
        background: '#100e10',
        extend: `
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);
        `,
        wrapper: {
            padding: '0.6vmin',
        },
        header: {
            height: '5vmin',
            background: '#0c0b0e',
            color: colors.text,
            extend: `
            box-shadow: 0 1px 0 #292929 inset;
            border-bottom: 1px solid  #253246;
            border-radius: 2px 2px 0 0;
            `,
            subject: {},
            count: {
                color: '#ffffff',
                extend: `
                background-color: #000000;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
                border-radius: 2px;
                padding: 0.5vmin 0.8vmin;
                `,
            },
            icon: {
                fontSize: '2.2vmin',
                color: '#dfa626',
            },
        },
        body: {
            top: '5vmin',
        },
    },
    notifications: {
        item: {
            padding: '1.2vmin 2vmin',
            background: colors.background,
            color: colors.text,
            extend: `
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            `,
        },
    },
    label: {
        extend: `
        border-radius: 2px;
        `,
        main: {
            background: '#1b1b1b',
            color: '#e0c671',
        },
        addon: {
            background: '#131313',
            color: '#e0c671',
        },
    },
    list: {
        item: {
            extend: `
            border-bottom: 1px solid #28323f;
            &:last-child {
                border-bottom: 0;
            }
            `,
            hover: {
                background: '#281415',
            },
            meta: {
                color: '#ffffff',
            },
        },
    },
    charts,
}
