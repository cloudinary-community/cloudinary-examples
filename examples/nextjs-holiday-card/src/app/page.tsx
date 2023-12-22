"use client";

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';

export default function Home() {
  
  return (
    <Container className="max-w-4xl my-12">
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <CldImage
          src="nextjs-holiday-card/colby_ut0z6p"
          width={720}
          height={480}
          crop="fill"
          alt="Holiday Card"
          underlay="nextjs-holiday-card/almos-bechtold-x_sDxxccTtw-unsplash_hwpzhx"
          overlays={[
            {
              text: {
                text: 'Happy New Year!'.toUpperCase(),
                color: 'black',
                fontFamily: 'Oswald',
                fontSize: 80,
                fontWeight: 'bold'
              },
              position: {
                gravity: 'south',
                y: 45
              }
            },
            {
              text: {
                text: 'Happy New Year!'.toUpperCase(),
                color: 'white',
                fontFamily: 'Oswald',
                fontSize: 80,
                fontWeight: 'bold'
              },
              position: {
                gravity: 'south',
                y: 50
              }
            },
          ]}
        />

        <CldImage 
          src="nextjs-holiday-card/snow_wbbpgq"
          width={720}
          height={480}
          crop="fill"
          alt="Holiday Card"
          overlays={[
            {
              publicId: 'nextjs-holiday-card/Photo_on_12-18-23_at_2.24_PM_sk4rjx',
              width: '1.0',
              flags: ['relative'],
              appliedEffects: [{
                multiply: true
              }]
            },
            {
              publicId: 'nextjs-holiday-card/colby_ut0z6p',
              width: '1.0',
              flags: ['relative']
            },
            {
              text: {
                text: 'Happy Holidays!',
                color: 'rgb:1e611d',
                fontFamily: 'Berkshire Swash',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 145
              }
            },
            {
              text: {
                text: 'Happy Holidays!',
                color: 'white',
                fontFamily: 'Berkshire Swash',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 150
              }
            },

            {
              text: {
                text: 'Steve & Janice',
                color: 'rgb:1e611d',
                fontFamily: 'Oswald',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 45
              }
            },
            {
              text: {
                text: 'Steve & Janice',
                color: 'white',
                fontFamily: 'Oswald',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 50
              }
            },
            {
              width: '0.27',
              publicId: 'nextjs-holiday-card/santa-hat_pua72w',
              position: {
                y: -170,
                x: 5
              },
              flags: ['relative']
            },
          ]}
        />

        <CldImage
          src="nextjs-holiday-card/roberto-nickson-5PQn41LFsQk-unsplash_lv9qtc"
          width={720}
          height={480}
          crop="fill"
          gravity="north"
          alt="Holiday Card"
          overlays={[
            {
              publicId: 'nextjs-holiday-card/colby_ut0z6p',
              width: '1.0',
              flags: ['relative']
            },
            {
              text: {
                text: 'Happy Holidays!',
                color: 'rgb:1e611d',
                fontFamily: 'Berkshire Swash',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 45
              }
            },
            {
              text: {
                text: 'Happy Holidays!',
                color: 'white',
                fontFamily: 'Berkshire Swash',
                fontSize: 80
              },
              position: {
                gravity: 'south',
                y: 50
              }
            },

            {
              width: '0.27',
              publicId: 'nextjs-holiday-card/santa-hat_pua72w',
              position: {
                y: -170,
                x: 5
              },
              flags: ['relative']
            },
          ]}
        />
        
        <CldImage
          src="nextjs-holiday-card/colby_ut0z6p"
          width={720}
          height={480}
          crop="fill"
          alt="Holiday Card"
          underlay="nextjs-holiday-card/jason-leung-Xaanw0s0pMk-unsplash_ftbb7i"
          overlays={[
            {
              text: {
                text: 'Happy Birthday!'.toUpperCase(),
                color: 'black',
                fontFamily: 'Oswald',
                fontSize: 80,
                fontWeight: 'bold'
              },
              position: {
                gravity: 'south',
                y: 45
              }
            },
            {
              text: {
                text: 'Happy Birthday!'.toUpperCase(),
                color: 'white',
                fontFamily: 'Oswald',
                fontSize: 80,
                fontWeight: 'bold'
              },
              position: {
                gravity: 'south',
                y: 50
              }
            },
          ]}
        />
      </div>
    </Container>
  )
}