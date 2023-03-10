import { useSelector } from 'react-redux';
import { Vacancie } from '../../components/Vacancie';
import './VacanciesPage.css';

const VacanciesPage = () => {
  const vacancies = useSelector(state => state.vacancies);
  //console.log(vacancies);
  return (
    <div className="vacancies">
      <h1 className="slogan"> Вакансии </h1>
      <p>
        ОТКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО «ГОМЕЛЬСКИЙ ЭЛЕКТРОМЕХАНИЧЕСКИЙ ЗАВОД»
        ПРИГЛАШАЕТ НА РАБОТУ, ПО СЛЕДУЮЩИМ СПЕЦИАЛЬНОСТЯМ:
      </p>
      {vacancies.map(item => (
        <Vacancie item={item} key={item.id} />
      ))}
      <p id="vacancies-last">
        Подробности можно узнать по телефону: 31 06 89, либо у начальника отдела
        кадровой и правовой работы каб.1-34. Прислайте свои резюме на эл.почту
        <b> emz-gomel@yandex.by</b>
      </p>
    </div>
  );
};
export default VacanciesPage;
