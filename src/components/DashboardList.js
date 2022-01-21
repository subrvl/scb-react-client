import css from './DashboardList.module.css';
import DashboardData from "./DashboardData.js";
import Dashboard from "./Dashboard";


export default () => {
   
    return(
        <div className={`${css.container}`}>
            <h1>Welcome Abroad Joe Smith!</h1>
            <div className="row">
            {
                DashboardData.map((item, index) => {
                  return  <Dashboard key={index} title={item.title}
                  icon={item.icon}
                  info={item.info}
                  backgroundColor={item.backgroundColor}
                  textBg={item.textBg}
                  textColor={item.textColor}
                  details={item.details}
                  completion={item.completion}
                  lastUpdated={item.lastUpdated}
                  updatedBy={item.updatedBy}
                 url={item.url}
                  />
                })
            }
            </div>
        </div>
    )
}