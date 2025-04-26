import './cards.css'; // Import the CSS file for styling

const Cards = () => {
    return (
        <div className="cards">
        <div className="card">
            <h2>Card 1</h2>
            <p>This is the first card.</p>
            <button className='buttons'>Click Me</button>
        </div>
        <div className="card">
            <h2>Card 2</h2>
            <p>This is the second card.</p>
            <button className='buttons'>Click Me</button>
        </div>
        <div className="card">
            <h2>Card 3</h2>
            <p>This is the third card.</p>
            <button className='buttons'>Click Me</button>
        </div>
        <div className="card">
            <h2>Card 4</h2>
            <p>This is the third card.</p>
            <button className='buttons'>Click Me</button>
        </div>
        </div>
    );
}

export default Cards;