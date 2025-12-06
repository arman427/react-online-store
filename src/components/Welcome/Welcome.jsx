import './welcome.scss';
import holodImg from './../../../public/../public/images/holod-icon.jpg';
import rtxIcon from './../../../public/images/rtx-icon.png';
import ryzenIcon from './../../../public/images/ryzen-icon.jpeg';
import intelicon from './../../../public/images/intel-icon.jpg';
import notebookIcon from './../../../public/images/notebook-icon.png';
import sonyIcon from './../../../public/images/sony-icon.png'
import teleIcon from './../../../public/images/tele.png'

const Welcome = () => {
   return (
      <>
         <section className="welcome">
            <div className="container">
               <div className="welcome-content">
                  <div className="holodilnik-wrapper">
                     <img src={holodImg} alt="" />
                     Бытовая техника
                  </div>
                  <div className="dop-wrapper">
                     <div className="dop-card">
                        <img src={sonyIcon} alt="" />
                        <p>Консоли PlayStation</p>
                     </div>
                     <div className="dop-card">
                        <img src={notebookIcon} alt="" />
                        <p>Ноутбуки</p>
                     </div>
                     <div className="dop-card">
                        <img src={teleIcon} alt="" />
                        <p>Телевизоры</p>
                     </div>
                     <div className="dop-card">
                        <img src={rtxIcon} alt="" />
                        <p>Видеокарты <br />RTX 40, 50 - ой серии</p>
                     </div>
                     <div className="dop-card">
                        <img src={intelicon} alt="" />
                        <p>Процессоры INTEL</p>
                     </div>
                     <div className="dop-card">
                        <img src={ryzenIcon} alt="" />
                        <p>Процессоры RYZEN</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Welcome;