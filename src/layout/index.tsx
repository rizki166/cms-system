import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useNavigate } from 'react-router-dom';
import { SettingsInputComponent } from '@mui/icons-material';
import { CgProfile } from 'react-icons/cg';
import { GrResources } from 'react-icons/gr';
import { RiPantoneLine } from 'react-icons/ri';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
    },
    {
        segment: 'Administrative',
        title: 'Administrative',
        icon: <SettingsInputComponent />,
        children: [
            {
                segment: 'personnel',
                title: 'Personnel',

                icon: <SupervisorAccountIcon />,
                pattern: '/personnel',
            },
            {
                segment: 'profile',
                title: 'Profile',
                icon: <CgProfile />,
                pattern: '/profile',
            }
        ],
    },
    {
        segment: 'Resources',
        title: 'Resources',
        icon: <GrResources />,
        children: [
            {
                segment: 'Pantone',
                title: 'Pantone',

                icon: < RiPantoneLine />,
                pattern: '/Pantone',
            },
        ],
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Settings',
    },

    {
        segment: 'integrations',
        title: 'Integrations',
    },
    {
        segment: 'login',
        title: 'Logout',
        icon: <LogoutIcon />,
        
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);
    const navigate = useNavigate(); // Ambil hook navigate

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => {
                setPathname(String(path)); // Perbarui pathname lokal
                navigate(path); // Lakukan navigasi ke path yang diinginkan
            },
        };
    }, [pathname, navigate]);

    return router;
}





export default function MainLayout(props: any) {
    const { window, children } = props; 

    const router = useDemoRouter('/personnel');
    const demoWindow = window ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <PageContainer>
                    {children}
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
