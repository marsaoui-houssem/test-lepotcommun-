
import css from "./_pageHeader.module.scss";
import { IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory';
import FilterCard from "@components/filterCard";
import { useState } from "react";

interface Props{
  filters: IPartnerCategoryEntity[];
  emitSelctedFilters: (selectedFilters:IPartnerCategoryEntity[]) => {};
}

const PageHeader = (props: Props) => {
  const [clicked, isClicked] = useState(true);
  const maptoCards = (props: Props) => {
    if(props.filters.length > 0){
        return props.filters?.map(function (filter) {
            return( <FilterCard filter={filter} isTousSelected= {clicked} select={() => isClicked(selectFilter(filter, props))}/> );
          });
  };
};
return <div className= {css.pageHeader}> 
<button className={`${css.tags} ${clicked ?css.active :''}`} onClick={()=> isClicked(clearFilters(props))}>Tous</button>
{maptoCards(props)}</div>
}

const selectedFilters :IPartnerCategoryEntity[]=[];

const selectFilter = (filter: IPartnerCategoryEntity, props: Props) => {
  const index = selectedFilters.indexOf(filter);
  if(index > -1){
    selectedFilters.splice(index,1);
  }else{
    selectedFilters.push(filter)
  }
  props.emitSelctedFilters(selectedFilters);
  return false;
};


const clearFilters = (props: Props) => {
  selectedFilters.splice(0, selectedFilters.length);
  props.emitSelctedFilters(selectedFilters);
  return true;
};



export default PageHeader;
