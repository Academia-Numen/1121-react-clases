
function Card({ content, color }) {

    const { date, day, time, rival, stadium } = content;

    return (
        <div style={{
            background: color,
            maxWidth: 400,
            padding: '.1rem .8rem',
            margin: 15,
        }}>
            <h3>{rival}</h3>
            <div style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                maxWidth: 200
            }}>
                <span>{date}</span>
                <span>{day}</span>
                <span>{time}</span>
            </div>
            <p>{stadium}</p>
        </div>
    );
}

export default Card;
