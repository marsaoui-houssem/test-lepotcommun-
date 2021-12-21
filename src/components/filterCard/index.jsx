import { setPriority } from "os";
import { useState } from "react";
import css from "./_filterCard.module.scss";

interface Props {
  filter: IPartnerCategoryEntity;
  isTousSelected:Boolean;
  select : ()=>{};
}

const FilterCard = (props: Props) => {
  const [clicked, isClicked] = useState(false);
  return <div className={css.filterCard } key={props.filter.id} >
          < button className={`${clicked&&!props.isTousSelected?css.selected :''}`} onClick={()=> {isClicked( select(props, clicked))}}> {props.filter.nameKey}</button>
        </div>
};

const select = (props: Props, cliecked: Boolean) => {
  props.select();
 return  !cliecked;
};

export default FilterCard;
