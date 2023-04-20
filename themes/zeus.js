import { createTheme} from "@mui/material";

export const zeusTheme = createTheme({
    palette: {
        primary: {
            main: '#DA291C',
        },
        black: {
            main: '#000000',
        }
    },

    components: {
        // Name of the component
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
              borderRadius: '100px',
              padding: '10px 24px',
            },
          },
        },
        MuiButtonBase: {
          defaultProps: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!

          },
        },
        OnboardingTemplate: {
          defaultProps: {
            backgroundColor: '#f2f2f2',
          }
        }
      },
})

export default zeusTheme;