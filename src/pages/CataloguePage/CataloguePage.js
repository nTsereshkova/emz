import { CatalogueConteiner } from '../../components/CatalogueConteiner';
import './CataloguePage.css';

const CataloguePage = () => {
  return (
    <div className="catalogue_page">
      <p className="slogan"> Каталог продукции </p>
      <CatalogueConteiner />
    </div>
  );
};
export default CataloguePage;
