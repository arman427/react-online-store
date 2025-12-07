import './help.scss';

const Help = () => {
   return (
      <section className="help">
         <div className="container">
            <div className="help-content">
               <h2 className="help-title">Обратная связь</h2>

               <form action="">
                  <div className="vopros-wrapper">
                     <p>Ваш вопрос, отзыв или пожелание:</p>
                     <textarea cols={50} rows={6}/>
                  </div>

                  <div className="email-wrapper">
                     <p>Адрес электронной почты для получения ответа</p>
                     <input type="email" />
                  </div>

                  <button className='form-button' type='submit'>Отправить сообщение</button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default Help