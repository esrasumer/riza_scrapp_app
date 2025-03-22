import React from 'react'

function Map () {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title='Rıza Hurdacı Konumu'
        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=tr&amp;q=Esenyurt%20Yunus%20Emre%20mahallesi%20265%20Sokak%2034100%20avc%C4%B1lar%20%C4%B0stanbul+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
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
