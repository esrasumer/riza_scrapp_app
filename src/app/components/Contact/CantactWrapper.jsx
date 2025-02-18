import './style.css'
import { WhatsAppOutlined } from '@ant-design/icons'

export default function HomePage () {
  return (
    <main className='container homePageWrapper'>
      <section>
        <div className='whatsapp-icon'>
          <a
            className='linkWrapper'
            href=' https://wa.me/905386297623'
            target='blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp üzerinden bizimle iletişime geçin'
          >
            <WhatsAppOutlined className='whatsapp' />
            <p>Bize ulaşın</p>
          </a>
        </div>
      </section>
    </main>
  )
}
