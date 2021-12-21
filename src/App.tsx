import { useEffect, useState } from 'react';
import './styles/global.scss';
import di from './di';
import PageHeader from '@components/pageHeader';
import Partners from '@components/partners'; 

import { IPartnerCategoryData, IPartnerCategoryEntity } from '@domains/entities/interfaces/iPartnerCategory';
import { IPartnerEntity } from '@domains/entities/interfaces/iPartner';

function App() {
  
  const [filters, setFilters] = useState<IPartnerCategoryEntity[]>([]);
  const [partners, setPartners] = useState<IPartnerEntity[]>([]);
  const [filtredPartners, setFiltredPartners] = useState<IPartnerEntity[]>([]);

  const doFilter = (selectedFilters: IPartnerCategoryEntity[]) =>{
    let result :IPartnerEntity[] = []
    if(selectedFilters.length==0){
      result= partners;
    }else{
      for(const partner of partners){
        const partnerCategories: IPartnerCategoryData[] = partner.partnerCategories as IPartnerCategoryData[];
        const isFilterMatch  = selectedFilters.filter(filter => 
          partnerCategories.filter( partnerCategory => filter.id === partnerCategory.partnerCategoryID).length>0
          ).length>0;
        if(isFilterMatch){
          result.push(partner);
        }
      }
    }
    setFiltredPartners(result);
  }
  useEffect(() => {
   di.partner.getPartners().then(data => {console.log(data); setPartners(data);  setFiltredPartners(data);})
   di.partnerCategory.getPartnersCategries().then(data => {console.log(data); setFilters(data); })
  
  }, [])
 
  return (
    <div className="App">
      <PageHeader filters=  {filters} emitSelctedFilters={(slectedFilters)=>  doFilter(slectedFilters)} />
      <Partners partners= {filtredPartners} />
    </div>
  );
}


export default App;
