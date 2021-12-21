import { setPriority } from "os";
import css from "./_filterCard.module.scss";

interface Props {
  filter: IPartnerCategoryEntity;
  select : ()=>{};
}

const FilterCard = (props: Props) => {
  
  return <div className={css.filterCard } key={props.filter.id}>
          < button onClick={()=> select(props)}> {props.filter.nameKey}</button>
        </div>
};

const select = (props: Props) => {
  props.select();
};

export default FilterCard;
