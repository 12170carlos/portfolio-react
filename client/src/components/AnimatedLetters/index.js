import './index.scss'

/*
first argument: the class we wnat to apply to opur characters
second argument: array of the characters
third argument: index the starting point wich will basically set the delay 
of our letters and the animation


return is going to be a span as we want it to be an line element as these
individual letters needs to form and a word
**/
const AnimatedLetters = ({ letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char,i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters