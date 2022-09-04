import dynamic from 'next/dynamic';
import { LiFiWidgetDrawer } from '@lifi/widget';

const LiFiWidgetDynamic = dynamic(
  () => import('@lifi/widget').then((module) => module.LiFiWidgetDrawer),
  {
    ssr: false,
  },
) 

const LiFi= () => {
  return (
    <LiFiWidgetDynamic
    config={
        ({
            containerStyle: {
              border: `1px solid ${
                'rgb(234, 234, 234)'
              }`,
              borderRadius: '16px',
              display: 'flex',
            },
            theme: {
              palette: {
                primary: { main: '#d9cae6' },
                secondary: { main: '#3eabab' },
              },
              shape: {
                borderRadius: 0,
                borderRadiusSecondary: 0,
              },
              typography: {
                fontFamily: 'Josefin Sans',
              },
            },
          })
    }
    />
  );
};

export default LiFi;