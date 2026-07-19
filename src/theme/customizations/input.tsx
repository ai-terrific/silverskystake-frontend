import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { typographyClasses } from '@mui/material'
import { Components, Theme, alpha } from '@mui/material/styles'
import { ComponentProps } from 'react'

import { AppIcon } from '@/components/Core'

import { color } from '../themePrimitives'

const SelectDropdownIcon = (props: ComponentProps<typeof AppIcon>) => <AppIcon {...props} size={20} name='dropdown' />

export const inputCustomization: Components<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: 'fit-content',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
        color: '#797979',
        gap: '12px',
        lineHeight: 'normal',
        variants: [
          {
            props: {
              size: 'medium'
            },
            style: {
              backgroundColor: '#fff',
              padding: '12px'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              backgroundColor: '#fff',
              padding: '8px'
            }
          }
        ]
      },
      input: {
        padding: '0px'
      }
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: ({ }) => ({
        transition: '0.3s',
        ':hover': {
          opacity: '0.7'
        },
        '&.MuiSwitch-switchBase': {
          '&.Mui-checked': {
            left: 8
          }
        }
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        padding: '12px',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #E8EDF3',
        boxShadow: '0 1px 4px 0 #0C0C0D0D !important',
        borderRadius: '8px',
        variants: [
          {
            props: {
              color: 'secondary'
            },
            style: {
              backgroundColor: theme.palette.secondary.light,
              border: 'none'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              padding: '8px'
            }
          }
        ],
        ...theme.applyStyles('dark', {
          '& path': {
            stroke: 'white'
          }
        })
      })
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingRight: '12px',
        marginBottom: 4
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({}) => ({
        backgroundColor: 'transparent',
        padding: '12px 24px',
        borderRadius: '0 8px 8px 0',
        border: '1px solid transparent',
        gap: '12px',
        [`& .${typographyClasses.root}`]: {
          fontWeight: 400,
          color: color.greyDark
        },
        '&:hover': {
          transition: 'all 1s',
          background: color.gradient3,
          borderColor: color.gradient3
        },
        '&.Mui-selected': {
          background: color.gradient3,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: `${color.orange} !important`,
          '&::before': {
            border: '1px solid transparent',
            background:
              'linear-gradient(51.6deg, #945eff 0%, #2061ff 36.12%, #ff757d 78.03%, #ffd66c 94.76%) border-box'
          },
          '& path': {
            fill: color.orange
          },
          '& .MuiTypography-root': {
            color: color.orange
          }
        }
      })
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 20
      }
    }
  },
  MuiStep: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiStepButton-root': {
          borderColor: '#1d1d1f !important',
          ...theme.applyStyles('dark', {
            borderColor: '#797979 !important',
            backgroundColor: '#19191b'
          })
        },
        '& .Mui-disabled': {
          borderColor: '#f1f1f1 !important',
          ...theme.applyStyles('dark', {
            borderColor: '#262628 !important'
          })
        },
        '&.Mui-completed .MuiStepButton-root': {
          borderColor: theme.palette.secondary.main
        },
        padding: '0px'
      })
    }
  },
  MuiStepButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '4px 8px 4px 4px',
        borderRadius: '1000px',
        backgroundColor: 'transparent',
        margin: '0px',

        [theme.breakpoints.down('lg')]: {
          padding: '4px'
        }
      })
    }
  },
  MuiStepConnector: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: '32px',
        height: '1px',
        '&.Mui-active .MuiStepConnector-line': {
          borderColor: theme.palette.secondary.main,
          ...theme.applyStyles('dark', {
            borderColor: 'white'
          })
        }
      })
    }
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize'
      },
      iconContainer: ({ theme }) => ({
        '&.Mui-disabled .MuiSvgIcon-root': {
          color: '#f1f1f1'
        },
        '&.Mui-disabled .MuiSvgIcon-root .MuiStepIcon-text': {
          fill: '#797979 '
        },
        '&.Mui-active .MuiSvgIcon-root': {
          color: `#f1f1f1 !important`
        },
        '&.Mui-active .MuiSvgIcon-root .MuiStepIcon-text': {
          fill: '#1d1d1f !important'
        },
        '&.Mui-completed': {
          color: theme.palette.secondary.main
        },

        [theme.breakpoints.down('lg')]: {
          padding: '0px'
        }
      }),
      label: ({ theme }) => ({
        lineHeight: '18px',
        fontWeight: 700,
        fontSize: '12px',
        color: '#797979',
        '&.Mui-active': {
          color: '#1d1d1f !important',
          ...theme.applyStyles('dark', {
            color: 'white'
          })
        },
        '&.Mui-completed': {
          color: theme.palette.secondary.main,

          [theme.breakpoints.down('lg')]: {
            display: 'initial !important',
            padding: '0px 4px'
          }
        },
        [theme.breakpoints.down('lg')]: {
          display: 'none'
        }
      })
    }
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'transparent' }} />,
      checkedIcon: <CheckRoundedIcon sx={{ height: 12, width: 12, color: 'white' }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 12, width: 12 }} />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        height: '14px !important',
        width: '14px !important',
        border: '1px solid ',
        borderColor: theme.palette.divider,
        padding: '4px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        transition: '120ms ease-in',
        '&:hover': {
          borderColor: theme.palette.secondary.main
        },
        '&.Mui-focusVisible': {
          outline: `3px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
          outlineOffset: '2px'
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: color.gradient,
        textTransform: 'none',
        borderRadius: '12px',
        padding: '10px 24px',
        variants: [
          {
            props: {
              size: 'large'
            },
            style: {
              padding: 48
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              height: '2.25rem',
              padding: '8px 12px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '2.5rem'
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'contained'
            },
            style: {
              color: color.white,
              backgroundImage: `linear-gradient(180deg, #0DB1A0 0%, #026056 100%)`
            }
          },
          {
            props: {
              color: 'success',
              variant: 'contained'
            },
            style: {
              color: color.white,
              backgroundImage: `linear-gradient(180deg, #34A853 0%, #067524 100%)`
            }
          },
          {
            props: {
              color: 'warning',
              variant: 'contained'
            },
            style: {
              color: color.white,
              backgroundImage: `linear-gradient(180deg, #FFF6A3 0%, #FF9361 100%)`,
              ...theme.applyStyles('dark', {
                color: 'black'
              })
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'contained'
            },
            style: {
              color: color.dark,
              background: color.white,
              boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
              border: `1px solid ${color.border}`,
              ...theme.applyStyles('dark', {
                border: `1px solid ${color.borderDark}`,
                background: color.layer2Dark,
                color: color.white
              })
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'outlined'
            },
            style: {
              borderColor: color.border,
              ...theme.applyStyles('dark', {
                borderColor: color.borderDark
              })
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'text'
            },
            style: {
              color: color.prime
            }
          }
        ],
        '&.Mui-disabled': {
          color: theme.palette.text.disabled
        }
      }),
      icon: ({ }) => ({
        backgroundColor: '#1A2027'
      })
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        ...theme.applyStyles('dark', {
          color: 'white'
        }),
        variants: [
          {
            props: {
              variant: 'h1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '48px'
              }
            }
          },
          {
            props: {
              variant: 'h2'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '32px'
              }
            }
          },
          {
            props: {
              variant: 'h3'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '24px'
              }
            }
          },
          {
            props: {
              variant: 'h4'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '24px'
              }
            }
          },
          {
            props: {
              variant: 'h6'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '16px'
              }
            }
          },
          {
            props: {
              variant: 'subtitle1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '14px'
              }
            }
          },
          {
            props: {
              variant: 'overline'
            },
            style: {
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationSkipInk: 'none',
              textUnderlineOffset: 'auto',
              textUnderlinePosition: 'from-font',
              textTransform: 'none'
            }
          }
        ]
      })
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: '10px',
        marginLeft: '4px'
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) => ({
        outline: 'none',
        padding: '10px',
        height: '40px',
        borderRadius: '8px',
        border: '1px',
        backgroundColor: theme.palette.background.paper
      }),
      icon: ({ }) => ({
        marginTop: '-2px',
        '& path': {
          stroke: '#868A92'
        }
      }),
      select: {
        padding: 0,
        fontSize: '14px',
        fontWeight: 500,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    },
    defaultProps: {
      IconComponent: SelectDropdownIcon
    }
  },
  MuiMenu: {
    styleOverrides: {
      root: {
        '& .MuiPaper-root': {
          borderRadius: 8,
          boxShadow: 'none'
        }
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        width: '100% !important',
        backgroundColor: 'white',
        border: 'none',
        '&.Mui-selected': {
          backgroundColor: '#E4E7EC'
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      asterisk: {
        color: color.red
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        boxSizing: 'border-box',
        borderRadius: 8
      }
    }
  }
}
