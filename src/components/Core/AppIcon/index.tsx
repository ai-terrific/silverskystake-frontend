import { Stack } from '@mui/material'
import { FC } from 'react'

import Affiliate from '@/assets/svg/Affiliate.svg'
import US from '@/assets/svg/US.svg'
import AddUser from '@/assets/svg/add-user.svg'
import Alarm from '@/assets/svg/alarm.svg'
import Bet from '@/assets/svg/bet.svg'
import Bitcoin from '@/assets/svg/bitcoin.svg'
import Blog from '@/assets/svg/blog.svg'
import Capture from '@/assets/svg/capture.svg'
import Casino from '@/assets/svg/casino.svg'
import Chart from '@/assets/svg/chart.svg'
import Close from '@/assets/svg/close.svg'
import DarkLogo from '@/assets/svg/dark-logo.svg'
import Dropdown from '@/assets/svg/dropdown.svg'
import dropLeft from '@/assets/svg/dropleft.svg'
import dropRight from '@/assets/svg/dropright.svg'
import Forum from '@/assets/svg/forum.svg'
import Google from '@/assets/svg/google.svg'
import Headphone from '@/assets/svg/headphone.svg'
import Image from '@/assets/svg/image.svg'
import Logout from '@/assets/svg/log-out.svg'
import LogoMobile from '@/assets/svg/logo-mobile.svg'
import LogoTablet from '@/assets/svg/logo-tablet.svg'
import Logo from '@/assets/svg/logo.svg'
import SideMenu from '@/assets/svg/menu-side.svg'
import Menu from '@/assets/svg/menu.svg'
import Message from '@/assets/svg/message.svg'
import Mode from '@/assets/svg/mode.svg'
import Note from '@/assets/svg/note.svg'
import Person from '@/assets/svg/person.svg'
import Promotion from '@/assets/svg/promotion.svg'
import Search from '@/assets/svg/search.svg'
import Setting from '@/assets/svg/setting.svg'
import Sponsorship from '@/assets/svg/sponsorship.svg'
import Sport from '@/assets/svg/sport.svg'
import Support from '@/assets/svg/support.svg'
import Upload from '@/assets/svg/upload.svg'
import User from '@/assets/svg/user.svg'
import Vault from '@/assets/svg/vault.svg'
import Vip from '@/assets/svg/vip.svg'
import Wallet from '@/assets/svg/wallet.svg'
import World from '@/assets/svg/world.svg'

export const ICON_MAP = {
  'logo-tablet': LogoTablet,
  'logo-mobile': LogoMobile,
  logo: Logo,
  promotion: Promotion,
  affiliate: Affiliate,
  vip: Vip,
  blog: Blog,
  forum: Forum,
  sponsorship: Sponsorship,
  support: Support,
  'drop-left': dropLeft,
  'drop-right': dropRight,
  casino: Casino,
  sport: Sport,
  bitcoin: Bitcoin,
  dropdown: Dropdown,
  alarm: Alarm,
  message: Message,
  mode: Mode,
  search: Search,
  menu: Menu,
  upload: Upload,
  google: Google,
  US: US,
  image: Image,
  vault: Vault,
  user: User,
  'add-user': AddUser,
  chart: Chart,
  note: Note,
  bet: Bet,
  setting: Setting,
  world: World,
  headphone: Headphone,
  wallet: Wallet,
  capture: Capture,
  close: Close,
  'log-out': Logout,
  'side-menu': SideMenu,
  'dark-logo': DarkLogo,
  person: Person
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
  name: IconName
  width?: string | number
  height?: string | number
  className?: string
  size?: number
  colors?: string
  borderRadius?: string
}

export const AppIcon: FC<AppIconProps> = ({
  name,
  colors,
  size = 20,
  height,
  width,
  borderRadius,
  className = '',
  ...props
}) => {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className={`app-icon ${className}`}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content',

        color: colors,
        '& svg': { width: width || size, height: height || size, borderRadius: borderRadius }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}
