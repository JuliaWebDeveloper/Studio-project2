import Accordion from "react-bootstrap/Accordion";
import studioPhoto from "../../assets/studio_1.jpg";

function Question() {

    return(
        <div className='question-container'>
          <img className="studio" src={studioPhoto} width="29%" alt="studio"/>
          <Accordion className='main-accordion' flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h6>Этапы работы со мной</h6></Accordion.Header>
                <Accordion.Body>
                  <ul>
                     <li className="text left">Свяжитесь со мной любым удобным для Вас способом. Я забронирую за Вами выбранную дату съемки.</li> 
                     <li className="text left">Обсуждаем детали будущей съемки. Исходя из Ваших пожеланий и концепции, я предложу варианты фотозон и гармоничные образы.</li>
                     <li className="text left">Проводим фотосессию. Оплата услуг производится в день съемки. При необходимости, заключаем договор на фотоуслуги. Я гарантирую соблюдение выполнения сроков и полного объема работ в соответствии с выбранным Вами тарифом.</li>
                     <li className="text left">Обработка и авторская ретушь всех фотографий.</li>
                     <li className="text left">Вы получаете все фотоматериалы точно в срок.</li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h6>Подготовка к фотосессии</h6></Accordion.Header>
                <Accordion.Body>
                  <p className="text left">В фотосессии детей, учитывайте их режим дня.
                   Чтобы они быстро не утомились и были с хорошим настроением, постарайтесь лечь спать раньше.
                   Можете взять с собой их любимые игрушки и еду.
                   Позитивный настрой родителей так же играет ключевую роль в фотосессии, т.к. </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><h6>Как заказать фотосессию</h6></Accordion.Header>
                <Accordion.Body>
                   <p className="text left">Если Вы хотите заказать съемку, просто свяжитесь со мной любым удобным способом (по телефону +7 999 99 99, WhatsApp, Telegram, электронную почту photograf.ru или любую форму обратной связи на сайте).
                   Мы обсудим все Ваши пожелания, я дам полезные рекомендации, отвечу на все интересующие вопросы и забронирую за Вами необходимую дату. </p>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    )

}
export default Question;



