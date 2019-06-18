import colors from './colors'
import charts from './charts'
import typography from './typography'

export default {
    name: 'Spice Bush',
    typography,
    colors,
    root: {
        color: colors.text,
        background: colors.background,
        extend: `
        @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,600,800|Montserrat:400,700');
        
        & a {
            color: #002b2b;
        }
        `,
    },
    dashboard: {
        header: {
            background: '#009e9e',
            color: colors.text,
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.35)',
            title: {},
        },
    },
    widget: {
        background: '#009e9e',
        extend: `
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);
        `,
        wrapper: {
            padding: '0.6vmin',
        },
        header: {
            height: '5vmin',
            background: '#009e9e',
            color: colors.text,
            extend: `
            box-shadow: 0 1px 0 #495b71 inset;
            border-bottom: 1px solid #002b2b;
            border-radius: 2px 2px 0 0;
            `,
            subject: {},
            count: {
                color: '#002b2b',
                extend: `
                background-color: #009e9e;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
                border-radius: 2px;
                padding: 0.5vmin 0.8vmin;
                `,
            },
            icon: {
                fontSize: '2.2vmin',
                color: '#a84c00',
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
            background: '#009e9e',
            color: '#002b2b',
        },
        addon: {
            background: '#009e9e',
            color: '#002b2b',
        },
    },
    list: {
        item: {
            extend: `
            border-bottom: 1px solid #002b2b;
            &:last-child {
                border-bottom: 0;
            }
            `,
            hover: {
                background: '#009e9e',
            },
            meta: {
                color: '#002b2b',
            },
        },
    },
    charts,
}
