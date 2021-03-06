import colors from './colors'
import charts from './charts'
import typography from './typography'

export default {
    name: 'Iceberg',
    typography,
    colors,
    root: {
        color: colors.text,
        background: colors.background,
        extend: `
        @import url('https://fonts.googleapis.com/css?family=Merriweather:200,400,600,800|Merriweather:400,700');
        
        & a {
            color: #FFFFFF;
        }
        `,
    },
    dashboard: {
        header: {
            background: '#FFFFFF',
            color: '#000000',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.35)',
            title: {},
        },
    },
    widget: {
        background: '#2D353C',
        extend: `
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);
        `,
        wrapper: {
            padding: '0.6vmin',
        },
        header: {
            height: '5vmin',
            background: '#2D353C',
            color: colors.text,
            extend: `
            border-radius: 2px 2px 0 0;
            `,
            subject: {},
            count: {
                color: '#FFFFFF',
                extend: `
                background-color: #39638a;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
                border-radius: 2px;
                padding: 0.5vmin 0.8vmin;
                `,
            },
            icon: {
                fontSize: '2.2vmin',
                color: colors.icon,
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
            background: '#2D353C',
            color: '#FFFF',
        },
        addon: {
            background: '#2D353C',
            color: '#E1FFFF',
        },
    },
    list: {
        item: {
            extend: `
            border-bottom: 1px solid #1d1e21;
            &:last-child {
                border-bottom: 0;
            }
            `,
            hover: {
                background: '#1d1e21',
            },
            meta: {
                color: '#ecb613',
            },
        },
    },
    charts,
}
