import "./app-info.css";

const AppInfo = ({data}) => {
    let str1 = "Общее число сотрудников: ";
    str1+=data.length;
    const increased = data.filter(item => item.increase).length;
    let str2 = "Премию получат: ";
    str2+=increased;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>{str1}</h2>
            <h2>{str2}</h2>
        </div>
    )
}

export default AppInfo;