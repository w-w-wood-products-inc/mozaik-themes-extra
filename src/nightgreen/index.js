import colors from './colors'
import charts from './charts'
import typography from './typography'

export default {
    name: 'Night Green',
    typography,
    colors,
    root: {
        color: colors.text,
        background: colors.background,
        extend: `
        @import url('https://fonts.googleapis.com/css?family=Oswald:200,400,600,800|Oswald:400,700');
        
        & a {
            color: #ffffff;
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
        background: '#100305',
        extend: `
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);
        `,
        wrapper: {
            padding: '0.6vmin',
        },
        header: {
            height: '5vmin',
            background: '#100305',
            color: colors.text,
            extend: `
            box-shadow: 0 1px 0 #495b71 inset;
            border-bottom: 1px solid #5de001;
            border-radius: 2px 2px 0 0;
            `,
            subject: {},
            count: {
                color: '#ffffff',
                extend: `
                background-color: #100305;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
                border-radius: 2px;
                padding: 0.5vmin 0.8vmin;
                `,
            },
            icon: {
                fontSize: '2.2vmin',
                color: '#5de001',
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
            background: '#100305',
            color: '#ffffff',
        },
        addon: {
            background: '#100305',
            color: '#ffffff',
        },
    },
    list: {
        item: {
            extend: `
            border-bottom: 1px solid #5de001;
            &:last-child {
                border-bottom: 0;
            }
            `,
            hover: {
                background: '#100305',
            },
            meta: {
                color: '#ffffff',
            },
        },
    },
    charts,
}
