import Card from '@components/card';
import { IPartnerEntity } from '@domains/entities/interfaces/iPartner';
import css from './_partners.module.scss';

interface Props{
    partners: IPartnerEntity[];
  }

const Partners = (props:Props)  => {
    console.log('ppppp',props.partners)
    return <div className={css.bodyy} >{maptoCards(props.partners)}</div>
}



 const maptoCards = (partners: IPartnerEntity[]) => {
    if(partners.length > 0){
        return partners?.map(function (partner) {
            return( <Card partner= {partner}/> );
          });
  };
}

export default Partners;