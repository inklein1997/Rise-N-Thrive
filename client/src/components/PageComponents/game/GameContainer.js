import { useContext } from 'react';
import { ColorContext } from '../../../store/color-context';
import classes from './GameContainer.module.css';

const Game = ({
    games
}) => {
    const [textColor, , theme] = useContext(ColorContext)

    return (
        <div className={classes.gameTab}>
            {games &&
                games.map((game)=> (
                    <div className={classes.container} style={theme === "#393939"
                    ? { backgroundColor: 'rgb(41, 41, 41)', color: 'white' }
                    : { backgroundColor:'rgb(41, 41, 41, 0.20)', color: 'black'}}>
                        
                        {/* Container Content */}
                        {/* ----------------- */}

                        {/* Game Title */}
                        <h1 className={`${classes.title} ${classes.mb1}`} style={theme === "#393939" 
                        ? { backgroundColor: `${textColor}52`, color: 'white' } 
                        : { backgroundColor: `${textColor}99`, color: 'black' }}>

                            {/* Title Text */}
                            {game.title}
                        </h1>

                        {/* Game Image */}
                        <a href={game.href}>
                            <img className={classes.img} src={game.img}/>
                        </a>

                        {/* Game Stat */}
                        <h1 className={`${classes.title} ${classes.mt1}`} style={theme === "#393939" 
                        ? { backgroundColor: `${textColor}52`, color: 'white' } 
                        : { backgroundColor: `${textColor}99`, color: 'black' }}>

                            {/* Stat Text */}
                            {game.unique} {game.stat}
                        </h1>

                    </div>

                ))}
        </div>
    )
}

export default Game