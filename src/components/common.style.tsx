import {
  Box,
  Button,
  Card,
  IconButton,
  ListItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  SwitchProps,
  alpha,
  styled
} from '@mui/material'

import { color } from '@/theme'

export const CommonStack = styled(Stack)(({ theme }) => ({
  padding: '20px 0',
  [theme.breakpoints.down('sm')]: {
    padding: '16px 20px'
  }
}))

export const StyledIconButton = styled(IconButton)({
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  boxShadow: '0 0 0 24px solid black'
})

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  padding: 0,
  height: 48,
  backgroundColor: theme.palette.background.default,
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    color: theme.palette.text.primary,
    border: 'none',
    fontSize: 14,
    lineHeight: 20,
    padding: '14px 16px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),

    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderColor: theme.palette.primary.main
    },
    ...theme.applyStyles('dark', {
      borderColor: '#2D3843'
    }),
    '&::placeholder': {
      color: theme.palette.text.secondary
    }
  },
  '& .MuiIconButton-root': {
    background: 'transparent !important',
    border: 'none !important',
    boxShadow: 'none !important'
  }
}))

export const StyledSelect = styled(Select)(({ theme }) => ({
  padding: 0,
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    height: 48,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: '1px solid',
    borderColor: '#E0E3E7',
    padding: '14px 16px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843'
    }),
    '&::placeholder': {
      color: theme.palette.text.secondary
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}))

export const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 46,
  height: 23,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#0DB1A0',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45'
        })
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600]
      })
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3
      })
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 19,
    height: 19
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D'
    })
  }
}))

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '8px 16px',
  border: '1px solid',
  marginBottom: 0,
  borderColor: theme.palette.divider,
  '&:first-child': {
    borderRadius: '16px 16px 0 0'
  },
  '&:last-child': {
    borderRadius: '0 0 16px 16px'
  },
  '&:nth-child(odd)': {
    backgroundColor: theme.palette.background.default
  },
  '&:nth-child(even)': {
    backgroundColor: theme.palette.background.paper
  }
}))

export const SubmitButton = styled(Button)(({}) => ({
  padding: '10px 32px'
}))

export const StyledCard = styled(Card)(({}) => ({
  borderRadius: 0,
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#dfdfdf',
    transition: 'all 0.3s',
    color: `${color.prime} !important`,
    '& path': {
      fill: color.prime
    }
  },
  boxShadow: 'none'
}))

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

export const UploadImage = styled(Box)(({ theme }) => ({
  height: 190,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  background: 'center',
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat !important'
}))
