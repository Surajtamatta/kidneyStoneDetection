import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {

    components: {
      Button: {
        colorPrimary: '#1c3879',
        algorithm: true, // Enable algorithm
        defaultGhostBorderColor:'#050505',
        defaultShadow:'0 0 0 rgba(0, 0, 0, 0.02)',
        primaryShadow:'0 rgba(0, 0, 0, 0.02)',
      },
      Input: {
        colorPrimary: '#83c2b6',
        algorithm: true, 
      },
      Typography:{
        titleMarginBottom:'0.2em',
        titleMarginTop:'0.3em',
        lineHeightHeading1:1.5,
        lineHeightHeading2:1.4,
        lineHeightHeading3:1.3,
        lineHeightHeading4:1.2,
        lineHeightHeading5:1,
        fontSizeHeading1:20,
        fontSizeHeading2:18,
        fontSizeHeading3:16,
        fontSizeHeading4:14,
        fontSizeHeading5:12,
        fontWeightStrong:600,
      },
      DatePicker:{
        // presetsMaxWidth:150,
        // presetsWidth:100,
        // cellHeight:10,
        // textHeight:20,
        // cellWidth:20,
        // padding:5,
        // fontSize:12
      }
    }
  
};

export default theme;
