import React from 'react'

function Map () {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kavakl%C4%B1%20mahallesi%20istanbul%20caddesi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Map
