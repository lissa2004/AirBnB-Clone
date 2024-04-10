import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img src='data:image/webp;base64,UklGRgQDAABXRUJQVlA4IPgCAABQEwCdASp6AHoAPxGIvFasKSYjphQJOYAiCWIA1aCzd+cb+Fntw+eA9EfngdRF6AHS5vrAyKuWjOFfYgbRpJOEs6SAtItAUdw02lNiTj5R3R2AYp0xwslBReT3ykf1HOfElPThuz33nazD2d2Wwav5okk893JQf7KB5TmKmZDJZ5lbWG9y7/Yroh7iIc1U5OevJNDj4wRYrb7pzpK8BcJZ0jwAAP71Ck4N4AIRJ13JZ7E0VL0oe9aSqGzx9VhEytnmirsggIydd0c0kChKKz/qQoAq8LTofxf/VUnt9DeqS8+xly5m2LWgOgJX0tYAPWMn+//JDwCKhBpIocQlYWha9REjJb5NckCuSO5SsheSe79EUmvHxq5pUERVXd/g2CYjN80RZISOD8TZkku7ok7AdwdcGbN6PfcafTMLvq+O518eNcWiAfA4NIHwY0Y/sCH6+OiuX376E/tudwOBsNl/wj63bJTPL+VEPz1hNkqKWJajWCNGirPP4exexTayd9+CLGnP2U8ht9XInWeU/++VjcT5LcBch0hXjYoN9FQYAWyuGAAR1sTw+hPhqoxIk3Oc7rhtadc0jSNZHbvjSi1N5kuNs9PadmRwWqXh6bAHrB55wsYgeMJW/mUfjhMQf9mNURRJuZG15FyGoI1vmLeyPdd18BSps+gGDTXRwmhUAq75KPEcLXOWM6+ij8qrXW6XrQ5+P4wrru7pyo1hLjl87QZsDC8cjNe9tN3Ucjsp0CgAxHw8myil/Ma+Rgebum41LTquSQCj3qDmcGUYYQbD6ctn1t1RfLF4iy6g1WT8Uml17wye/wnTwx4lBc4jOQK+OrrQxYxG1fuvP5cDvzfbzHq7AwXenqAlDODYIDjhK7t+6U31h+Ld2PeKeF3WjrcbzC4imTYR+HZHgGgWKb699Ga9jbt7FzxqRaTWixoKNebBFWF8LJMmwqTRZ06ffyeMkjpUgIVRJSBCG8WoOsEStc7DX3MD4NY+YUe76Jsn0xBqUpAAAAAA' alt='logo' className='header_logo'/>
        <div className='header_center'>
            <input type='text' placeholder='Search'/>
            <SearchIcon />
        </div>  
        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
    
    </div>
  )
}

export default Header