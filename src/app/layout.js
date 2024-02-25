import { DM_Sans} from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'The Delux Network',
  description: 'The Delux Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
