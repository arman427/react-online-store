import './contact.scss';

const Contact = () => {
   return (
      <section className="contact">
         <div className="container">
            <div className="contact-content">
               <h2 className="contact-title">Контакты</h2>
               <p>Вы можете найти нас по адресу: г. Волгоград, ул.......................</p>
               <p>Email: arman@shop.ru</p>

               <h3 className='grafik-title'>График работы офиса и склада</h3>
               <p className='grafik-subTitle'>Понедельник <span>с 9:00 до 21:00</span></p>
               <p className='grafik-subTitle'>Вторник <span>с 9:00 до 21:00</span></p>
               <p className='grafik-subTitle'>Среда <span>с 9:00 до 21:00</span></p>
               <p className='grafik-subTitle'>Четверг <span>с 9:00 до 21:00</span></p>
               <p className='grafik-subTitle'>Пятница <span>с 9:00 до 21:00</span></p>
               <p className='grafik-subTitle'>Суббота <span>с 10:00 до 20:00</span></p>
               <p className='grafik-subTitle'>Воскресенье <span>с 10:00 до 20:00</span></p>
            </div>
         </div>
      </section>
   );
}

export default Contact;