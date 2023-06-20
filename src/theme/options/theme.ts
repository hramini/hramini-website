import { PaletteMode, Theme, createTheme } from '@mui/material';
import {
  fontSizeCalc,
  sizeCalc,
} from '../../global/size-calculator/size-calculator';
import { paletteThemeOption } from './palette';

export function getTheme(mode: PaletteMode): Theme {
  const { primary, accent, form, secondary } = paletteThemeOption(mode).palette;

  const checkBoxRadioStyle = {
    width: sizeCalc(16),
    height: sizeCalc(16),
    borderRadius: '50%',
    borderWidth: sizeCalc(1),
    borderStyle: 'solid',
    borderColor: '#d6d6d6',
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    padding: sizeCalc(2),
    '& + .MuiInputLabel-root': {
      display: 'inline-block',
      lineHeight: sizeCalc(22, 13),
      fontSize: fontSizeCalc(13),
      verticalAlign: 'middle',
      marginInlineStart: sizeCalc(8, 13),
      color: accent.dark,
    },
    '&.Mui-focusVisible': {
      outlineWidth: sizeCalc(2),
      outlineColor: primary.main,
      outlineOffset: sizeCalc(1),
      outlineStyle: 'solid',
    },
    '&.Mui-checked': {
      '& > .Mui-checked-inner': {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      },
    },
    '&.Mui-checked:not(.Mui-disabled)': {
      '& > .Mui-checked-inner': {
        backgroundColor: primary.main,
      },
    },
    '&.Mui-checked.Mui-disabled': {
      cursor: 'not-allowed',
      '& > .Mui-checked-inner': {
        backgroundColor: '#d6d6d6',
      },
    },
    '&.Mui-disabled': {
      backgroundColor: '#f5f5f5',
      '& + .MuiInputLabel-root': {
        color: accent.main,
      },
    },
  };

  return createTheme({
    ...paletteThemeOption(mode),
    components: {
      MuiInput: {
        styleOverrides: {
          root: () => ({
            '&::before': {
              borderBottomWidth: `${sizeCalc(1)} !important`,
              borderBottomColor: 'rgba(255, 255, 255, 0.1) !important',
              borderBottomType: 'solid',
            },
            '&.Mui-focused': {
              '&::before': {
                borderBottomWidth: `${sizeCalc(1)} !important`,
                borderBottomColor: 'rgba(255, 255, 255, 0.1) !important',
              },
            },
            '&::after': {
              border: 'none',
            },
            '& > .MuiInput-input': {
              fontSize: fontSizeCalc(24),
            },
            '& + .MuiFormHelperText-root': {
              fontSize: fontSizeCalc(16),
              lineHeight: sizeCalc(24),
              marginTop: sizeCalc(8),
              color: '#B7B7B7',
            },
          }),
        },
      },
      MuiSelect: {
        styleOverrides: {},
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#B7B7B7',
            fontSize: fontSizeCalc(16),
            fontWeight: 400,
            transform: 'translate(0, 25px) scale(1)',
            '&.MuiInputLabel-shrink': {
              color: '#B7B7B7',
              transform: 'translate(0, -1.5px) scale(0.75)',
            },
          },
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            '& .MuiPaginationItem-icon': {
              fill: accent.dark,
            },
            '& .MuiPaginationItem-root ': {
              borderWidth: sizeCalc(1),
              borderColor: '#d6d6d6',
              borderStyle: 'solid',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
              fontWeight: 500,
              fontSize: fontSizeCalc(13),
              width: 32,
              height: 32,
              borderRadius: sizeCalc(8),
              '&.Mui-disabled': {
                opacity: 1,
                '& .MuiPaginationItem-icon': {
                  opacity: 0.38,
                },
              },
              '&.Mui-selected, &.Mui-selected:hover': {
                backgroundColor: primary.main,
                borderColor: primary.main,
                color: '#fff',
                cursor: 'default',
              },
              '&:not(.Mui-selected):hover': {
                borderColor: primary.main,
                color: primary.main,
              },
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            ...checkBoxRadioStyle,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            ...checkBoxRadioStyle,
            '&.MuiCheckbox-root': {
              borderRadius: sizeCalc(3),
              '& > .Mui-checked-inner': {
                borderRadius: sizeCalc(2),
              },
              '& + .MuiFormControlLabel-label': {
                fontSize: fontSizeCalc(13),
                lineHeight: sizeCalc(22, 13),
                marginInlineStart: sizeCalc(8, 13),
              },
            },
            '&.MuiCheckbox-indeterminate:not(.Mui-disabled)': {
              paddingBlock: sizeCalc(5),
              '& > .Mui-indeterminate-inner': {
                backgroundColor: primary.main,
                width: '100%',
                height: '100%',
                borderRadius: sizeCalc(1),
              },
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            overflow: 'visible',
            padding: sizeCalc(3),
            width: 'auto',
            height: 'auto',
            '& > .MuiSwitch-switchBase': {
              top: sizeCalc(4),
              left: sizeCalc(4),
              padding: sizeCalc(2),
              '&.Mui-focusVisible': {
                '& + .MuiSwitch-track': {
                  outlineWidth: sizeCalc(2),
                  outlineColor: primary.main,
                  outlineOffset: sizeCalc(1),
                  outlineStyle: 'solid',
                },
              },
              '&.Mui-checked': {
                right: sizeCalc(4),
                left: 'unset',
                transform: 'none',
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: primary.light,
                },
                '& > .MuiSwitch-thumb': {
                  backgroundColor: secondary.main,
                },
              },
              '&.Mui-disabled': {
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: form.disabled,
                },
                '& > .MuiSwitch-thumb': {
                  borderColor: accent.main,
                  backgroundColor: form.disabled,
                },
              },
            },
            '& > .MuiSwitch-track': {
              width: sizeCalc(32),
              height: sizeCalc(16),
              borderWidth: sizeCalc(1),
              borderStyle: 'solid',
              borderColor: '#d6d6d6',
              backgroundColor: 'transparent',
              opacity: 1,
              borderRadius: sizeCalc(8),
            },
            '& .MuiSwitch-thumb': {
              width: sizeCalc(10),
              height: sizeCalc(10),
              borderWidth: sizeCalc(1),
              borderStyle: 'solid',
              borderColor: primary.main,
              backgroundColor: 'white',
              boxShadow: 'none',
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: '15px',
            fontWeight: 400,
            color: 'black',
            '&.Mui-selected': {
              fontWeight: 700,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            '&.MuiTabs-vertical': {
              '& .MuiTab-root': {
                // color: gray[500],
                fontSize: '15px',
                fontWeight: 400,
                '&.Mui-selected': {
                  fontWeight: 700,
                  // color: secondary[700],
                },
              },
            },
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderWidth: sizeCalc(1),
            borderStyle: 'solid',
            borderColor: '#D6D6D6',
            borderRadius: sizeCalc(8),
            borderCollapse: 'unset',
            overflow: 'hidden',
            '& .MuiTableHead-root': {
              height: sizeCalc(47, 14),
              backgroundColor: '#F5F5F5',
              fontWeight: 400,
              color: accent.dark,
              '& .MuiTableCell-head': {
                borderBottomWidth: sizeCalc(1),
                borderBottomStyle: 'solid',
                borderBottomColor: '#D6D6D6',
                paddingInline: sizeCalc(32),
                fontSize: fontSizeCalc(16),
              },
            },
            '& .MuiTableCell-root': {
              borderBottom: 'none',
            },
            '& .MuiTableCell-body': {
              fontSize: fontSizeCalc(13),
              fontWeight: 400,
              lineHeight: sizeCalc(20, 13),
              paddingInline: sizeCalc(32, 13),
            },
            '& .MuiTableBody-root .MuiTableRow-root:not(:last-of-type) .MuiTableCell-body':
              {
                borderBottomWidth: sizeCalc(1),
                borderBottomStyle: 'solid',
                borderBottomColor: '#D6D6D6',
              },
            '& .MuiTableBody-root .MuiTableRow-root': {
              height: sizeCalc(61),
              '&:hover': {
                backgroundColor: '#F1FBFD',
              },
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            height: sizeCalc(32, 13),
            paddingBlock: sizeCalc(6, 13),
            paddingInline: sizeCalc(8, 13),
            fontSize: fontSizeCalc(13),
            fontWeight: 500,
          },
          colorPrimary: {
            backgroundColor: '#E0F4FF',
            color: '#0E6596',
          },
          colorSuccess: {
            backgroundColor: '#E0FFED',
            color: '#12714F',
          },
          colorError: {
            backgroundColor: '#FFE6E6',
            color: '#961616',
          },
          colorSecondary: {
            backgroundColor: '#FFF7B0',
            color: '#796E0A',
          },
        },
      },

      MuiSvgIcon: {
        styleOverrides: {
          root: {
            verticalAlign: 'middle',
            fill: 'transparent',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'unset',
            boxShadow: 'none',
          },
          containedSecondary: {
            '&.Mui-disabled': {
              backgroundColor: '#bdbdbd',
              color: '#424242',
              border: 'none',
              cursor: 'not-allowed',
            },
          },
          containedPrimary: {
            '&:active': {
              backgroundColor: primary.light,
            },
          },
          containedAccent: {
            color: 'white',
          },
          outlinedPrimary: {},
          outlinedSizeLarge: {
            borderWidth: sizeCalc(1, 16),
          },
          outlinedSizeMedium: {
            borderWidth: sizeCalc(1, 13),
          },
          sizeLarge: {
            minWidth: sizeCalc(168, 14),
            height: sizeCalc(48, 14),
            lineHeight: sizeCalc(48, 14),
            fontSize: fontSizeCalc(14),
            fontWeight: 500,
            borderRadius: sizeCalc(8, 14),
            paddingInline: sizeCalc(24, 14),
            paddingBlock: sizeCalc(8, 14),
            '& > .button-text': {
              lineHeight: sizeCalc(24),
              '& > .material-symbols-outlined': {
                fontSize: fontSizeCalc(14),
                verticalAlign: 'middle',
              },
            },
          },
          sizeMedium: {
            height: sizeCalc(32, 13),
            lineHeight: sizeCalc(32, 13),
            fontSize: fontSizeCalc(13),
            fontWeight: 500,
            borderRadius: sizeCalc(8, 13),
            paddingInline: sizeCalc(16, 13),
            paddingBlock: sizeCalc(6, 13),
            '& > .button-text': {
              lineHeight: sizeCalc(20),
              verticalAlign: 'middle',
              '& > .material-symbols-outlined': {
                fontSize: fontSizeCalc(13),
                verticalAlign: 'middle',
              },
            },
          },
          sizeSmall: {
            height: sizeCalc(32, 12),
            fontSize: fontSizeCalc(12),
            fontWeight: 500,
            borderRadius: sizeCalc(8, 12),
            lineHeight: 'normal',
            '& .MuiSvgIcon-root': {
              fontSize: `${fontSizeCalc(12)} !important`,
            },
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            '&:not(.MuiStepper-small)': {
              borderWidth: sizeCalc(1),
              borderStyle: 'solid',
              borderColor: '#D6D6D6',
              borderRadius: sizeCalc(8),
              height: sizeCalc(80),
            },
          },
        },
      },
      MuiStep: {
        styleOverrides: {
          root: {
            '& .MuiStepLabel-iconContainer': {
              padding: 0,
              marginInlineEnd: sizeCalc(16),
            },
            '&.MuiStep-small': {
              padding: 0,
              '& .MuiStepLabel-iconContainer': {
                marginInlineEnd: 0,
              },
              '& > .MuiStepLabel-root': {
                padding: 0,
              },
              '&.Mui-completed + .MuiStepConnector-root > .MuiStepConnector-line':
                {
                  borderColor: primary.main,
                },
              '& + .MuiStepConnector-root > .MuiStepConnector-line': {
                borderTopWidth: '2px',
              },
            },
          },
          vertical: {
            height: '24px',
            '& > .MuiStepLabel-root': {
              padding: 0,
              '& .MuiStepLabel-label': {
                fontSize: fontSizeCalc(15),
                marginInlineStart: sizeCalc(16),
              },
            },
            '&.Mui-completed + .MuiStepConnector-root > .MuiStepConnector-line':
              {
                borderColor: primary.main,
              },
            '& + .MuiStepConnector-root > .MuiStepConnector-line': {
              minHeight: sizeCalc(48),
              borderLeftWidth: '2px',
            },
            '& + .MuiStepConnector-root': {
              marginLeft: '11px',
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#029dd6',
            fontSize: '13px',
            lineHeight: '26px',
          },
          arrow: {
            color: '#029dd6',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderWidth: sizeCalc(1),
            borderStyle: 'solid',
            borderColor: '#d6d6d6',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: sizeCalc(8),
            '& .MuiCardMedia-root': {
              height: sizeCalc(176),
            },
            '& > .MuiCardContent-root': {
              padding: sizeCalc(16),
            },
            '& > .MuiCardActions-root': {
              paddingInline: sizeCalc(16),
              paddingTop: 0,
              paddingBottom: sizeCalc(24),
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: sizeCalc(14),
            backgroundColor: '#fff',
            borderRadius: sizeCalc(8),
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
            outlineWidth: sizeCalc(1),
            outlineStyle: 'solid',
            outlineColor: '#d6d6d6',
            outlineOffset: sizeCalc(2),
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            '& .MuiPaper-root': {
              backgroundColor: 'transparent',
              borderRadius: sizeCalc(8),
            },
          },
          list: {
            backdropFilter: 'blur(15px)',
            border: '1px solid #19264F',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            backgroundColor: 'rgba(3, 10, 29, 0.5)',
            paddingBlock: sizeCalc(8),
            borderRadius: sizeCalc(8),
            '& > .MuiMenuItem-root': {
              fontSize: fontSizeCalc(14),
              lineHeight: sizeCalc(16, 14),
              paddingBlock: sizeCalc(8, 14),
              paddingInline: sizeCalc(24, 14),
            },
            '& > .MuiMenuItem-root.Mui-selected': {
              backgroundColor: 'transparent',
              fontWeight: 700,
            },
          },
          paper: {
            root: {},
          },
        },
      },
    },
  });
}

export const theme: Theme = getTheme('light');
