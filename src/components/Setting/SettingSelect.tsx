import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { TABS } from '@/constants'

const SettingSelect = () => {
  const navigate = useNavigate()

  const handleChange = (event: SelectChangeEvent<number>) => {
    localStorage.setItem('Current', event.target.value.toString())
    navigate(TABS[Number(event.target.value)].link)
  }

  return (
    <Select onChange={handleChange} defaultValue={Number(localStorage.getItem('Current'))}>
      {TABS.map((item, index) => (
        <MenuItem value={index} key={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SettingSelect
