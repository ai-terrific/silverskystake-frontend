import { Components, Theme } from '@mui/material/styles'

import { color } from '../themePrimitives'

export const surfaceCustomization: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1440px !important',
        padding: 0
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        border: 'none',
        boxShadow: 'none'
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 0
      },
      content: ({ theme }) => ({
        margin: 0,
        [theme.breakpoints.down('lg')]: {
          justifyContent: 'flex-end',
          marginRight: 8
        },
        [theme.breakpoints.down('md')]: {
          justifyContent: 'flex-start'
        }
      })
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px',
        overflowX: 'auto',
        borderRadius: '8px',
        height: 40,
        '& .MuiTabs-scroller': {
          overflowX: 'auto !important'
        },
        '& .MuiTabs-scroller::-webkit-scrollbar': {
          display: 'none'
        }
      },
      list: {
        transition: '0.3s',
        flexDirection: 'row',
        gap: '8px',
        height: '100%'
      },
      indicator: {
        display: 'none'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        borderRadius: '8px',
        padding: '8px 24px',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
        height: '40px',
        minHeight: 0,
        gap: '8px',
        minWidth: 'fit-content',
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        background: theme.palette.background.paper,
        border: '1px solid #E8EDF3',
        '&.Mui-selected': {
          boxShadow: theme.palette.baseShadow
        },
        [theme.breakpoints.down('lg')]: {
          padding: '12px'
        },
        ...theme.applyStyles('dark', {
          borderColor: color.prime,
          '&.Mui-selected': {
            backgroundColor: '#06344CF0',
            '& .MuiTypography-root': {
              color: color.prime
            }
          }
        })
      }),
      icon: {
        margin: '0px'
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        width: 'fit-content',
        height: 'fit-content',
        padding: '4px 8px',
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              backgroundColor: `${theme.palette.secondary.light} !important`
            }
          },

          {
            props: { color: 'success', variant: 'outlined' },
            style: {
              backgroundColor: theme.palette.success.light,
              borderColor: theme.palette.success.main
            }
          },
          {
            props: { color: 'warning', variant: 'outlined' },
            style: {
              backgroundColor: theme.palette.warning.light,
              borderColor: theme.palette.warning.main
            }
          }
        ]
      }),
      label: ({ theme }) => ({
        transition: '0.3s',
        padding: '0px 12px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        textTransform: 'capitalize',
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              color: theme.palette.secondary.main
            }
          },
          {
            props: { size: 'medium' },
            style: {
              padding: '0px 6px',
              fontSize: '14px',
              lineHeight: '20px',
              borderRadius: '4px'
            }
          },
          {
            props: { size: 'small' },
            style: {
              padding: '0px 4px',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              borderRadius: '4px'
            }
          },
          {
            props: { size: 'small', color: 'secondary' },
            style: {
              backgroundColor: 'rgba(226, 71, 68, 0.20)'
            }
          }
        ]
      })
    }
  },
  MuiStack: {
    styleOverrides: {
      root: {
        transition: '0.3s'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        boxShadow: '10px 4px 32px 10px rgba(12, 12, 13, 0.06)',
        backgroundColor: 'white',
        borderRadius: '18px',
        border: '1px solid',
        borderColor: theme.palette.divider,
        ...theme.applyStyles('dark', {
          backgroundColor: '#272729'
        })
      })
    }
  },

  MuiTableContainer: {
    styleOverrides: {
      root: ({}) => ({
        borderRadius: 16
      })
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        '& .MuiTableCell-root': {
          color: theme.palette.secondary.main,
          paddingTop: 8,
          paddingBottom: 8
        }
      })
    }
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&:nth-of-type(odd)': {
          borderTop: '1px solid',
          borderButtom: '1px solid',
          borderColor: theme.palette.divider
        },
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.background.paper
        },

        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0
        }
      })
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: 14
      }
    }
  },

  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        variants: [
          {
            props: { severity: 'warning' },
            style: {
              backgroundColor: theme.palette.warning.light,
              borderColor: theme.palette.warning.main,
              '& .MuiAlertTitle-root': {
                color: theme.palette.warning.main
              }
            }
          }
        ]
      }),
      message: ({ theme }) => ({
        color: theme.palette.text.primary
      })
    }
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        boxShadow: '0px 16px 32px 0px #00000033'
      }
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: '100vw',
        height: 'auto'
      }
    }
  }
}
