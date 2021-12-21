import css from './_card.module.scss';
import { IPartnerEntity } from '@domains/entities/interfaces/iPartner';

interface Props {
  partner: IPartnerEntity;
}

const Card = (props: Props) => {
  return (
    <div className={css.wrapper}>
    <div className={css.card} key={props.partner.id}>
           
          <img src={'https://recette2.lepotcommuntest.fr' + props.partner.mobileImageUrl} alt="" />
          <div className={css.info}>
            <div>
            <img src={'https://recette2.lepotcommuntest.fr' + props.partner.logoUrl} className={css.logo} alt="" />
            </div>
            <div className={css.alignTxt}>
                <p>{props.partner.desc}</p>
            </div>
            <div className={css.alignBtn}>
              <a href="#" className={css.btn}>choisir</a>
            </div>
                
           
          
          </div>
        </div>
      </div>
  )
};


export default Card;







//////
